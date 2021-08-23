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

const getLinkMd = (route) => { //route - path md
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
//console.log(getLinkMd('E:\\Diana_Angelica\\LIM015\\LIM015-md-links\\src\\testLinks') , 'GET RUTA MD')

const readFile = route => fs.readFileSync(route, 'utf-8');

const getAllLinks = (route) => {
  let arrayLinks = [];
  const renderer = new marked.Renderer();
  getLinkMd(route).forEach((file) => {
    renderer.link = (href, title, text) => { // renderer define salida ouput con tres propiedades
      const linkProperties = {
        href,
        text,
        file
      };
      arrayLinks.push(linkProperties);
    };
    marked(readFile(file), { renderer });
  });
  return arrayLinks;
};

const saveArray = [
  'E:\\Diana_Angelica\\LIM015\\LIM015-md-links\\src\\testLinks\\archivo1.md',
  'E:\\Diana_Angelica\\LIM015\\LIM015-md-links\\src\\testLinks\\archivoEmpty.md',
  'E:\\Diana_Angelica\\LIM015\\LIM015-md-links\\src\\testLinks\\fileLinks\\archivo2.md'
]
//console.log(getAllLinks(saveArray))
const validateLinks = (arrAllLinks) => {
  const statusLinks = arrAllLinks.map((element) => // map: retorna un array nuevo
  
  fetch(element.href)  
    .then(res => { //la interfaz Response contiene el código de estado de la respuesta (ejm., 200 para un éxito).
      if((res.status >= 200) && (res.status <= 399)){
        return {
          ...element,
          status: res.status,
          statusText: res.statusText
        }
      } else if(res.status >= 400 ){
      	return {
          ...element,
          status: res.status,
          statusText: res.statusText
        }
      }})
    .catch(() => {
      return {
        href: element.href,
        text: (element.text.substring(0, 50)),
        path: element.file,
        status: 404,
        statusText: 'fail'
      }
    })
    );
  return Promise.all(statusLinks);
};

//const objHref = getLinks(saveArray);
/*  const saveArrObj = [
  {
    href: 'https://www.bbc.com/mundo',
    text: 'link',
    file: 'E:\\Diana_Angelica\\LIM015\\LIM015-md-links\\src\\testLinks\\archivo1.md'
  },
  {
    href: 'https://www.ionos.es/paginas-web/desarrollo-web/tutorial-de-markdown',
    text: 'link',
    file: 'E:\\Diana_Angelica\\LIM015\\LIM015-md-links\\src\\testLinks\\archivo1.md'
  },
  {
    href: 'https://www.bculinary.com/es/home',
    text: 'link',
    file: 'E:\\Diana_Angelica\\LIM015\\LIM015-md-links\\src\\testLinks\\fileLinks\\archivo2.md'
  },
  {
    href: 'https://www.ionos.es/paginas-web/tutorial-de-markdown',
    text: 'link',
    file: 'E:\\Diana_Angelica\\LIM015\\LIM015-md-links\\src\\testLinks\\fileLinks\\archivo2.md'
  }
] */
//validateLinks(saveArrObj).then((res)=>console.log(res,'VALIDATE STATUS'));


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