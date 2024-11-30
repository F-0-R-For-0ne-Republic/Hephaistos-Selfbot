import { Client } from 'discord.js-selfbot-v13';
import type { Command } from '../../types/command';


export const command :Command = {
    name: 'duck',
    description: lang.duckdesc,
    category: "Image",
    async run(client, message, args) {
        var response = await fetch(`https://random-d.uk/api/v2/random`)
        var json = await response.json()
        message.delete()
        message.channel.send({files: [{attachment: json.url, name: "duck.png"}]})
    },
};