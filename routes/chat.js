const express = require("express");
const chatRouter  = express.Router();

const http = require("http");
const path = require("path");
// const io = require("socket.io")(server);


chatRouter.get("/", (req, res) => {
    // res.send("chat display");
    res.sendFile(path.join(__dirname, "../","public","chat.html"));
});

module.exports = chatRouter;

