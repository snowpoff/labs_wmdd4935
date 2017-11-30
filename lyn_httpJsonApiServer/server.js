const http = require('http');
const url = require('url');

let server = http.createServer(function(request, response){
    response.writeHead(200, { 'Content-Type': 'application/json' });
    
    let parseData = url.parse(request.url, true);
    let date = new Date(parseData.query.iso);
    let data;
    
    if (parseData.pathname == '/api/parsetime'){
        data = {
            hour: date.getHours(),
            minute: date.getMinutes(),
            second: date.getSeconds()
        }
    }
    if (parseData.pathname == '/api/unixtime'){
        data = {unixtime: date.getTime()}
    }

    response.end(JSON.stringify(data));
});

server.listen(process.argv[2]);
