const { Client } = require('discord.js-selfbot-v13');
const client = new Client();

const virusCommand = {
    name: 'virus',
    description: '',
    run(client, message, args) {
        var arg = message.content.split(" ").slice(1).join(" ")
        if (!arg) {return message.edit(`${lang.needfilename}`)}
        message.edit(`${lang.virus1}`).then(msg => {
            let i = 0;
            var interval = setInterval(() => { if (i >= 10) {clearInterval(interval);
                msg.edit(`${lang.successinject} ${arg}.exe`)
            } else {let bar = "▓".repeat(i) + "░".repeat(10 - i)
                msg.edit(`${bar}   [${i+1}/10]`)
                i++}}, 500)})
    },
};

// Register Commands
client.commands = new Map();
client.commands.set(virusCommand.name, virusCommand);

module.exports = virusCommand;
