//---mocks
const nodeFetch = jest.requireActual('node-fetch');
const fetchMock = require('fetch-mock').sandbox();
  
Object.assign(fetchMock.config, {
    fetch: nodeFetch
});

fetchMock.config.sendAsJson = false;
fetchMock.config.overwriteRoutes = false;

fetchMock
    .mock('https://es.wikipedia.org/wiki/Markdown', 200)
    .mock('https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Global_Objects/Arrays/123456789', 404)

module.exports = fetchMock;
