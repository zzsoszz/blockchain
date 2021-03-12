const BlockChain=require("./blockchain");

const bitcoin = new BlockChain();

bitcoin.createNewBlock(58888,'AAAAAAA','BBBBBB');

bitcoin.createNewTransaction(12,"zhangsan","lishi");


bitcoin.createNewBlock(58888,'AAAAAAA','BBBBBB');


const previousBlockHash="01NA111111111111111111111";
const currentBlockData=[
    {
        amount:101,
        sender:"N9000000000000001",
        recipient:"N9000000000000001"
    },
    {
        amount:30,
        sender:"N9000000000000001",
        recipient:"N9000000000000001"
    },
    {
        amount:200,
        sender:"N9000000000000001",
        recipient:"N9000000000000001"
    },
];

console.log(bitcoin.proofOfWork(previousBlockHash,currentBlockData))

// console.log(bitcoin.chain)
