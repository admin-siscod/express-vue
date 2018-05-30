// subject:

const vue = require('./vue');



// mocks:

let req;
let res;



// tests:

describe('page - vue', function() {
  beforeEach(function() {
    req = nodeMocksHttp.createRequest();
    res = nodeMocksHttp.createResponse();
    res.sendFile = jest.fn();
  });

  describe('get()', () => {
    beforeEach(() => {
      vue.get(req, res);
    });

    it('renders base Vue HTML file', () => {
      expect(res.sendFile).toHaveBeenCalledWith(`${appRoot}/app/dist/index.html`);
    });
  });
});