let bl = require('bl');
let http = require('http');
let url = [process.argv[2], process.argv[3], process.argv[4]];

let output = [];
let counter = 0;

for (let i = 0; i < url.length; i++){ 
    http.get(url[i], function(response) {    
            response.pipe(bl(function(error, data){
                if (error) 
                    return console.error(error);
                else {
                    output[i] = data.toString();
                    counter++;
                    if (counter == 3){
                        for(let j = 0; j < counter; j++){
                            console.log(output[j]);
                        }
                    }
                }
            }))
        })
}