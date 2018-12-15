let BlockChain = require("./blockchain/blockchain");

let blockChain = new BlockChain();

let PROOF = 156;

let validProof = (proof) =>{
    let guessHash =hash(proof);
    console.log("Hashing: ", guessHash);
    return guessHash == hash(PROOF);
}

let proofOfWork = () => {
    let proof = 0;
    while(true){
        if(!validProof(proof)){
            proof++
        }
        else{
            break;
        }
    }
    return proof;
}

if(proofOfWork() ==  PROOF){
    blockChain.addNewTransaction("islem", "alex", 200);
    let prevHash =  blockChain.lastBlock().hash
    blockChain.addNewBlock(prevHash);

}

console.log("Chain:", blockChain.chain);

