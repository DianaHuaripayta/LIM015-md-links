const path = require('path');
const fs = require('fs');
const marked = require('marked');
/* const { title } = require('process'); */
/* const { dir } = require('console');
const { CONNREFUSED } = require('dns'); */
//const { randomBytes } = require('crypto');

const relativePath = 'src\\testLinks'//quite \\archivo1.md
const absolutePath = 'E:\\Diana_Angelica\\LIM015\\LIM015-md-links\\src\\testLinks\\archivo1.md';

//Valido si es absoluta True
let isAbsolute = path.isAbsolute(absolutePath) 

function validatePath(relativePath){
    return path.isAbsolute(relativePath) === true ? relativePath : path.resolve(relativePath)
}
//console.log(validatePath(relativePath), " 1 Relativa a absoluta");

function pathExists(route){
    return fs.existsSync(route);
}
//console.log(pathExists(relativePath))


const isFile = ((route)=> fs.statSync(route).isFile());
//console.log(isFile(absolutePath));

const isMd = (parametroPath) => (path.extname(parametroPath));

const identificarFileDirecory = (paths)=>{
    const directory = fs.lstatSync(paths).isDirectory();
    const file = fs.lstatSync(paths).isFile();
    //console.log(directory)

    let message;
    let getArrayFilesMd =[];
    let rutaValidada = validatePath(paths); //trabaja con la ruta ingresada en esta funcion

    if (directory) {
        message = 'Is  directory';
    } 
    if (file){
        message = 'Is  file';
        if (isMd(rutaValidada) === '.md') {
            getArrayFilesMd.push(rutaValidada);
        }
    }
    return message;
}

//RECURSIVIDAD
const crawl = (dir) => {
    console.log('[+]', dir);
    let carpetas = fs.readdirSync(dir); //LEE y enumera todas las carpetas
    for(let i in carpetas){ //variable i(itera) en las carpetas
        let unir = path.join(dir, carpetas[i]);//unir la directorio y la carpetas existentes
        console.log(unir , "UNIR")
        if (fs.lstatSync(unir).isDirectory()==true) {
            crawl(unir);
           
           console.log(crawl(unir),'UNIDO') 
        }
        else{
            console.log('/t', unir)
            let arrayMdDirectory=[];
            if (isMd(unir)==='.md') {
                arrayMdDirectory.push(unir);
                console.log(arrayMdDirectory)
            }
        }
    }
   console.log(carpetas)
}
crawl(__dirname)
//console.log(crawl(relativePath));

const readingFile = (path) => fs.readFileSync(path).toString();

//MARKED practica
/* const renderer =  new marked.Renderer()
renderer.heading = function (text, level){
    return 'Text:' +text+ 'Level: ' + level
} */
//console.log(marked('## test' , {renderer: renderer}))

const getLink = (path) =>{
    let arrayLinks = [];
    const renderer = new marked.Renderer();
    crawl(path).forEach((file) => {
        renderer.link = (href, title, text) =>{
            const propertiesFind = {
                href,
                text,
                file,
            };
            arrayLinks.push(propertiesFind);
        };
        marked(readingFile(file),{renderer});
    });
    return arrayLinks;
};
//console.log(marked(readingFile(absolutePath)));

module.exports = () => {
    validatePath,
    pathExists,
    isFile, //look
    isMd,
    identificarFileDirecory,
    crawl,
    readingFile,
    getLink
};