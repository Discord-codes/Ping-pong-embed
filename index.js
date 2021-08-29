const express = require("express")
const app = express()

app.get("/", (req, res) => {
 res.send("Hello hell")
})

app.listen(3000, () => {
 console.log("Bot is started ")
})

const Discord = require("discord.js")
let client = new Discord.Client()

client.on('ready', () => {
 client.user.setActivity('!help | TEST BOT', { type: 'PLAYING' })
 })
client.on("message", message => {
  if(message.content === "!help") {
let embed = new Discord.MessageEmbed()
 .setTitle("Commands")
 .addField("UTILITY", "`!ping` `!say` `!help` `!invite` `!serverinfo`")
 .setFooter(`Requested by ${message.author.tag}`)
 .setTimestamp()
 message.channel.send(embed)
}
client.on("message", message => {
  if (message.content === "!ping") {
let embed = new Discord.MessageEmbed()
 .setTitle("Pong!")
 .setDescription(`Latency **${client.ws.ping}** ms`)
 .setColor("RANDOM")
 .setFooter(`Requested by ${message.author.tag}`)
message.channel.send(embed)
}
})

client.login("YOUR BOT TOKEN HERE")
