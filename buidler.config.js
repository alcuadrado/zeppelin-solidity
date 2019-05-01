require('@nomiclabs/buidler-truffle5');
require('chai/register-should');

module.exports = {
  networks: {
    coverage: {
      url: 'http://localhost:8555'
    }
  },
  solc: {
    version: '0.5.7'
  }
};
