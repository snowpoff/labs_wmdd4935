let fs = require('fs');
let path = require('path');

let dir = process.argv[2];  //directory name (path)
let ext = "." + process.argv[3];  //file ext (string) to filter

fs.readdir(dir, function(error, list){
    if (error) 
        return console.error(error);
    else
        for (let i = 0; i < list.length; i++){
            if (path.extname(list[i])==ext) 
                console.log(list[i]);
        }
});