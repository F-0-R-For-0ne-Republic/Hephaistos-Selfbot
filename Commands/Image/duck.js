const { Client } = require('discord.js-selfbot-v13');
const client = new Client();

const duckCommand = {
    name: 'duck',
    description: lang.duckdesc,
    async run(client, message, args) {
        var response = await fetch(`https://random-d.uk/api/v2/random`)
        var json = await response.json()
        message.delete()
        message.channel.send({files: [{attachment: json.url, name: "duck.png"}]})
    },
};

// Register Commands
client.commands = new Map();
client.commands.set(duckCommand.name, duckCommand);

module.exports = duckCommand;
