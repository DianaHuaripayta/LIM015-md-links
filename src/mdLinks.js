const main = require('./main');

const mdLinks = (path, options = {validate : false}) =>
new Promise((resolve, reject)=>{
  //let messege='';
  const pathAbsolute = main.getPathAbsolute(path); //recibe la ruta
  const validPath = main.validateRoute(pathAbsolute); //con la ruta ve si existe
    if (validPath === true) {
        if (options.validate === true) {
            const getLinkAndStatus = main.validateLink(main.getLinks(path));
            resolve (getLinkAndStatus);
        }else{
            const getLink = main.getLinks(path);
            resolve (getLink);
        }
    }else{
        reject('No existe');
    }
    
})
.catch(error => {
    console.log('Error: ' + error)
})
//mdLinks('E:\\Diana_Angelica\\LIM015\\LIM015-md-links\\src\\testLinks',{validate : true}).then((res) => { console.log(res,' Path--- TRUE') });
//mdLinks('E:\\Diana_Angelica\\LIM015\\LIM015-md-links\\src\\testLinks',{validate : false}).then((res) => { console.log(res,' Path --- FALSE') });
//mdLinks('E:\\Diana_Angelica\\LIM015\\LIM015-md-links\\src\\testink',{validate : true}).catch((res) => { console.log(res,'  Path --- Incorrecto') });

module.exports = mdLinks;