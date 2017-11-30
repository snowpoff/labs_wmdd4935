const Hapi = require('hapi');

const server = new Hapi.Server();
server.connection({ port: Number(process.argv[2] || 8080), host: 'localhost' });


server.route({
    method: 'GET',
    path: '/{name}',
    handler: function (request, reply) {
        reply('Hello ' + request.params.name);
    }
});

server.start(function (err){
    if (err) throw err;
    console.log(`Server running at: ${server.info.uri}`);
});