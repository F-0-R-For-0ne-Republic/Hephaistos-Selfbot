const { Client } = require('discord.js-selfbot-v13');
const client = new Client();

const testCommand = {
    name: 'dice',
    description: lang.dicedesc,
    run(client, message, args) {
        var reponses = ["1", "2", "3", "4", "5", "6"];
        var reponse = reponses[Math.floor(Math.random() * reponses.length)];
        message.edit(`:game_die: ${lang.dice1} : **${reponse}**`)

    },
};

// Register Commands
client.commands = new Map();
client.commands.set(testCommand.name, testCommand);

module.exports = testCommand;
