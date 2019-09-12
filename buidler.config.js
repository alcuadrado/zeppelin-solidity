require("chai/register-should");
usePlugin("@nomiclabs/buidler-truffle5");

module.exports = {
  mocha: {
    timeout: 10000000
  },
  networks: {
    develop: {
      url: "http://localhost:8546",
      gas: 0x6691b7
    },
    buidler: {
      gas: 0x6691b7,
      accounts: [
        {
          privateKey:
            "0x2bdd21761a483f71054e14f5b827213567971c676928d9a1808cbfa4b7501200",
          balance: "0xd3c21bcecceda0000000"
        },
        {
          privateKey:
            "0x2bdd21761a483f71054e14f5b827213567971c676928d9a1808cbfa4b7501201",
          balance: "0xd3c21bcecceda0000000"
        },
        {
          privateKey:
            "0x2bdd21761a483f71054e14f5b827213567971c676928d9a1808cbfa4b7501202",
          balance: "0xd3c21bcecceda0000000"
        },
        {
          privateKey:
            "0x2bdd21761a483f71054e14f5b827213567971c676928d9a1808cbfa4b7501203",
          balance: "0xd3c21bcecceda0000000"
        },
        {
          privateKey:
            "0x2bdd21761a483f71054e14f5b827213567971c676928d9a1808cbfa4b7501204",
          balance: "0xd3c21bcecceda0000000"
        },
        {
          privateKey:
            "0x2bdd21761a483f71054e14f5b827213567971c676928d9a1808cbfa4b7501205",
          balance: "0xd3c21bcecceda0000000"
        },
        {
          privateKey:
            "0x2bdd21761a483f71054e14f5b827213567971c676928d9a1808cbfa4b7501206",
          balance: "0xd3c21bcecceda0000000"
        },
        {
          privateKey:
            "0x2bdd21761a483f71054e14f5b827213567971c676928d9a1808cbfa4b7501207",
          balance: "0xd3c21bcecceda0000000"
        },
        {
          privateKey:
            "0x2bdd21761a483f71054e14f5b827213567971c676928d9a1808cbfa4b7501208",
          balance: "0xd3c21bcecceda0000000"
        },
        {
          privateKey:
            "0x2bdd21761a483f71054e14f5b827213567971c676928d9a1808cbfa4b7501209",
          balance: "0xd3c21bcecceda0000000"
        }
      ]
    }
  }
};
