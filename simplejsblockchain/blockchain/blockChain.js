let hash = require('object-hash');

class blockChain {

    constructor() {
        //Create
        this.chain = [];
        //Transaction
        this.curr_transactions = [];
    }

    addNewBlock(){
        let block ={
            index: this.chain.length,
            timestamp: Date.now(),
            transactions: this.curr_transactions,
            prevHash: prevhash
        };
        //put hash 
        this.hash = hash(block);
 
        //add to chain
        this.chain.push(block);
        this.curr_transactions =[];
        return block;
    }

    addNewTransaction(sender, recipient, amount){
        this.curr_transactions.push({sender, recipient, amount})
    }

    lastBlock(){
        return this.chain.slice(-1)[0];
    }

    isEmpty(){
        return this.chain.length == 0;
    }
}

modules.exports = BlockChain;