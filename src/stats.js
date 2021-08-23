const total = (array) =>{ //statusLink
  const total = array.length;
  return total;
} 

const unique = (array) =>{
  const unique = [...new Set(array.map((link)=> link.href))]; //
  return unique.length;
}

const broken = (array) =>{
  const broken = array.filter((link) => link.statusText == 'fail');
  return broken.length;
};
module.exports = {total, unique, broken};
