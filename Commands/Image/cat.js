const { Client } = require('discord.js-selfbot-v13');
const client = new Client();

const testCommand = {
    name: 'cat',
    description: lang.catdesc,
    async run(client, message, args) {
        var cat = await fetch('https://api.sefinek.net/api/v2/random/animal/cat').then(response => response.json());
        message.edit({content: cat.message})
    },
};

// Register Commands
client.commands = new Map();
client.commands.set(testCommand.name, testCommand);

module.exports = testCommand;
