const
    // Main Dependency
    { Client } = require('discord.js-selfbot-v13'),
    client = new Client(),
    // Alternative Dependency
    fs = require('fs'),
    path = require('path'),
    gradient = require('gradient-string'),
    // Local Dependencies | By Unknown
    logs = require('./utils/logs/logging');
    starter = require('./utils/logs/startanimation');
    // Load .env file
    require('dotenv').config()
    // Load Config
    config = require('./config.json');
    const prefix = config.prefix
    // Language File
    const language = config.defaultlang;
    langFile = fs.readFileSync(`./Lang/${language}.json`);
    lang = JSON.parse(langFile);

    starter.displayIntro()

const loaded = {commands: 0, total: 0};

client.commands = new Map();
client.aliases = new Map();

fs.readdirSync('./commands').forEach(dir => {
    const commands = fs.readdirSync(`./commands/${dir}`).filter(file => file.endsWith('.js'));

    for (let file of commands) {
        let pull = require(path.join(__dirname, `./commands/${dir}/${file}`));
        if (pull.name) {
            pull.category = dir;
            client.commands.set(pull.name, pull);
        } else {
            console.error(`Error loading command ${file}`);
            continue;
        }
        if (pull.aliases && Array.isArray(pull.aliases)) pull.aliases.forEach(alias => client.aliases.set(alias, pull.name));
    }
});


client.on('ready', () => {
    console.log(gradient.instagram("-------------------------------------------------------------------------------------------"));
    console.log(gradient.passion('Logged in as ' + client.user.tag));
});

const commandMessageDeletionDelay = 20


client.on('messageCreate', async message => {
    if (message.author.id !== client.user.id) return;

    if (!message.content.startsWith(prefix)) return;

    const args = message.content.slice(prefix.length).trim().split(/ +/g);
    const commandName = args.shift().toLowerCase();

    const command = client.commands.get(commandName) || client.commands.get(client.aliases.get(commandName));

    if (command) {
        try {
            await command.run(client, message, args);
            setTimeout(() => {
                message.delete().catch(console.error);
            }, commandMessageDeletionDelay * 1000);
        } catch (error) {

            console.error(error);
            message.reply('There was an error executing that command.').then(msg => {
                setTimeout(() => msg.delete().catch(console.error), commandMessageDeletionDelay * 1000);
            });
        }
    }
});


client.login(process.env.TOKEN);