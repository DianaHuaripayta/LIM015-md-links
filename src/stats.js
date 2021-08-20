const mdLinks = require('./mdlinks');
/* const total = (array) =>{ //statusLink
  const total = array.length;
  return total;
} 

const unique = (array) =>{
  const unique = [...new Set(array.map((link)=> link.href))]; //
  return unique.length;
}

const broken = (array) =>{
  const broken = array.filter((link) => link.status_message == 'fail');
  return broken.length;
};
 */
const stats = path => mdLinks(path, { validate: true })
  .then((data) => {
    const arrayBroken = data.filter(element => element.status_message === 'fail');
    const arrayAllHref = [];
    data.forEach(element => arrayAllHref.push(element.href));
    const uniques = new Set(arrayAllHref);
    const obj = {
      total: data.length,
      uniques: uniques.size,
      broken: arrayBroken.length,
    };
    return obj;
  });

  //mdLinks('testLinks\\archivo1.md', {validate : true}).then((res) => { console.log(res,' Path--- TRUE') })
module.exports = stats;
