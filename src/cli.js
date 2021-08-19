const {totalLink, uniqueLink, brokenLinks} = require('./main');
const MDlinks = require('./mdLinks');
// slice retira los dos primeros argumentos ( 'C:\\Program Files\\nodejs\\node.exe', 'E:\\Diana_Angelica\\LIM015\\LIM015-md-links\\src\\cli.js',)
//onst myArgs = process.argv.slice(2);
const argumento = process.argv.slice(2)
if (argumento.length === 1) {
  MDlinks(argumento[0], { validate: false })
    .then(resp => {
    console.log(resp)
  })
}
if (argumento.length === 2) {
  switch (argumento[1]) {
    case '--validate':
      MDlinks(argumento[0], { validate: true })
      .then(resp => {
      console.log(resp)
    })
    break;
    break;
    case '--stats':
      MDlinks(argumento[0], { validate: true }).then(resp =>
        console.log('Total: ' +  totalLink(resp) + '\n' +  'Unique: '+  uniqueLink(resp))
      );
    break;
    case '--help':
      const help = `--validate, el módulo debe hacer una petición HTTP para averiguar si el link funciona o no. Si el link resulta en una redirección a una URL que responde ok, entonces consideraremos el link como ok.
       \n--stats el output (salida) será un texto con estadísticas básicas sobre los links.`;
      console.log(help);
      break;
    default:
    console.log('Lo siento, no es un comando válido.');
}
}

if (argumento.length === 3) {
  if ((argumento[1] === '--validate' && argumento[2] === '--stats') || (argumento[1] === '--stats' && argumento[2] === '--validate' )) {
    MDlinks(argumento[0], { validate: true }).then(resp => console.log('Total: ' + totalLink(resp) + '\n' + 'Unique: ' + uniqueLink(resp) + '\n' + 'Broken: ' + brokenLinks(resp))
      );
  } else {
    console.log('Lo siento, no es un comando válido.')
  }
}