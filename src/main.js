const path = require('path');
const fs = require('fs');

const relativePath = 'src\\testLinks\\archivo1.md'
const absolutePath = 'E:\\Diana_Angelica\\LIM015\\LIM015-md-links\\src\\testLinks\\archivo1.md';

let isAbsolute = path.isAbsolute(absolutePath) //Valido si es absoluta True

//Verifica si la ruta es absoluta y si es relativa devuelve absoluta
function validatePath(relativePath){
    return path.isAbsolute(relativePath) === true ? relativePath : path.resolve(relativePath)
}
console.log(validatePath(relativePath), " 1 Relativa a absoluta");

//Ve si existe la ruta
function pathExists(absolutePath){
    return fs.existsSync(absolutePath), " 2 ve si la ruta es existe";
}
console.log(pathExists(absolutePath))

//Existe el archivo
const isFile = ((absolutePath)=> fs.statSync(absolutePath).isFile());
console.log(isFile(absolutePath)," 3 --> ve si el archivo existe");

// si la extension es .md
const isMd = (absolutePath) => (path.extname(absolutePath));
console.log(isMd(absolutePath)," 4  ver la extension")

//Lee la carpeta
fs.readFile('src\\testLinks\\archivo1.md','UTF-8', function (err,data){
    if(err){
        return console.log(err);
    }
    console.log(data, ' 5 lee el documento')
});

//Leer archivos de un directorio
fs.readdir('./src', (error, files)=>{
    if (error){
        throw error
    }
    console.log('Finalizado la lectura');
    console.log(files);
})
// traer los link href



module.exports = () => {
    validatePath,
    pathExists
};