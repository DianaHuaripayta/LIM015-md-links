const fetchMock = require('../__mocks__/node-fetch');
const fetch = require('node-fetch');
const { validateLink } = require('../src/main');

jest.mock('node-fetch');

describe('validate 200', () => {
  it('validar status 200', (done) => {
    const input = [
      {
        href: 'https://router.vuejs.org/api/',
        text: 'Vue',
        file: 'E:\\Diana_Angelica\\LIM015\\LIM015-md-links\\test\\test_files\\linkTestFetch.md',
      },
      {
        href: 'https://developer.mozilla.org/en-US/',
        text: 'MDN',
        file: 'E:\\Diana_Angelica\\LIM015\\LIM015-md-links\\test\\test_files\\linkTestFetch.md',
      }
    ]
    const result = [
      {
        href: 'https://router.vuejs.org/api/',
        text: 'Vue',
        path: 'E:\\Diana_Angelica\\LIM015\\LIM015-md-links\\test\\test_files\\linkTestFetch.md',
        status: 200,
        statusText: 'OK'
      },
      {
        href: 'https://developer.mozilla.org/en-US/',
        text: 'MDN',
        path: 'E:\\Diana_Angelica\\LIM015\\LIM015-md-links\\test\\test_files\\linkTestFetch.md',
        status: 200,
        statusText: 'OK'
      }
    ];
    fetch.mockImplementation({
      status: 200,
      statusText: 'OK'
    });
    return validateLink(input).then((res) => {expect(res).toEqual(result)
  });
});
});