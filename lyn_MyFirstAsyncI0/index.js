let fs = require('fs');
let content = process.argv[2];
let str = fs.readFile(content, "utf8", function(error, content){
  if (error) 
      return console.error(error);
  else
      console.log((content.split("\n").length-1).toString());
});
