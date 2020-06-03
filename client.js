const Discord = require('discord.js');
const client = new Discord.Client();
const requests = require('./Requests');

client.on('ready', () => {
  console.log(`Logged in as ${client.user.tag}!`);
});

client.on('message', msg => {
  if (msg.content === 'chat') {
    msg.reply('https://gph.is/2I5xics');
  }
  let values = [msg.author.username, msg.content, new Date()];
  requests.insert([values]);
});

client.login(process.env.discord_token);
