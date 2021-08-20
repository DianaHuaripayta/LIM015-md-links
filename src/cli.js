const mdLinks = require('./functionCli');
/* eslint-disable no-console */

const path = process.argv[2];
const [,,, ...option] = process.argv;
const options = option.join(' ');
if (path === undefined) {
    console.log(`Ruta no existe, ingrese una ruta válida `);
  } else {
    mdLinks(path,options)
      .then((response) => console.log(response))
      .catch((err) => console.log(err));
  }

/* mdLinks(path, options)
  .then((response) => {
    console.log(response);
  }); */
 // .catch(console.error);
 /*  mdLinks("./some/example.md", { validate: true })
  .then((links) => {
    // => [{ href, text, file, status, ok }, ...]
  }) */
  //mdLinks('E:\\Diana_Angelica\\LIM015\\LIM015-md-links\\src\\testLinks', {validate : true}).then((res) => { console.log(res,' Path--CLI.js') })
  