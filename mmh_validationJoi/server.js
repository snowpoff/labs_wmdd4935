const Hapi = require('hapi');
const Joi = require('joi');
const http = require('http');

const server = new Hapi.Server();

server.connection({ port: Number(process.argv[2] || 8080), host: 'localhost' });

server.route({
    method: 'POST',
    path: '/login',
    handler: handler,
    config: {
        validate: {
            payload: Joi.object({
                username: Joi.string(),
                password: Joi.string().alphanum(),
                accessToken: Joi.string().alphanum(),
                birthyear: Joi.number().integer().min(1900).max(2013),
                email: Joi.string().email()
            })
            .options({allowUnknown: true})
            .with('username','password')
            .without('password','accessToken')
        }
    }
});

function handler(request, reply){
    reply("login successful");
}

server.start(function (err){
    if (err) throw err;
    console.log(`Server running at: ${server.info.uri}`);
});