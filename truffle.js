let env = require('./env');
let HDWalletProvider = require("truffle-hdwallet-provider");

let devnet = env.devnet;
let testnet = env.testnet;
let mainnet = env.mainnet;

module.exports = {
  // Solidity compiler configuration
  solc: {
    // Optional: Optimizer settings
    optimizer: {
      // Disabled by default
      enabled: true,
      // Optimize for how many times you intend to run the code.
      // Lower values will optimize more for initial deployment cost, higher values will optimize more for high-frequency usage.
      runs: 200
    }
  },
  networks: {
    development: {
      // provider - Web3 provider instance Truffle should use to talk to the Ethereum network.
      //          - Make sure wallet providers in a function closure to ensure that only one network is ever connected at a time.
      provider: function() {
        return new HDWalletProvider(devnet.privateKey, devnet.web3Url);
      },
      // network_id - '*' means match any network id
      network_id: '*',
      // gas - Gas limit
      gas: 4700000,
      // gasPrice - Use 1 Gwei
      gasPrice: 1000000000
    },
    testnet: {
      provider: function() {
        return new HDWalletProvider(testnet.privateKey, testnet.web3Url);
      },
      network_id: '*',
      gas: 4700000,
      gasPrice: 1000000000
    },
    mainnet: {
      provider: function() {
        return new HDWalletProvider(mainnet.privateKey, mainnet.web3Url);
      },
      // network_id - 1 means ethereum public network
      network_id: 1,
      gas: 4700000,
      gasPrice: 1000000000
    }
  }
}
