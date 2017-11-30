var Hapi = require('hapi');
var server = new Hapi.Server();

server.connection({
    host: 'localhost',
    port: Number(process.argv[2] || 8080)
});

server.route({
    path: '/{name}',
    method: 'GET',
    handler: handler
});

function handler(request, reply){
    reply('Hello ' + encodeURIComponent(request.params.name));
}

server.start(function(err){
    if (err) throw err;
    else console.log('Server running at:', server.info.uri); 
});