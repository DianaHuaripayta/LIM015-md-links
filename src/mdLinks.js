const pathJS = require('./path')
const mdLinks= (path, options) =>{
  if (!pathJS.existsRoute(path)) {
    console.log('Ruta invalida');
  }
  const allLinks = new Promise((resolve) => {
    resolve(pathJS.getAllLinks(path));//href,text,file
  });
  if (options === undefined) {
    return allLinks;
  }
  if (options.validate === true) {
    return pathJS.validateLinks(path);
  }
  return allLinks;
}
//mdLinks('E:\\Diana_Angelica\\LIM015\\LIM015-md-links\\src\\testLinks', {validate : false}).then((res) => { console.log(res,' Path--- TRUE') });
//mdLinks('E:\\Diana_Angelica\\LIM015\\LIM015-md-links\\src\\testLinks',{validate : false}).then((res) => { console.log(res,' Path --- FALSE') });
//mdLinks('E:\\Diana_Angelica\\LIM015\\LIM015-md-links\\src\\testink',{validate : true}).catch((res) => { console.log(res,'  Path --- Incorrecto') });
//console.log(process.cwd(), 'testLinks\\archivo1.md')


module.exports = mdLinks;