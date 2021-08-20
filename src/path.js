const path = require('path');
const fs = require('fs');
const marked = require('marked');
const fetch = require('node-fetch');

const getAbsolutePath = route => ((path.isAbsolute(route) === true) ? route : path.resolve(route));

function existsRoute(absolutePath) {
  return fs.existsSync(absolutePath);
}

const isFile = route => fs.statSync(route).isFile();

const isMD = route => ((path.extname(route) === '.md'));

const readDirectory = route => fs.readdirSync(route);

const getLinkMd = (route) => {
  let arrayOfFiles = [];
  const newRoute = getAbsolutePath(route);
  if (isFile(newRoute)) {
    if (isMD(newRoute)) {
      arrayOfFiles.push(newRoute);
    }
  } else {
    const data = readDirectory(newRoute);
    data.forEach((elem) => {
      const addRoute = path.join(newRoute, elem);
      const file = getLinkMd(addRoute);
      arrayOfFiles = arrayOfFiles.concat(file);
    });
  }
  return arrayOfFiles;
};

const readFile = route => fs.readFileSync(route, 'utf-8');

const getAllLinks = (route) => {
  const render = new marked.Renderer();
  const array = [];
  const data = getLinkMd(route);
  data.forEach((File) => {
    render.link = (Href, title, Text) => {
      array.push({ href: Href, text: Text, file: File });
    };
    marked(readFile(File), { renderer: render });
  });
  return array;
};

const validateLinks = (route) => {
  const data = getAllLinks(route);
  const promises = [];
  data.forEach((element) => {
    promises.push(
      fetch(element.href)
        .then((res) => {
          let statusMessage;
          if (res.status >= 200 && res.status < 400) {
            statusMessage = 'ok';
          }
          if (res.status >= 400) {
            statusMessage = 'fail';
          }
          const obj = {
            href: element.href,
            text: element.text,
            file: element.file,
            status: res.status,
            status_message: statusMessage,
          };
          return obj;
        }),
    );
  });
  return Promise.all(promises);
};


module.exports = {
  getAbsolutePath,
  existsRoute,
  isFile,
  isMD,
  readDirectory,
  getLinkMd,
  readFile,
  getAllLinks,
  validateLinks
};