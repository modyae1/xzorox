const Discord = require('discord.js');
const client = new Discord.Client();
console.log("Scrpit By Dream");


client.on("ready", () => {
let channel =     client.channels.get("526773548510085122")
setInterval(function() {
channel.send(`الشاعرء ميمو الشاعرء ميمو الشاعرء ميمو الشاعرء ميمو``);
}, 30)
})

client.login(process.env.BOT_TOKEN);