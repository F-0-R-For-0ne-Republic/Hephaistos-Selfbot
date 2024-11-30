import { Client } from 'discord.js-selfbot-v13';
import type { Command } from '../../types/command';


export const command :Command = {
    name: 'gay',
    description: `${lang.gaydesc}`,
    category: 'Fun',
    run(client, message, args) {
        var mentionuser = message.mentions.users.first();
        if (!mentionuser) return message.edit(`${lang.nomentionerror}`);
        var reponse;
        var arg = message.content.split(" ")
        if (arg.length > 2) {
            reponse = arg[2] + "%"
        } else {
            reponse = Math.round(Math.random() * 100) + "%"
        }
        message.edit(`:rainbow_flag: ${mentionuser.username} ${lang.gay1} **${reponse}**`)
    },
};


