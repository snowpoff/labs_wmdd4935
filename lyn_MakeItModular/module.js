let fs = require('fs');
let path = require('path');

module.exports = function (dir, ext){
    
  fs.readdir(dir, function(error, list){
    if (error) 
        return console.error(error);
    else
        for (let i = 0; i < list.length; i++){
            if (path.extname(list[i])==ext) 
                console.log(list[i]);
        }
  });  
    
}

