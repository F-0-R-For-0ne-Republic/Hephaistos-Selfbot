import { Client } from 'discord.js-selfbot-v13';
import type { Command } from '../../../types/command';
// pk il ses pas mis en type auto ?
//idk je crois c'est moi
// k 

export const command: Command = {
    name: 'virus',
    description: '',
    category: "Fun",
    run(client, message, args) {
        var arg = message.content.split(" ").slice(1).join(" ")
        if (!arg) { return message.edit(`${global.lang.needfilename}`) }
        message.edit(`${lang.virus1}`).then(msg => {
            let i = 0;
            var interval = setInterval(() => {
                if (i >= 10) {
                    clearInterval(interval);
                    msg.edit(`${lang.successinject} ${arg}.exe`)
                } else {
                    let bar = "▓".repeat(i) + "░".repeat(10 - i)
                    msg.edit(`${bar}   [${i + 1}/10]`)
                    i++
                }
            }, 500)
        })
    },
};