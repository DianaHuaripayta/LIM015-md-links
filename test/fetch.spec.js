const { validateLinks } = require('../src/path');

describe('validate 200', () => {
  test('validar status 200',() => {
    const input = [
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
    ];
    const result = [
      {
        href: 'https://es.wikipedia.org/wiki/Markdown',
        text: 'Link',
        file: 'E:\\Diana_Angelica\\LIM015\\LIM015-md-links\\test\\test_files\\linkTestFetch.md',
        status: 200,
        statusText: 'OK'
      },
      {
        href: 'https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Global_Objects/Arrays/123456789',
        text: 'LinkBroken',
        file: 'E:\\Diana_Angelica\\LIM015\\LIM015-md-links\\test\\test_files\\linkTestFetch.md',
        status: 404,
        statusText: 'Not Found'
      }
    ];
    return validateLinks(input).then((res) => {
      expect(res).toEqual(result);
    });
  });
});