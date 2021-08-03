const path = require('path');

const relativePath = 'src\\testLinks'
const absolutePath = 'E:\\Diana_Angelica\\LIM015\\LIM015-md-links\\src\\testLinks\\archivo1.md';

//let isAbsolute = path.isAbsolute(absolutePath) //Valido si es absoluta True
//Verifica si la ruta es absoluta y si es relativa devuelve absoluta
function validatePath(relativePath){
    return path.isAbsolute(relativePath) === true ? relativePath : path.resolve(relativePath)
}
module.exports = () => {
    validatePath
};