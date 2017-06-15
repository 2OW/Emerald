const Discord = require('discord.js');
const client = new Discord.Client();

function commandIs(str, msg){
    return msg.content.toLowerCase().startsWith("!" + str);
}

client.on('ready', () => {
    console.log('Ready to work, boss!')
});

client.on('message', message => {
    var args = message.content.split(/[ ]+/);
    if(commandIs("hello", message))
        message.channel.send('I forget what it is, ' + message.author.username);
    }) 
    if(commandIs("age", )){
        if(args.length === 1){
            message.reply('Now how am I supposed to follow your wish if I do not have any args?! Usage: `!age [Age Value]`');
        } else if(args.length === 2){
            message.channel.send('Hello, my current age is ' + args[1]);
        } else {
            message.reply('Okay, look buddy, you got the right idea here, however, YOU PUT TOO MANY OF THEM! REALLY?! You put a number next to the command, is it that complicated?')
        }
    }
    if(commandIs("say", message)){
        if(args.length === 1){
            message.reply('It seems I never got what to say! Usage: `!say [message]`')
        } else { 
            message.channel.send(args.join(" ").substring(5));
        }
    } 
});

client.login('No');
