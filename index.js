const Discord = require('discord.js');
const client = new Discord.Client();

client.on('ready', () => {
    console.log('Ready to work, boss!')
});

client.login('NeverWillYouFindThisOut');
