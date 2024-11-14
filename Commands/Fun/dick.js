const { Client } = require('discord.js-selfbot-v13');
const client = new Client();
const fs = require('fs');
const language = config.defaultlang;
langFile = fs.readFileSync(`./Lang/${language}.json`);
lang = JSON.parse(langFile);


const dickCommand = {
    name: 'dick',
    description: `${lang.dickdesc}`,
    run(client, message, args) {
        var mentionuser = message.mentions.users.first()
        if (!mentionuser) return message.edit(`${lang.nomentionerror}`)

        var arg = message.content.split(" ")
        var size
        if (arg.length > 2) {
            size = parseInt(args[2], 10)
        } else {
            size = Math.floor(Math.random() * 12) + 1
        }
        var dick = "8" + "=".repeat(size) + "D";
        message.edit(`:eggplant: ${lang.penis1}: **${mentionuser.username}**\n ${lang.penis2}: ${dick}`)

    },
};

// Register Commands
client.commands = new Map();
client.commands.set(dickCommand.name, dickCommand);

module.exports = dickCommand;
