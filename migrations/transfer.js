require("dotenv").config();
const Web3 = require("web3");
const web3 = new Web3(new Web3.providers.HttpProvider(API_URL));
const InfuraID = process.env.INFURA_ID;
const API_URL = `https://polygon-mumbai.infura.io/v3/${InfuraID}`;
const contract = require("../client/contract/polygon-contracts/MyNFT.json");
const contractAddress='0xC4c26a110A94fEeDEAeAcbeC5c2BE06CFB609637';
let tokenID=0;
const mnemonic = process.env.mnemonic;
const ethers = require('ethers');
const myAccount=process.env.PUBLIC_KEY;
const provider = new ethers.providers.JsonRpcProvider(API_URL);
const wallet = new ethers.Wallet(PRIVATE_KEY, provider);
const nftContract = new ethers.Contract(
    contractAddress,
    contract.abi,
    wallet
 );

const transfer = async (targetAccount) => {
    const mintNFTandTransfer = require('./mint_NFT');
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
    //Estimate gas limit
    const gasPrice = await provider.getGasPrice();
    const gasLimit = await nftContract.estimateGas["safeTransferFrom(address,address,uint256)"](myAccount, targetAccount, tokenID, { gasPrice });
    //Call the safetransfer method
    const transaction = await nftContract["safeTransferFrom(address,address,uint256)"](myAccount, targetAccount, tokenID, { gasLimit });
    //Wait for the transaction to complete
    await transaction.wait();
    console.log("Transaction Hash: ", transaction.hash);
}

module.exports = transfer;
