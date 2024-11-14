const { Client } = require('discord.js-selfbot-v13');
const client = new Client();

const testCommand = {
    name: 'baguette',
    description: lang.baguettedesc,
    async run(client, message, args) {
        var usered = message.mentions.users.first() || message.author
        var username = usered.username
        var response = await fetch(`https://nekobot.xyz/api/imagegen?type=baguette&url=${usered.displayAvatarURL({format: "png"})}`)
        var json = await response.json()
        message.delete()
        message.channel.send({files: [{attachment: json.message, name: "baguette.png"}]})
    },
};

// Register Commands
client.commands = new Map();
client.commands.set(testCommand.name, testCommand);

module.exports = testCommand;
