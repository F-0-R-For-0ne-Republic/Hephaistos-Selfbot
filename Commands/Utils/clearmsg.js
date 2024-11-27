const { Client } = require('discord.js-selfbot-v13');
const client = new Client();

const clearCommand = {
    name: 'clear',
    description: lang.cleardesc,
    run(client, message, args) {
         message.channel.messages.fetch({ limit: 100 }).then(messages => {
          messages.forEach(message => {
                if (message.author.id === client.user.id) {
                 message.delete()
                }
          })
        })
    },
};

// Register Commands
client.commands = new Map();
client.commands.set(clearCommand.name, clearCommand);

module.exports = clearCommand;
