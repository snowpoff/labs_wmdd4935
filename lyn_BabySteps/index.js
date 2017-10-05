let argSum = 0;
for (let i = 2; i < process.argv.length; i++){
    argSum += parseInt(process.argv[i]); 
}
console.log(argSum);