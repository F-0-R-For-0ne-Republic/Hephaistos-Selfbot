import { Client } from 'discord.js-selfbot-v13';
import type { Command } from '../../../types/command';


export const command: Command = {
    name: 'awooify',
    description: lang.awooifydesc,
    category: "Image",
    async run(client, message, args) {
        var user = message.mentions.users.first()
        if (!user) {
            return message.edit(`${lang.nomentionerror}`)
        }
        var response = await fetch(`https://nekobot.xyz/api/imagegen?type=awooify&url=${user.displayAvatarURL({ format: "png" })}`)
        var json = await response.json()
        message.delete()
        message.channel.send({ files: [{ attachment: json.message, name: "awooify.png" }] })
    },
};
