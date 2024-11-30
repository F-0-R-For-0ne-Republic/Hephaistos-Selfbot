import { Client } from 'discord.js-selfbot-v13';
import type { Command } from '../../../types/command';


export const command :Command = {
    name: 'dice',
    description: lang.dicedesc,
    category: "Fun",
    run(client, message, args) {
        var reponses = ["1", "2", "3", "4", "5", "6"];
        var reponse = reponses[Math.floor(Math.random() * reponses.length)];
        message.edit(`:game_die: ${lang.dice1} : **${reponse}**`)

    },
};