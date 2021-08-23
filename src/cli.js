#!/usr/bin/env node
const {total, unique, broken} = require('./stats');
const mdlinks = require('./mdlinks');

const argumento = process.argv.slice(2)
if (argumento.length === 1) {
  mdlinks(argumento[0], { validate: false })
    .then(resp => {
      resp.forEach(element => {
        console.log(`Href :${element.href} │ Text: ${element.text} │ Path: ${element.path} `)
      });
    })
}
if (argumento.length === 2) {
  switch (argumento[1]) {
    case '--validate':
      mdlinks(argumento[0], { validate: true })
      .then(resp => {
        resp.forEach(element => {
          console.log(`
          -------------------------------------------------
          Href :${element.href} 
          Text: ${element.text} 
          Path: ${element.path} 
          Status: ${element.status} 
          Status Text: ${element.statusText}
          --------------------------------------------------`)
        });
    })
    break;
    case '--stats':
      mdlinks(argumento[0], { validate: true }).then(resp =>console.log('Total: ' + total(resp) + '\n' + 'Unique: ' + unique(resp)));
 
    break;
    case '--help':
      const help = `
      *************************************************************
      Puede usar las siguientes opciones:
      --stats: se utiliza para obtener el número total de links y los que no se repiten (links únicos).
      --validate: se utiliza para validar cada link (si es OK o FAIL, dependiendo del estado) también 
      obtener su href, texto y archivo.
      --stats --validate: Tambien puede ingresar ambas opciones y obtendra como resultado el total 
      de links, únicos y rotos.
      ------------------------------------------------------------------
      En caso de que no use ninguna opción, solo debe ingresar la y tendra como resultado href, el texto
       y el archivo de cada link.
      ********************************************************************`;
      console.log(help);
      break;
    default:
    console.log('Lo siento, no es un comando válido.');
}
}

if (argumento.length === 3) {
  if ((argumento[1] === '--validate' && argumento[2] === '--stats') || (argumento[1] === '--stats' && argumento[2] === '--validate')) {
    mdlinks(argumento[0], { validate: true }).then(resp => console.log('Total: ' + total(resp) + '\n' + 'Unique: ' + unique(resp) + '\n' + 'Broken: ' + broken(resp) ));
  } else {
    console.log('Lo siento, no es un comando válido.')
  }
}
