const { Client } = require('discord.js-selfbot-v13');
const client = new Client();

const testCommand = {
    name: 'deathdate',
    description: lang.deathdatedesc,
    run(client, message, args) {
        var mentionuser = message.mentions.users.first()
        if (!mentionuser) return message.edit(`${lang.nomentionerror}`)
        var
            responseannee = 2024 + Math.floor(Math.random() * 78),
            reponse = Math.floor(Math.random() * 31) + 1,
            reponse2 = Math.floor(Math.random() * 12),
            reponses2 = [`${lang.jan}`, `${lang.feb}`, `${lang.mar}`, `${lang.apr}`, `${lang.may}`, `${lang.jun}`, `${lang.jul}`, `${lang.aug}`, `${lang.sep}`, `${lang.oct}`, `${lang.nov}`, `${lang.dec}`];
        message.edit(`:skull_crossbones: ${lang.death1} : **${mentionuser.username}**\n ${lang.death2} : **${reponse} ${reponses2[reponse2]} ${responseannee}**`);

    },
};

// Register Commands
client.commands = new Map();
client.commands.set(testCommand.name, testCommand);

module.exports = testCommand;
