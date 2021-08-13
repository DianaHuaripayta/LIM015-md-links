const path = require('path');
const fs = require('fs');
const marked = require('marked');
const fetch = require('node-fetch');
//LEYENDA --> PATH (PARAMETER)
//Input Path
const absolutePath = 'E:\\Diana_Angelica\\LIM015\\LIM015-md-links\\src\\testLinks\\fileLinks'; //absoluta y directorio
const relativePath = 'src\\testLinks';

//See if the path is relative or absolute
const getPathAbsolute = (route) =>{
    return path.isAbsolute(route) === true ? route : path.resolve(route)
}
  
const validateRoute = (routeAbsolute) =>{
    return fs.existsSync(routeAbsolute) 
}
//console.log(validateRoute('E:\\Diana_Angelica\\LIM015\\LIM015-md-links\\src\\testLinks'));//relative path that was passed by absolute.

//Identificar si es archivo o carpeta
const isFile = (route) => fs.lstatSync(route).isFile();

const isMd = route => ((path.extname(route) === '.md'));

const readDirectory = route => fs.readdirSync(route);

//Test solo para directorios
const getFilesMd = (filePath) =>{
    let arrayNewPathAbs =[]; //Array de todas las rutas con la extension md
    const newPathAbs = getPathAbsolute(filePath);
    if (isFile(newPathAbs)) {
        if (isMd(newPathAbs)) {
            arrayNewPathAbs.push(newPathAbs)
        }
    }else{
        const data = readDirectory(newPathAbs);
        data.forEach((elem) =>{
            const addRoute = path.resolve(newPathAbs, elem);//antes join();arreves
            const file = getFilesMd(addRoute); //recursion se llama a si mismo
            arrayNewPathAbs = arrayNewPathAbs.concat(file);
        });
    }
    return arrayNewPathAbs
};
//console.log(getFilesMd('E:\\Diana_Angelica\\LIM015\\LIM015-md-links\\src\\testLinks'))

const readFile = route => fs.readFileSync(route, 'utf-8');

const getLinks = (route) =>{
    const render = new marked.Renderer();
    let arrayLinks = [];
    route.forEach((File) =>{
     // console.log(File);
        render.link = (href, title, text) =>{
            const propertiesFind = {
                href,
                text,
                file: File,
            }
            arrayLinks.push(propertiesFind);
        };
        marked(readFile(File), { renderer: render})
    });
    
    return arrayLinks
};

const arrMd = [
  "E:\\Diana_Angelica\\LIM015\\LIM015-md-links\\src\\testLinks\\archivo1.md",
  "E:\\Diana_Angelica\\LIM015\\LIM015-md-links\\src\\testLinks\\archivoEmpty.md",
  "E:\\Diana_Angelica\\LIM015\\LIM015-md-links\\src\\testLinks\\fileLinks\\archivo2.md"
];
//console.log(getLinks(arrMd));

const validateLink = (arrayLink) => {
    const statusLinks = arrayLink.map((element) => // map: retorna un array nuevo
    fetch(element.href)
      .then((res) => { //la interfaz Response contiene el código de estado de la respuesta (ejm., 200 para un éxito).
        if(res.status == 200){
          return {
            href: element.href,
            text: (element.text.substring(0, 50)),
            path: element.file,
            status: res.status,
            statusText: 'OK'
          }
        } else if((res.status == 404 )|| (res.status  == 400)){
            return {
            href: element.href,
            text: (element.text.substring(0, 50)),
            path: element.file,
            status: res.status,
            statusText: 'fail'
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

 /*  const saveArray = getLinks(arrMd);
  validateLink(saveArray).then((res)=>console.log(res)); */

   //Suma de todos los links, Unique and broken
  const totalLink = (array) =>{ //statusLink
    const total = array.leght;
    return total;
  } 

  const uniqueLink = (array) =>{
    const unique = [...new Set(array.map((link)=> link.href))]; //
    return unique.length;
  }

  const brokenLinks = (array) =>{
    const broken = array.filter((link) => link.statusText == 'fail');
    //console.log(broken)
    return broken.leght;
  };


  module.exports = {
    getPathAbsolute,
    validateRoute,
    isFile,
    isMd,
    readDirectory,
    getFilesMd,
    readFile,
    getLinks,
    validateLink,
    totalLink,
    uniqueLink,
    brokenLinks
};
