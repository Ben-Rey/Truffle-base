const HDWalletProvider = require("@truffle/hdwallet-provider");

require("dotenv").config();

module.exports = {
  networks: {
    development: {
      host: "127.0.0.1",
      port: 8545,
      network_id: "*"
    },
    ropsten: {
      provider: function () {
        return new HDWalletProvider({
          mnemonic: { phrase: `${process.env.MNEMONIC}` },
          providerOrUrl: `https://ropsten.infura.io/v3/${process.env.INFURA_ID}`
        });
      },
      network_id: 3
    },
    kovan: {
      provider: function () {
        return new HDWalletProvider({
          mnemonic: { phrase: `${process.env.MNEMONIC}` },
          providerOrUrl: `https://kovan.infura.io/v3/${process.env.INFURA_ID}`
        });
      },
      network_id: 42
    },
    mumbai: {
      provider: function () {
        return new HDWalletProvider({
          mnemonic: { phrase: `${process.env.MNEMONIC}` },
          providerOrUrl: `https://rpc-mumbai.maticvigil.com`
        });
      },
      network_id: 80001,
      gasPrice: 7000000000
    }
  },
  plugins: ["solidity-coverage"],
  mocha: {
    timeout: 100000,
    reporter: "eth-gas-reporter"
  },
  compilers: {
    solc: {
      version: "0.8.14",
      settings: {
        optimizer: {
          enabled: false,
          runs: 200
        }
      }
    }
  }
};
