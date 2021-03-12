var sha256 = require('sha256');

function BlockChain(){
    this.chain=[];
    this.pendingTransactions = [];
}


BlockChain.prototype.createNewBlock = function(nonce,previousBlockHash,hash){
    const newBlock={
        index:this.chain.length+1,
        timestamp:Date.now(),
        nonce:nonce,
        hash:hash,
        previousBlockHash:previousBlockHash
    };
    this.pendingTransactions=[];
    this.chain.push(newBlock);
    return newBlock;
}


BlockChain.prototype.getLastBlock=function(){
    return this.chain[this.chain.length-1];
}

BlockChain.prototype.createNewTransaction = function(amount,sender,recipient){
    const newTransaction={
        amount:amount,
        sender:sender,
        recipient:recipient
    };
    this.pendingTransactions.push(newTransaction);
    return this.getLastBlock()['index']+1;
}

BlockChain.prototype.hashBlock = function(previousBlockHash,currentBlockData,nonce){
    const dataAsString=previousBlockHash+nonce.toString()+JSON.stringify(currentBlockData);
    const hash=sha256(dataAsString);
    return hash;
}

BlockChain.prototype.proofOfWork = function(previousBlockHash,currentBlockData){
    let nonce=0;
    let hash=this.hashBlock(previousBlockHash,currentBlockData,nonce);
    while(hash.substring(0,4)!=='0000'){
        nonce++;
        hash=this.hashBlock(previousBlockHash,currentBlockData,nonce);
    }
    return nonce;
}

console.log(sha256("hello"));

module.exports = BlockChain;
