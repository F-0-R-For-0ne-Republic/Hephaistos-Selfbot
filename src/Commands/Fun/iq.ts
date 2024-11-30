import { Client } from 'discord.js-selfbot-v13';
import type { Command } from '../../../types/command';


export const command :Command = {
    name: 'iq',
    description: lang.iqdesc,
    category: "Fun",
    run(client, message, args) {
        var mentionuser = message.mentions.users.first()
        if (!mentionuser) return message.edit(`${lang.nomentionerror}`)
        var arg = message.content.split(" ")
        var iq
        if (arg.length > 2) {
            iq = parseInt(args[2], 10)
        } else {
            iq = Math.floor(Math.random() * 200)
        }
        message.edit(`:brain: ${lang.iq1}: **${mentionuser.username}**\n IQ: **${iq}**`)
    },
};
