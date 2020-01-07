require("chai/register-should");
usePlugin("@nomiclabs/buidler-truffle5");

module.exports = {
  defaultNetwork: "buidlerevm",
  mocha: {
  },
  solc: {
    optimizer: {
      enabled: false
    }
  },
  networks: {
    develop: {
      url: "http://localhost:8546"
    },
    buidlerevm: {
      hardfork: "istanbul",
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
