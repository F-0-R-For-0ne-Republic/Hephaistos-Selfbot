const { Client } = require('discord.js-selfbot-v13');
const client = new Client();

const clydeCommand = {
    name: 'clyde',
    description: lang.clydedesc,
    async run(client, message, args) {
        var arg = message.content.split(" ").slice(1).join(" ")
        if (!arg) {
            return message.edit(`${lang.nomessageerror}`)
        }
        var response = await fetch(`https://nekobot.xyz/api/imagegen?type=clyde&text=${arg}`)
        var json = await response.json()
        message.delete()
        message.channel.send({files: [{attachment: json.message, name: "clyde.png"}]})
    },
};

// Register Commands
client.commands = new Map();
client.commands.set(clydeCommand.name, clydeCommand);

module.exports = clydeCommand;
