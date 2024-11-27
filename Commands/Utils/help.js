const { Client } = require('discord.js-selfbot-v13');
const client = new Client();
const fs = require('fs');
const config = require('../../config.json');
const language = config.defaultlang;
const langFile = fs.readFileSync(`./Lang/${language}.json`);
const lang = JSON.parse(langFile);

const deletehelp = 10000;
const helpCommand = {
    name: 'help',
    description: `${lang.helpdesc}`,
    category: 'Utils',
    run: async (client, message, args) => {
        message.delete()
        const commands = client.commands;

        let helpMessage = `= 📜 ${lang.helpmess} =\n`;

        const categories = {};
        commands.forEach(command => {
            const category = command.category || 'Uncategorized';
            if (!categories[category]) categories[category] = [];
            categories[category].push(command);
        });

        for (const [category, commands] of Object.entries(categories)) {
            helpMessage += `\n== 📂 ${category} ==\n`;
            commands.forEach(command => {
                helpMessage += `* \`h!${command.name}\`: ${command.description || 'No description provided'}\n`;
            });
        }

        helpMessage = `\`\`\`asciidoc\n${helpMessage}\n\`\`\``;

        const splitMessageWithCodeBlocks = (message, maxLength) => {
            const messages = [];
            let currentIndex = 0;

            while (currentIndex < message.length) {
                let endIndex = Math.min(message.length, currentIndex + maxLength - 8); // -8 pour les balises de code

                // Assurez-vous de ne pas couper les balises de code
                if (endIndex < message.length && message.slice(endIndex, endIndex + 8) === '\`\`\`\n') {
                    endIndex -= 8;
                }

                // Ajoutez les balises de code
                messages.push(message.slice(currentIndex, endIndex) + '\`\`\`');
                currentIndex = endIndex;
            }

            return messages;
        };

        const MAX_MESSAGE_LENGTH = 2000; // Limite de caractères pour un message Discord

        // Diviser le message et envoyer chaque partie
        const messageParts = splitMessageWithCodeBlocks(helpMessage, MAX_MESSAGE_LENGTH);
        for (const part of messageParts) {
            const sentMessage = await message.channel.send(part);
            setTimeout(() => sentMessage.delete(), deletehelp);
        }
    },
};

client.commands = new Map();
client.commands.set(helpCommand.name, helpCommand);

module.exports = helpCommand;