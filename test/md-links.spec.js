const {
  getAbsolutePath,
  existsRoute,
  isFile,
  isMD,
  getLinkMd,
  getAllLinks
} = require('../src/path');
/* -------------getAbsolutePath --------- */
//Validar si existe
describe('es function getAbsolutePath', () => {
  test('comprobar si es una funcion de getAbsolutePath', () => {
    expect(typeof getAbsolutePath).toBe('function');
  });

  test('Verifica si convierte a absolute', () => {
    expect(getAbsolutePath('test\\test_files\\links.md')).toBe('E:\\Diana_Angelica\\LIM015\\LIM015-md-links\\test\\test_files\\links.md');
  });
});
/* -------existsRoute------- */
describe('Comprueba la existencia de la ruta', () => {
  test('Valida si es una función', () => {
  expect(typeof existsRoute).toBe('function');
  });
  it('retorna un boleano si la ruta existe', () => {
     expect(existsRoute('E:\\Diana_Angelica\\LIM015\\LIM015-md-links\\test\\test_files\\links.md')).toBe(true);
  });

  it('tendrá que retornar falso si e path es invalido', () => {
      expect(existsRoute('./documents/example/')).toBe(false);
  });
});
/* -------isFile------- */
//Verifica si es file
describe('la funcion verifica si es file', () => {
  test('comprobar si es una funcion', () => {
    expect(typeof isFile).toBe('function');
  });

  it('verifica si es file', () => {
    expect(isFile('E:\\Diana_Angelica\\LIM015\\LIM015-md-links\\test\\test_files\\links.md')).toBe(true);
  });
});
/* -------isMD------ */
describe('es una funcion', () => {
  it('comprobar si es una funcion', () => {
    expect(typeof isMD).toBe('function');
  });

  it('verifica si tiene la extension .md', () => {
    expect(isMD('E:\\Diana_Angelica\\LIM015\\LIM015-md-links\\test\\test_files\\links.md')).toBe(true);
  });
});

//Leer lo que hay dentro de las carpetas DIR
describe('es una funcion', () => {
  it('comprobar si es una funcion', () => {
    expect(typeof getLinkMd).toBe('function');
  });
const output =[ 'E:\\Diana_Angelica\\LIM015\\LIM015-md-links\\test\\test_files\\broken_Link\\failLink.md' ]

  it('verifica si tiene la extension .md', () => {
    expect(getLinkMd('E:\\Diana_Angelica\\LIM015\\LIM015-md-links\\test\\test_files\\broken_Link')).toEqual(output);
  });
});

/* ------------getAllLinks------------ */
describe('es una funcion', () => {
  test('comprobar si es una funcion', () => {
    expect(typeof getAllLinks).toBe('function');
  });

  it('Obtiene los archivos con extension md ademas busca en cada carpeta en caso sea un directorio', () => {
  
    const result = [
      {
        href: 'https://es.wikipedia.org/wiki/Markdown',
        text: 'Link',
        file: 'E:\\Diana_Angelica\\LIM015\\LIM015-md-links\\test\\test_files\\linkTestFetch.md',
      },
      {
        href: 'https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Global_Objects/Arrays/123456789',
        text: 'LinkBroken',
        file: 'E:\\Diana_Angelica\\LIM015\\LIM015-md-links\\test\\test_files\\linkTestFetch.md',
      }
    ]
    expect(getAllLinks('E:\\Diana_Angelica\\LIM015\\LIM015-md-links\\test\\test_files\\linkTestFetch.md')).toEqual(result);
  });
});

/* //  readFile
describe('es una funcion', () => {
  it('comprobar si es una funcion', () => {
    expect(typeof readFile).toBe('function');
  });
}); */
//Get links
/* describe('es una funcion', () => {
  it('comprobar si es una funcion', () => {
    expect(typeof getLinks).toBe('function');
  });

  test('Esta funcion retorna array de objetos con 3 propiedades href, text, file', () => {
  const output = [
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
      }
    ]
  
  expect(getLinks('E:\\Diana_Angelica\\LIM015\\LIM015-md-links\\test\\test_files\\links.md')).toEqual(output);
});
}); */