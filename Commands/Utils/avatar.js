const { Client } = require('discord.js-selfbot-v13');
const client = new Client();

const avatarCommand = {
    name: 'avatar',
    description: lang.avatardesc,
    run(client, message, args) {
        var user = message.mentions.users.first()
        if (!user) {return message.edit(`${lang.nomentionerror}`)}
        message.edit({content: user.displayAvatarURL()})
    },
};

// Register Commands
client.commands = new Map();
client.commands.set(avatarCommand.name, avatarCommand);

module.exports = avatarCommand;
