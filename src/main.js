const path = require('path');
const fs = require('fs');
const marked = require('marked');
//LEYENDA --> PATH (PARAMETER)
//Input Path
const absolutePath = 'E:\\Diana_Angelica\\LIM015\\LIM015-md-links\\src\\testLinks\\fileLinks'; //absoluta y directorio
const relativePath = 'src\\testLinks';

//See if the path is relative or absolute
const absOrRela = (route) =>{
    return path.isAbsolute(route) === true ? route : path.resolve(route)
}
console.log(absOrRela(absolutePath));  //convert relative a absolute || if the path was absolute and equal to true, just continue
//See if the path exists in the local  
//from here the tests are with the relative path that was passed by absolute 'E:\\Diana_Angelica\\LIM015\\LIM015-md-links\\src\\testLinks'
const validateRoute = (routeAbsolute) =>{
    return fs.existsSync(routeAbsolute) 
}
console.log(validateRoute('E:\\Diana_Angelica\\LIM015\\LIM015-md-links\\src\\testLinks'));//relative path that was passed by absolute.

//Identificar si es archivo o carpeta
const file = (route) =>{
    const file = fs.lstatSync(route).isFile();
    let message;
    if (file){
        message = 'Is  file';
    }
    return message;
}

//Test solo para directorios
const getFilesMd = (filePath) =>{
    const itemArray =[]; //Array de todas las rutas con la extension md
    const statFile = fs.statSync(filePath);
    if (statFile.isDirectory()) {
        const dirFile = fs.readdirSync(filePath);
        if (dirFile.length > 0) {
            return dirFile.reduce((acc,item)=>{
                const newPathAbs = path.join(filePath,item);
              //Recursividad
               return acc.concat(getFilesMd(newPathAbs)); 
            },[]); 
        }
    }else if (path.extname(filePath) === '.md') {
        itemArray.push(filePath);//Agregar al array con los links encontrados
    }
    return itemArray;
};
console.log(getFilesMd('E:\\Diana_Angelica\\LIM015\\LIM015-md-links\\src\\testLinks'))

const readFileTest = (routeFile) =>{
      for(x in routeFile){
          routeFile[x]
          let insideArray = fs.readFileSync(routeFile[x],'utf-8').split("\n");
          console.log(insideArray,[
              'E:\\Diana_Angelica\\LIM015\\LIM015-md-links\\src\\testLinks\\archivo1.md',
              'E:\\Diana_Angelica\\LIM015\\LIM015-md-links\\src\\testLinks\\archivoEmpty.md',
              'E:\\Diana_Angelica\\LIM015\\LIM015-md-links\\src\\testLinks\\fileLinks\\archivo2.md'
            ], ' --> dentro del Array')
   
      }
}  
console.log(readFileTest([
    'E:\\Diana_Angelica\\LIM015\\LIM015-md-links\\src\\testLinks\\archivo1.md',
    'E:\\Diana_Angelica\\LIM015\\LIM015-md-links\\src\\testLinks\\archivoEmpty.md',
    'E:\\Diana_Angelica\\LIM015\\LIM015-md-links\\src\\testLinks\\fileLinks\\archivo2.md'
  ]), ' --> read test');

module.exports=()=>{
    absOrRela,
    validateRoute,
    file,
    getFilesMd,
    readFileTest
}
