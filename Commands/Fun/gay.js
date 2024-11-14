const { Client } = require('discord.js-selfbot-v13');
const client = new Client();

const testCommand = {
    name: 'gay',
    description: `${lang.gaydesc}`,
    run(client, message, args) {
        var mentionuser = message.mentions.users.first();
        if (!mentionuser) return message.edit(`${lang.nomentionerror}`);
        var reponse;
        var arg = message.content.split(" ")
        if (arg.length > 2) {
            reponse = arg[2] + "%"
        } else {
            reponse = Math.round(Math.random() * 100) + "%"
        }
        message.edit(`:rainbow_flag: ${mentionuser.username} ${lang.gay1} **${reponse}**`)
    },
};

// Register Commands
client.commands = new Map();
client.commands.set(testCommand.name, testCommand);

module.exports = testCommand;
