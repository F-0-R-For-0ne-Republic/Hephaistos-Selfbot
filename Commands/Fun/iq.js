const { Client } = require('discord.js-selfbot-v13');
const client = new Client();

const iqCommand = {
    name: 'iq',
    description: `${lang.iqdesc}`,
    run(client, message, args) {
        var mentionuser = message.mentions.users.first()
        if (!mentionuser) return message.edit(`${lang.nomentionerror}`)
        var arg = message.content.split(" ")
        var iq
        if (arg.length > 2) {
            iq = parseInt(args[2], 10)
        } else {
            iq = Math.floor(Math.random() * 200)
        }
        message.edit(`:brain: ${lang.iq1}: **${mentionuser.username}**\n IQ: **${iq}**`)
    },
};

// Register Commands
client.commands = new Map();
client.commands.set(iqCommand.name, iqCommand);

module.exports = iqCommand;
