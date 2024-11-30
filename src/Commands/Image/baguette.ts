import { Client } from 'discord.js-selfbot-v13';
import type { Command } from '../../../types/command';


export const command :Command = {
    name: 'baguette',
    description: lang.baguettedesc,
    category: "Image",
    async run(client, message, args) {
        var usered = message.mentions.users.first() || message.author
        var username = usered.username
        var response = await fetch(`https://nekobot.xyz/api/imagegen?type=baguette&url=${usered.displayAvatarURL({ format: "png" })}`)
        var json = await response.json()
        message.delete()
        message.channel.send({ files: [{ attachment: json.message, name: "baguette.png" }] })
    },
};