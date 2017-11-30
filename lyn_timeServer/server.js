const net = require('net');

let date = new Date();
let month = 1+date.getMonth();

let dateString = date.getFullYear() + "-" + month + "-" + date.getDate() + " " + date.getHours() + ":" + date.getMinutes() + "\n";

let server = net.createServer(function(socket){
    socket.end(dateString);
});

//server.connection({ port: Number(process.argv[2] || 8080), host: 'localhost' });

server.listen(process.argv[2]);

//
//server.start(function (err){
//    if (err) throw err;
//    console.log(`Server running at: ${server.info.uri}`);
//});