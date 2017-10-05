let fs = require('fs');
let str = fs.readFileSync(process.argv[2]);
str = str.toString();
let nlcount = 0;

let array = str.split("\n");

for (let i = 0; i < array.length-1; i++){
    ++nlcount;
}

console.log(nlcount);