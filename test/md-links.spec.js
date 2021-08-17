const {
  getPathAbsolute,
  validateRoute,
  isFile,
  isMd,
  readDirectory,
  getFilesMd,
  readFile,
  getLinks
} = require('../src/main.js');
//Retornar ruta absoluta
describe('Una ruta relativa debe retornar una ruta absoluta', () => {
  it('comprobar si es una funcion', () => {
    expect(typeof getPathAbsolute).toBe('function');
  });

  it('si es relativa convierte en absoluta', () => {
    expect(getPathAbsolute('test\\test_files')).toEqual('E:\\Diana_Angelica\\LIM015\\LIM015-md-links\\test\\test_files');
  });
});
//Validar si existe
describe('la funcion que valida la ruta', () => {
  it('comprobar si es una funcion', () => {
    expect(typeof validateRoute).toBe('function');
  });

  it('Verifica si la ruta existe', () => {
    expect(validateRoute('test\\test_files\\links.md')).toEqual(true);
  });
});
//Verifica si es file
describe('la funcion verifica si es file', () => {
  it('comprobar si es una funcion', () => {
    expect(typeof isFile).toBe('function');
  });

  it('verifica si es file', () => {
    expect(isFile('E:\\Diana_Angelica\\LIM015\\LIM015-md-links\\test\\test_files\\links.md')).toEqual(true);
  });
});
//Ver si el archivo tiene la extension .md
describe('es una funcion', () => {
  it('comprobar si es una funcion', () => {
    expect(typeof isMd).toBe('function');
  });

  it('verifica si tiene la extension .md', () => {
    expect(isMd('E:\\Diana_Angelica\\LIM015\\LIM015-md-links\\test\\test_files\\links.md')).toEqual(true);
  });
});

//Leer lo que hay dentro de las carpetas DIR
describe('es una funcion', () => {
  it('comprobar si es una funcion', () => {
    expect(typeof readDirectory).toBe('function');
  });

  it('verifica si tiene la extension .md', () => {
    expect(readDirectory('E:\\Diana_Angelica\\LIM015\\LIM015-md-links\\test\\test_files\\broken_Link')).toEqual([ 'failLink.md' ]);
  });
});

// getFilesMd
describe('es una funcion', () => {
  test('comprobar si es una funcion', () => {
    expect(typeof getFilesMd).toBe('function');
  });

  it('Obtiene los archivos con extension md ademas busca en cada carpeta en caso sea un directorio', () => {
    const result = [
      'E:\\Diana_Angelica\\LIM015\\LIM015-md-links\\test\\test_files\\broken_Link\\failLink.md',
      'E:\\Diana_Angelica\\LIM015\\LIM015-md-links\\test\\test_files\\links.md',
      'E:\\Diana_Angelica\\LIM015\\LIM015-md-links\\test\\test_files\\linkTestFetch.md',
    ]
    expect(getFilesMd('E:\\Diana_Angelica\\LIM015\\LIM015-md-links\\test\\test_files')).toEqual(result);
  });
});

//  readFile
describe('es una funcion', () => {
  it('comprobar si es una funcion', () => {
    expect(typeof readFile).toBe('function');
  });
});
//Get links
describe('es una funcion', () => {
  it('comprobar si es una funcion', () => {
    expect(typeof getLinks).toBe('function');
  });

  test('Esta funcion retorna array de objetos con 3 propiedades href, text, file', () => {
    const input = [
    'E:\\Diana_Angelica\\LIM015\\LIM015-md-links\\test\\test_files\\broken_Link\\failLink.md',
    'E:\\Diana_Angelica\\LIM015\\LIM015-md-links\\test\\test_files\\links.md',
    'E:\\Diana_Angelica\\LIM015\\LIM015-md-links\\test\\test_files\\linkTestFetch.md'
  ]
    const output = [
      {
        href: 'https://www.mclibre.org/consultar/css-fuente.html',
        text: 'link',
        file: 'E:\\Diana_Angelica\\LIM015\\LIM015-md-links\\test\\test_files\\broken_Link\\failLink.md'
      },
      {
        href: 'https://www.bbc.com/mundo',
        text: 'link',
        file: 'E:\\Diana_Angelica\\LIM015\\LIM015-md-links\\test\\test_files\\links.md'
      },
      {
        href: 'https://www.npmjs.com/package/fetch-mock',
        text: 'link',
        file: 'E:\\Diana_Angelica\\LIM015\\LIM015-md-links\\test\\test_files\\links.md'
      },
      {
        href: 'https://abc.github.io/assets404/',
        text: 'link',
        file: 'E:\\Diana_Angelica\\LIM015\\LIM015-md-links\\test\\test_files\\links.md'
      },
      {
        href: 'https://router.vuejs.org/api/',
        text: 'Vue',
        file: 'E:\\Diana_Angelica\\LIM015\\LIM015-md-links\\test\\test_files\\linkTestFetch.md'
      },
      {
        href: 'https://developer.mozilla.org/en-US/',
        text: 'MDN',
        file: 'E:\\Diana_Angelica\\LIM015\\LIM015-md-links\\test\\test_files\\linkTestFetch.md'
      }
     
    ]
  
  expect(getLinks(input)).toEqual(output);
});
});