const main = require('./main');

const mdlinks = (stringpath, options={}) => {
    if (!main.validateRoute(stringpath)) {
      throw new Error('Ruta invalida');
    }
    const links = main.getLinks(stringpath);
    return new Promise(
      (resolve) => {
        if (options.validate === true) {
          resolve(main.validateLink(links))
        } else if (options.validate === false) {
          resolve(links);
        }
      }
    )
  };


/* const mdLinks = (path, options = {validate : false}) =>
new Promise((resolve, reject)=>{
  //let messege='';
  const pathAbsolute = main.getPathAbsolute(path); //recibe la ruta
  const validPath = main.validateRoute(pathAbsolute); //con la ruta ve si existe
  console.log(pathAbsolute)
    if (validPath === true) {
        if (options.validate === true) {
            const arrMd = main.getFilesMd(pathAbsolute);
            //console.log(arrMd)
            const arrLink = main.getLinks(arrMd);
            const arrLinkValidated = main.validateLink(arrLink)
            resolve (arrLinkValidated);
        }else{
            const getLink = main.getLinks(path);
            resolve (getLink);
        }
    }else{
        const msj = 'does not exist';
        reject(msj);
    }
    
}); */
/* .catch(error => {
    console.log('Error: ' + error)
}) */
//mdLinks('testLinks\\archivo1.md', {validate : true}).then((res) => { console.log(res,' Path--- TRUE') });
//mdLinks('E:\\Diana_Angelica\\LIM015\\LIM015-md-links\\src\\testLinks',{validate : false}).then((res) => { console.log(res,' Path --- FALSE') });
//mdLinks('E:\\Diana_Angelica\\LIM015\\LIM015-md-links\\src\\testink',{validate : true}).catch((res) => { console.log(res,'  Path --- Incorrecto') });
//console.log(process.cwd(), 'testLinks\\archivo1.md')


module.exports = mdlinks;