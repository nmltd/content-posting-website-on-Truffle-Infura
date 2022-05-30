require("dotenv").config();
const Web3 = require("web3");
const InfuraID = process.env.InfuraID;
const API_URL = `https://polygon-mumbai.infura.io/v3/${InfuraID}`;
const web3 = new Web3(new Web3.providers.HttpProvider(API_URL));
const PUBLIC_KEY = process.env.PUBLIC_KEY;
const PRIVATE_KEY = process.env.PRIVATE_KEY;

const contract = require("../client/contract/polygon-contracts/MyNFT.json");

//this is the contract address we get after deploying
const contractAddress=process.env.contractAddress;

const nftContract = new web3.eth.Contract(contract.abi, contractAddress);
//create transaction
async function mintNFTandTransfer(tokenURI) {
  const nonce = await web3.eth.getTransactionCount(PUBLIC_KEY, "latest"); //get latest nonce

  //the transaction
  const tx = {
    from: PUBLIC_KEY,
    to: contractAddress,
    nonce: nonce,
    gas: 500000,
    data: nftContract.methods.mintNFT(PUBLIC_KEY, tokenURI).encodeABI(),
  };

  const signPromise = web3.eth.accounts.signTransaction(tx, PRIVATE_KEY);
  signPromise
    .then((signedTx) => {
      web3.eth.sendSignedTransaction(
        signedTx.rawTransaction,
        function (err, hash) {
          if (!err) {
            console.log(
              "The hash of your transaction is: ",
              hash, //export to tranfer.js
              "\nCheck https://mumbai.polygonscan.com/ to view the status of your transaction!"
            );
            return hash;
          } else {
            console.log(
              "Something went wrong in your transaction:",
              err
            );
          }
        }
      );
    })
    .catch((err) => {
      console.log(" Promise failed:", err);
    });

}

module.exports = mintNFTandTransfer;