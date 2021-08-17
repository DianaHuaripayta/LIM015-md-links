/* jest.mock('node-fetch');
const fetch = require('node-fetch');

const { validateLink } = require('../src/main');

describe('Validate link', () => {
  test('OK', () => {
    const arr = {
      href: 'https://www.bbc.com/mundo',
      text: 'link',
      file: `${__dirname}\\test_files\\links.md`,
    };
    const obj = {
      href: 'https://www.bbc.com/mundo',
      text: 'link',
      file: `${__dirname}\\test_files\\links.md`,
      status: 200,
      statusText: 'OK',
      };
    fetch.mockImplementation(() => Promise.resolve({
      status: 200,
      statusText: 'OK',
    }));
    return validateLink(arr)
    .then((res) => {
      expect(res).toEqual(obj);
    });
  });

  test('FAIL', () => {
    const arr = {
      href: 'https://abc.github.io/assets404/',
      text: 'link',
      file: `${__dirname}\\test_files\\links.md`,
    };
    const obj = {
      href: 'https://abc.github.io/assets404/',
      text: 'link',
      file: `${__dirname}\\test_files\\links.md`,
      status: 404,
      statusText: 'FAIL',
    };
    fetch.mockImplementation(() => Promise.resolve({
      status: 404,
      statusText: 'Not Found',
    }));
    return validateLink(arr)
    .then((res) => {
      expect(res).toEqual(obj);
    });
  }); */

 /*  test('FAIL', () => {
    const arr = {
      href: 'https://helloeveryone.imjanedoe/',
      text: 'Fail 2',
      file: `${__dirname}\\files_test\\fail_test\\fail.md`,
    };
    const obj = {
      href: 'https://helloeveryone.imjanedoe/',
      text: 'Fail 2',
      file: `${__dirname}\\files_test\\fail_test\\fail.md`,
      status: 'no status',
      message: 'FAIL',
    }; */
    // eslint-disable-next-line prefer-promise-reject-errors
  /*   fetch.mockImplementation(() => Promise.reject({}));
    return validateLink(arr)
    .catch((err) => {
      expect(err).toEqual(obj);
    }); */
 // });
/* }); */

/* const fetchMock = require('../__mocks__/node-fetch');
const mdlinks = require('../src/mdLinks');
const fetch = require('node-fetch');
const { validateLink } = require('../src/main');
jest.mock('node-fetch');

describe('validate status 200 ', () => {
  it('validar status 200', (done) => {
    const inputLinks = [
      {
        href: 'https://www.bbc.com/mundo',
        text: 'link',
        path: 'E:\\Diana_Angelica\\LIM015\\LIM015-md-links\\test\\test_files\\links.md'
      },
      {
        href: 'https://www.npmjs.com/package/fetch-mock',
        text: 'link',
        path: 'E:\\Diana_Angelica\\LIM015\\LIM015-md-links\\test\\test_files\\links.md'
      }
    ]
    
    const result = [
      {
        href: 'https://www.bbc.com/mundo',
        text: 'link',
        path: 'E:\\Diana_Angelica\\LIM015\\LIM015-md-links\\test\\test_files\\links.md',
        status: 200,
        statusText: 'OK'
      },
      {
        href: 'https://www.npmjs.com/package/fetch-mock',
        text: 'link',
        path: 'E:\\Diana_Angelica\\LIM015\\LIM015-md-links\\test\\test_files\\links.md',
        status: 200,
        statusText: 'OK'
      }
    ];
    fetch.mockImplementation({
      status: 200,
      statusText: 'OK'
    });
    return validateLink(inputLinks).then((res) => {expect(res).toEqual(result)});
});


describe('Comprobar links 404 - fail', () => {
  test('Validar status = 404', () => {
    const arrayLinks = [
      {
        href: 'https://www.ionos.es/paginas-web/desarrollo-web/tutorial-de-markdown',
        text: 'link',
        path: 'E:\\Diana_Angelica\\LIM015\\LIM015-md-links\\test\\test_files\\links.md'
      }
    ]
    const result = [
      {
        href: 'https://www.ionos.es/paginas-web/desarrollo-web/tutorial-de-markdown',
        text: 'link',
        path: 'E:\\Diana_Angelica\\LIM015\\LIM015-md-links\\test\\test_files\\links.md',
        status: 404,
        statusText: 'fail'
      }
    ];
    fetch.mockImplementation({
      status: 404,
      statusText: 'fail'
    });
    return validateLink(arrayLinks).then((res) => {expect(res).toEqual(result)
    });
  });
})
}); */