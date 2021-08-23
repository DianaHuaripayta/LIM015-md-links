const {validateLinks} = require('./path')
const functionPath = require('./path')

const mdlinks = (stringpath, options={}) => {
  if (!functionPath.existsRoute(stringpath)) {
    throw new Error('Ruta invalida');
  }
  const links = functionPath.getAllLinks(stringpath);
  return new Promise(
    (resolve) => {
      if (options.validate === true) {
        resolve(validateLinks(links))
      } else if (options.validate === false){
        resolve(links);
      }
    }
  )
};
module.exports = mdlinks;