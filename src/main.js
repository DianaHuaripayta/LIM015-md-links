const path = require('path');
const fs = require('fs');
const marked = require('marked');
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
console.log(validateRoute('E:\\Diana_Angelica\\LIM015\\LIM015-md-links\\src\\testLinks'));//relative path that was passed by absolute.

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
            const addRoute = path.join(newPathAbs, elem);
            const file = getFilesMd(addRoute); //recursion se llama a si mismo
            arrayNewPathAbs = arrayNewPathAbs.concat(file);
        });
    }
    return arrayNewPathAbs
};

const readFile = route => fs.readFileSync(route, 'utf-8');
const getLinks = (route) =>{
    const render = new marked.Renderer();
    let arrayLinks = [];
    const dataDemo = getFilesMd(route);
    dataDemo.forEach((File) =>{
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

module.exports = {
    getPathAbsolute,
    validateRoute,
    isFile,
    isMd,
    readDirectory,
    getFilesMd,
    readFile,
    getLinks
}
