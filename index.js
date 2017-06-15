const Discord = require('discord.js');
const client = new Discord.Client();

client.on('ready', () => {
    console.log('Ready to work, boss!')
});

client.on('message', message => {
    if(message.content === '!ping'){
        message.channel.send('I forget what it is, ' + message.author.username);
    }
});

client.login('NeverWillYouFindThisOut');
