//const { options } = require('marked');
const main = require('./main');

const mdLinks = (path, options = {validate = false}) => new Promise((resolve, reject)=>{
    if (main.validateRoute(path) === true) {
        if (options.validate === true) {
            const getLinkAndStatus = main.validateLink(main.getLinks(path));
            resolve (getLinkAndStatus);
        }else{
            const getLink = main.getLinks(path);
            resolve (getLink);
        }
    }else{
        const messege = 'o link não existe '
        reject(messege);
    }
})

module.exports = mdLinks;