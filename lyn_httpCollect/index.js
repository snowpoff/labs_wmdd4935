let bl = require('bl');
let http = require('http');
let url = process.argv[2];

http.get(url, (response) => {    
    response.pipe(bl((error, data) => {
        if (error) 
            return console.error(error);
        else
            console.log(data.length);
            console.log(data.toString());        
    }))
})

