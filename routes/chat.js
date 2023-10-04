const express = require("express");
const chatRouter  = express.Router();
const path = require("path");

const initChat = (io) => {
    io.on("connection", (socket) => {
        console.log('a user connected');

        socket.on("chat message", (msg) => {
            // console.log("message : "+msg);
            io.emit("chat message", msg);
        })
        
        socket.on('disconnect', () => {
            console.log('user disconnected');
        });
    });

    chatRouter.get("/", (req, res) => {
        res.sendFile(path.join(__dirname, "../", "public", "chat.html"));
    });
    
    return chatRouter;
}


module.exports = initChat;