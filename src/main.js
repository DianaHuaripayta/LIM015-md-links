const path = require('path');
const fs = require('fs');
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

module.exports=()=>{
    absOrRela,
    validateRoute
}
