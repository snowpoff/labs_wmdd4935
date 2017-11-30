let fs = require('fs');
let path = require('path');
let results = [];

module.exports = function (dir, ext, callback){
    
  fs.readdir(dir, function(error, list){
    if (error) 
        return callback(error);
    else
        for (let i = 0; i < list.length; i++){
            if (path.extname(list[i]) == "." + ext) 
                results.push(list[i]);
        }
    callback(null, results);
  });  
    
}

