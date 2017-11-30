var Hapi = require('hapi');
var server = new Hapi.Server();

var H2o2 = require('h2o2');

server.connection({ port: Number(process.argv[2] || 8080), host: 'localhost' });

server.register(H2o2, function(err){
    if (err) throw err;
});

server.route({
    path: '/proxy',
    method: 'GET',
    handler: {
        proxy: {
            host: '127.0.0.1',
            port: 65535
        }
    }
});

server.start(function(err){
    if (err) throw err;
    else console.log('Server running at:', server.info.uri); 
});