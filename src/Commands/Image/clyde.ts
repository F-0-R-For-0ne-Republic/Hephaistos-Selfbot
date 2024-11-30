import { Client, Message } from 'discord.js-selfbot-v13';
import type { Command } from '../../../types/command';

export const command: Command = {
    name: 'clyde',
    description: lang.clydedesc,
    category: "Image",
    async run(client: Client, message: Message, args: string[]) {
        var arg = message.content.split(" ").slice(1).join(" ")
        if (!arg) {
            return message.edit(`${lang.nomessageerror}`)
        }
        var response = await fetch(`https://nekobot.xyz/api/imagegen?type=clyde&text=${arg}`)
        var json = await response.json()
        message.delete()
        message.channel.send({ files: [{ attachment: json.message, name: "clyde.png" }] })
    },
};