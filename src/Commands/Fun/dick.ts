import { Client } from 'discord.js-selfbot-v13'
import type { Command } from '../../../types/command';


export const command :Command = {
    name: 'dick',
    description: lang.dickdesc,
    category: "Fun",
    run(client, message, args) {
        var mentionuser = message.mentions.users.first()
        if (!mentionuser) return message.edit(`${lang.nomentionerror}`)

        var arg = message.content.split(" ")
        var size
        if (arg.length > 2) {
            size = parseInt(args[2], 10)
        } else {
            size = Math.floor(Math.random() * 12) + 1
        }
        var dick = "8" + "=".repeat(size) + "D";
        message.edit(`:eggplant: ${lang.penis1}: **${mentionuser.username}**\n ${lang.penis2}: ${dick}`)

    },
};