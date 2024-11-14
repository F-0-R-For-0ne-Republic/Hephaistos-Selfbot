const { Client } = require('discord.js-selfbot-v13');
const client = new Client();

const testCommand = {
    name: 'phcomment',
    description: lang.phdesc,
    async run(client, message, args) {
        var args = message.content.split(" ").slice(2).join(" ")
        var usered = message.mentions.users.first() || message.author
        var username = usered.username
        if (!args) {
            return message.edit(`${lang.nomessageerror}`)
        }
        var response = await fetch(`https://nekobot.xyz/api/imagegen?type=phcomment&image=${usered.displayAvatarURL({format: "png"})}&username=${username}&text=${args}`)
        var json = await response.json()
        message.delete()
        message.channel.send({files: [{attachment: json.message, name: "phcomment.png"}]})
    },
};

// Register Commands
client.commands = new Map();
client.commands.set(testCommand.name, testCommand);

module.exports = testCommand;