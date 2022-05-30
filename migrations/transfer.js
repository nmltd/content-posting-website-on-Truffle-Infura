require("dotenv").config();
const API_URL = process.env.API_URL;
const contract = require("../client/contract/polygon-contracts/MyNFT.json");
const abi= contract.abi;
const contractAddress=process.env.contractAddress;
let tokenID=0;
const mnemonic = process.env.mnemonic;
const ethers = require('ethers');
const myAccount=process.env.myAccount;
const provider = new ethers.providers.JsonRpcProvider(API_URL);

const transfer = async (targetAccount) => {
    const mintNFTandTransfer = require('./mint_NFT');

    const signer = ethers.Wallet.fromMnemonic(mnemonic);
    console.log(mnemonic);
    // This will get the hash after the nft is minted
    const hash=await mintNFTandTransfer("https://gateway.pinata.cloud/ipfs/QmR9cmeToyY7paebR5F2CYyoPKq7CjJN33onExP2KtJTvU");
    console.log(hash);
    web3.eth.getTransactionReceipt(hash).then(function(data){
        try {
            let transaction = data;
            let logs = transaction.logs;
            //getting the tokenID from the hash
            tokenID = web3.utils.hexToNumber(logs[0].topics[3]);
            console.log(tokenID);
            
        } catch (err) {
            console.error(err);
        }
    });
    const nftContractReadonly = new ethers.Contract(contractAddress, abi, provider);
    const nftContract = nftContractReadonly.connect(signer);

    // Transfer the NFT
    nftContract.safetransferFrom(targetAccount, myAccount, tokenID);
}

module.exports = transfer;
