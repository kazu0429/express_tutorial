const express = require("express");
const chatRouter  = express.Router();
const path = require("path");

const initChat = (io) => {
    io.on("connection", (socket) => {
        console.log('a user connected');
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