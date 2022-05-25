require("dotenv").config();
const API_URL = process.env.API_URL;
const { ethers } = require("ethers")
const fs = require('fs')
//const PUBLIC_KEY = process.env.PUBLIC_KEY;
const PRIVATE_KEY = process.env.PRIVATE_KEY;
const provider = new ethers.providers.JsonRpcProvider(API_URL)

const contract = require("../client/contract/polygon-contracts/MyNFT.json")

console.log(JSON.stringify(contract.abi));

// const contractAddress = "0x6909e1Ee72287E883fc0A403670cC560a86B28Eb";
// const nftContract = new web3.eth.Contract(contract.abi, contractAddress);
// //create transaction
// async function mintNFT(tokenURI) {
//   const nonce = await web3.eth.getTransactionCount(PUBLIC_KEY, "latest"); //get latest nonce

//   //the transaction
//   const tx = {
//     from: PUBLIC_KEY,
//     to: contractAddress,
//     nonce: nonce,
//     gas: 500000,
//     data: nftContract.methods.mintNFT(PUBLIC_KEY, tokenURI).encodeABI(),
//   };

//   const signPromise = web3.eth.accounts.signTransaction(tx, PRIVATE_KEY);
//   signPromise
//     .then((signedTx) => {
//       web3.eth.sendSignedTransaction(
//         signedTx.rawTransaction,
//         function (err, hash) {
//           if (!err) {
//             console.log(
//               "The hash of your transaction is: ",
//               hash,
//               "\nCheck Alchemy's Mempool to view the status of your transaction!"
//             );
//           } else {
//             console.log(
//               "Something went wrong when submitting your transaction:",
//               err
//             );
//           }
//         }
//       );
//     })
//     .catch((err) => {
//       console.log(" Promise failed:", err);
//     });
// }
// mintNFT(
//   "https://gateway.pinata.cloud/ipfs/QmR9cmeToyY7paebR5F2CYyoPKq7CjJN33onExP2KtJTvU"
// );