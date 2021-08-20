
const fetchMock = require('../__mocks__/node-fetch');
const fetch = require('node-fetch');
const { validateOptions } = require('../src/path');
//const mdlinks = require('../src/mdlinks.js');
jest.mock('node-fetch');

describe('validate 200', () => {
  it('validar status 200', (done) => {
    const resultValidateLinks = [
      {
        href: 'https://es.wikipedia.org/wiki/Markdown',
        text: 'Markdown',
        path: 'E:\\Diana_Angelica\\LIM015\\LIM015-md-links\\test\\test_files\\links.md',
      },
      {
        href: 'https://es.wikipedia.org/wiki/Markdown',
        text: 'markdown2',
        path: 'E:\\Diana_Angelica\\LIM015\\LIM015-md-links\\test\\test_files\\linkTestFetch.md',
      },
      {
        href: 'https://jestjs.io/docs/expect#expectassertionsnumber',
        text: 'good',
        path: 'E:\\Diana_Angelica\\LIM015\\LIM015-md-links\\test\\test_files\\broken_Link\\failLink.md',
      }
    ]
    const result = [
      {
        href: 'https://es.wikipedia.org/wiki/Markdown',
        text: 'Markdown',
        path: 'E:\\Diana_Angelica\\LIM015\\LIM015-md-links\\test\\test_files\\links.md',
        status: 200,
        statusText: 'OK'
      },
      {
        href: 'https://es.wikipedia.org/wiki/Markdown',
        text: 'markdown2',
        path: 'E:\\Diana_Angelica\\LIM015\\LIM015-md-links\\test\\test_files\\linkTestFetch.md',
        status: 200,
        statusText: 'OK'
      },
      {
        href: 'https://jestjs.io/docs/expect#expectassertionsnumber',
        text: 'good',
        path: 'E:\\Diana_Angelica\\LIM015\\LIM015-md-links\\test\\test_files\\broken_Link\\failLink.md',
        status: 200,
        statusText: 'OK'
      }
    ];
    fetch.mockImplementation({
      status: 200,
      statusText: 'OK'
    });
    return validateOptions(resultValidateLinks).then((res) => {expect(res).toEqual(result)
  });
});
});