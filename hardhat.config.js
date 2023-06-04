require("@nomicfoundation/hardhat-toolbox");
const fs = require("fs");

module.exports = {
  solidity: "0.8.18",
  defaultNetwork : 'gnosis',
  networks: {
    
    gnosis: {
      url: 'https://rpc.gnosischain.com/',
      gasPrice: 1000000000,
      
    },
  },
};
