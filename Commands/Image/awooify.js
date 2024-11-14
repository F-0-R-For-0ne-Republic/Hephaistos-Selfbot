const { Client } = require('discord.js-selfbot-v13');
const client = new Client();

const awooifyCommand = {
    name: 'awooify',
    description: lang.awooifydesc,
    async run(client, message, args) {
        var args = message.mentions.users.first()
        if (!args) {
            return message.edit(`${lang.nomentionerror}`)
        }
        var response = await fetch(`https://nekobot.xyz/api/imagegen?type=awooify&url=${args.displayAvatarURL({format: "png"})}`)
        var json = await response.json()
        message.delete()
        message.channel.send({files: [{attachment: json.message, name: "awooify.png"}]})
    },
};

// Register Commands
client.commands = new Map();
client.commands.set(awooifyCommand.name, awooifyCommand);

module.exports = awooifyCommand;
