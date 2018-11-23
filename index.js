const Block = require('./Block');
const BlockChain = require('./BlockChain');
const DIFFICULY = 4;

const JsCoinChain = new BlockChain(DIFFICULY);

JsCoinChain.addBlock(new Block({index: 1, timestamp: "01/10/2018", data: { amount: 4} }));
JsCoinChain.addBlock(new Block({index: 2, timestamp: "02/16/2018", data: { amount: 10} }));

console.dir(JsCoinChain);
