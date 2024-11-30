import { Client } from 'discord.js-selfbot-v13';
import type { Command } from '../../../types/command';

function sleep(number:number) {
    return new Promise((resolve) => {
        setTimeout(resolve, number);
    });
}

export const command :Command = {
    name: 'branlette',
    description: lang.branlettedesc,
    category: "Fun",
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