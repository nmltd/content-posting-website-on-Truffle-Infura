require('dotenv').config();
const { API_URL, PRIVATE_KEY } = process.env;
const HDWalletProvider = require('@truffle/hdwallet-provider');
const fs = require('fs');
const {mnemonic} = process.env;

module.exports = {

  /**
  * contracts_build_directory tells Truffle where to store compiled contracts
  */
  contracts_build_directory: './client/contract/polygon-contracts',

  /**
  * contracts_directory tells Truffle where the contracts you want to compile are located
  */
  contracts_directory: './contracts/polygon',


  networks: {
    mumbai: {
      provider: () => new HDWalletProvider(mnemonic, API_URL),
      network_id: 80001,
      confirmations: 2,
      timeoutBlocks: 200,
      skipDryRun: true
    },
  
  },
  // Set default mocha options here, use special reporters etc.
  mocha: {
    // timeout: 100000
  },

  // Configure your compilers
  compilers: {
    solc: {
      version: "0.8.7"
        }
  },
}
