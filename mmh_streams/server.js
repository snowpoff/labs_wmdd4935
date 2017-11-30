const Hapi = require('hapi');
const Path = require('path');
const fs = require('fs');
const rot13 = require('rot13-transform');

const server = new Hapi.Server();

server.connection({ port: Number(process.argv[2] || 8080), host: 'localhost' });

let filePath = Path.join(__dirname, 'file.txt');
let fileString = fs.createReadStream(filePath);

server.route({
    method: 'GET',
    path: '/',
    handler: handler
});

function handler(request, reply){
    reply(fileString.pipe(rot13()));
}

server.start(function (err){
    if (err) throw err;
    console.log(`Server running at: ${server.info.uri}`);
});