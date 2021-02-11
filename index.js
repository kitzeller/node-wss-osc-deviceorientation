var osc = require("osc"),
    https = require("https"),
    WebSocket = require("ws"),
    fs = require('fs'),
    express = require("express"),
    forceSSL = require('express-force-ssl'),
    http = require('http');

const { Client } = require('node-osc');
const client = new Client('127.0.0.1', 3333);

var app = express();

// http server
// var server = app.listen(3333);

// https server
// you need to add certs
var server = https.createServer({
        key: fs.readFileSync('key.pem'),
        cert: fs.readFileSync('cert.pem')
    }, app).listen(3333, function () {
        console.log('Example app listening on port 3333! Go to https://localhost:3333/')
    });

app.use("/", express.static(__dirname + "/public"));
app.use(forceSSL);

const io = require('socket.io')(server);
io.on('connection', (socket) => {
    console.log('a user connected');

    socket.on('test', (msg) => {
        console.log('test: ' + msg);
    });

    socket.on('device', (msg) => {
        // Do something with the data!
        console.log('device: ' + msg);

        // Example: send as OSC somewhere else
        client.send('/device', msg, (err) => {
            if (err) console.error(err);
          });
    });

    socket.on('disconnect', () => {
      console.log('user disconnected');
    });

  });