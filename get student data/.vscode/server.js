var express = require("express");
const { connect } = require("http2");
const { connection } = require("next/server");
const {listen} = require("socket.io")
var app = express();
var server = require("http").createServer(app)
var io = require("socket.io")(server)
users =  []
connections = []
server.listen(3000)
app.get("/", function(req, resp){
    resp.sendFile(__dirname * "/index.html");
})
io.sockets.on("connection",function(socket){
    // client connects to the server
    connections.push(socket);
    console.log("Connected : %s socket connected", connections.length);
    socket.on("disconnected", function(data){
        connections.splice(connections.indexof(socket), 1);
        console.log("Disconnected : %s socket disconnectd ", connections.length);
    });
    socket.on("send message", function(data){
        console.log(data);
        io.sockets.emit("new message", {msg:data})
    });
});

console.log("Server is listening")