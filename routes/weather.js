const express = require("express");
const weathreRouter = express.Router();
const path = require("path");
const request = require("request-promise");
require('dotenv').config();

const initWeather = (io) => {
    io.on("connection", (socket) => {

        socket.on("weather api", (location) => {
            // console.log("message : "+msg);

            weatherAPI(location).then((resText) => {
                console.log(JSON.stringify(resText));
                io.emit("weather api",JSON.stringify(resText));
            })
        })
        
        socket.on('disconnect', () => {
            console.log('user disconnected');
        });
    });

    weathreRouter.get("/", (req, res) => {
        res.sendFile(path.join(__dirname, "../", "public", "weather.html"));
    })
    
    return weathreRouter;
}

function weatherAPI(location){
    const options = {
        url:`https://api.openweathermap.org/data/2.5/weather?q=${location}&units=metric&appid=${process.env.API_KEY}`,
        method:"GET",
        json:true
    }
    return new Promise((resolve, reject)=>{
        request(options).then((res)=>{
            resolve({
                main:res.weather[0].main,
                temp:res.main.temp
            });
        }).catch((err)=>{
            reject(err);
        })
    })
}

module.exports = initWeather