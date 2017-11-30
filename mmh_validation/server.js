const Hapi = require('hapi');
const Joi = require('joi');

const server = new Hapi.Server();

server.connection({ port: Number(process.argv[2] || 8080), host: 'localhost' });

server.route({
    method: 'GET',
    path: '/chickens/{breed}',
    handler: handler,
    config: {
        validate: {
            params: {
                parameters: Joi.string().required()
            }
        }
    }
});

function handler(request, reply){
    reply("chicken breed: " + request.params.parameters);
}

server.start(function (err){
    if (err) throw err;
    console.log(`Server running at: ${server.info.uri}`);
});