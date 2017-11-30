const http = require('http');
const fs = require('fs');

let server = http.createServer(function(request, response){
    fs.createReadStream(process.argv[3]).pipe(response);
});

server.listen(process.argv[2]);
