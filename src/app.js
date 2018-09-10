const express = require('express')
const app = express();
const bodyParser = require('body-parser');
var http = require('http');

//As this is a status page api for the bot, lets require d.js
const discord = require("discord.js");

const bot = new discord.Client();
bot.login("TOKEN");
app.get('/', function(req, res){
    res.send('localhost/api/status')
});
app.get('/api/status', function(req, res){
    res.JSON({"users": bot.users.size, "guilds": bot.guilds.size, "ping": bot.ping, "uptime": bot.uptime})
});
http.createServer(app).listen(80), function() {
    console.log('READY');
};
