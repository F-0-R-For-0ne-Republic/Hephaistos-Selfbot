import { Client } from 'discord.js-selfbot-v13';
import type { Command } from '../../../types/command';


export const command :Command = {
    name: 'phcomment',
    description: lang.phdesc,
    category: "Image",
    async run(client, message, args) {
        var args2 = message.content.split(" ").slice(2).join(" ")
        var usered = message.mentions.users.first() || message.author
        var username = usered.username
        if (!args2) {
            return message.edit(`${lang.nomessageerror}`)
        }
        var response = await fetch(`https://nekobot.xyz/api/imagegen?type=phcomment&image=${usered.displayAvatarURL({format: "png"})}&username=${username}&text=${args2}`)
        var json = await response.json()
        message.delete()
        message.channel.send({files: [{attachment: json.message, name: "phcomment.png"}]})
    },
};

// tu peux me confirmer si le clearmsg.ts c'est bien comme ça que il faut faire ?
