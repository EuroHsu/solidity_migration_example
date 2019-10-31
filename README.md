# solidity_migration_example

## How to deploy

Install dependencies & configure environment variables.

```
npm i
cp env.js.example env.js
```

There are 2 informations you need to provide.

1. `web3Url`: Ethereum full node url.
2. `privateKey`: Your private key in Ethereum.

```javascript
// env.js
let env = {
  // Private network
  devnet: {
    web3Url: 'http://127.0.0.1:8545',
    privateKey: 'YOUR_PRIVATE_KEY',
  },
  // Testing network
  testnet: {
    web3Url: 'https://ropsten.infura.io',
    privateKey: 'YOUR_PRIVATE_KEY',
  },
  // Main network
  mainnet: {
    web3Url: 'https://mainnet.infura.io',
    privateKey: 'YOUR_PRIVATE_KEY',
  }
};
```

Start to deploy Migration contracts in `testnet`.

```
truffle deploy --reset --network testnet
```
