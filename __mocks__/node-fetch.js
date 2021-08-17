const myMockFn = jest.fn();

module.exports = { myMockFn };
//--- OTRA PRUEBA
/* const nodeFetch = jest.requireActual('node-fetch');
const fetchMock = require('fetch-mock').sandbox();

Object.assign(fetchMock.config, nodeFetch, {
  fetch: nodeFetch,
});

module.exports = fetchMock; */