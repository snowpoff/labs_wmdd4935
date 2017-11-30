let myModule = require('./module.js');

let dir = process.argv[2];  //directory name (path)
let ext = process.argv[3];  //file ext (string) to filter

myModule(dir, ext, function(error, list){
    if (error) 
        return console.error(error);
    else
        for (let i = 0; i < list.length; i++)
            console.log(list[i]);
    })
