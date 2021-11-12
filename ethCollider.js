var Wallet = require('ethereumjs-wallet');
var EthUtil = require('ethereumjs-util');
const { BigNumber } = require('ethers/lib');

let richList1 = require('./json/usable.richList1.json');
let richList2 = require('./json/usable.richList2.json');
let richList3 = require('./json/usable.richList3.json');

const richLength = richList1.keySet[0].address.length;

const initKey = BigNumber.from('0xb10fc111b41218359b7459fe65ad65d5c964aac79f323fec092977fade3d9576');

// let keyLower = key.toLowerCase();
let privateKeyHex = initKey;
let privateKeyString = privateKeyHex._hex.toString();

let logger = 0;
console.time("<><><><><><><><><><> TIMER ENDED <><><><><><><><><><>");
while (privateKeyString != 0) {
privateKeyHex = privateKeyHex.add(1);

privateKeyString = privateKeyHex._hex.toString();
const privateKeyBuffer = EthUtil.toBuffer(privateKeyString);
const wallet = Wallet['default'].fromPrivateKey(privateKeyBuffer);
const address = wallet.getAddressString();

for (j = 0; j < richLength; j++) {
    let testTo = address.toLowerCase();
    let test1 = (richList1.keySet[0].address[j]).toLowerCase();
    let test2 = (richList2.keySet[0].address[j]).toLowerCase();
    let test3 = (richList3.keySet[0].address[j]).toLowerCase();
    if (testTo == test1 || testTo == test2 || testTo == test3) {
        console.log("~~~~~~~~~~~~~~~~~~~~~~>>>>>>>>> Time To Get Rich <<<<<<<<~~~~~~~~~~~~~~~~~~~~~~~~~~");
        console.log("address", address);
        console.log("privateKeyString", privateKeyString);
        return;
    }
}
++logger;
    if (logger == 1000) {
        console.timeEnd("<><><><><><><><><><> TIMER ENDED <><><><><><><><><><>");
        console.log("address", address);
        console.log("privateKeyString", privateKeyString);
        logger = 0;
        return;
    }
}

