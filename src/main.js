//see the path relative or absolute and other
//const { relative } = require('path');
/* const path = require('path'); //property's node.js
const route = 'readmeTest.md';

const demo = path.join(__dirname, route);
console.log(demo) */
const path = require('path');

const relativePath = 'src\\testLinks\\archivo1.md'//.md cambia
const absolutePath = 'E:\\Diana_Angelica\\LIM015\\LIM015-md-links\\src\\testLinks\\archivo1.md';
let isAbsolute = path.isAbsolute(relativePath) //Valido si es absoluta True
//console.log(isAbsolute)
//Verifica si la ruta es absoluta y si es relativa devuelve absoluta
function validatePath(relativePath){
    return path.isAbsolute(relativePath) === true ? relativePath : path.resolve(relativePath)
}
console.log(validatePath(relativePath));
console.log(validatePath(absolutePath));
/* console.log(__filename) */
/* const path = require('path'); //property's node.js
const absolute = path.isAbsolute('qux/')
console.log(absolute); */
module.exports = () => {
    validatePath
};