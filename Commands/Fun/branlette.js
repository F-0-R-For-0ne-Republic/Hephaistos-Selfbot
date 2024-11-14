const { Client } = require('discord.js-selfbot-v13');
const client = new Client();

function sleep(number) {
    return new Promise((resolve) => {
        setTimeout(resolve, number);
    });
}

const testCommand = {
    name: 'branlette',
    description: lang.branlettedesc,
    run(client, message, args) {
        var emotes = [
            "8=:fist:==D ",
            "8==:fist:=D ",
            "8===:fist:D ",
            "8==:fist:=D ",
            "8=:fist:==D ",
            "8:fist:===D ",
            "8=:fist:==D ",
            "8==:fist:=D ",
            "8===:fist:D ",
            "8===:fist:D:sweat_drops: ",
        ];
        emotes.forEach((emote) => {
            message.edit(emote);
            sleep(1000);
        });
    },
};

// Register Commands
client.commands = new Map();
client.commands.set(testCommand.name, testCommand);

module.exports = testCommand;
