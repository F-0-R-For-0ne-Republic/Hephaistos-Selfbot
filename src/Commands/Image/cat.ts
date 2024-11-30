import { Client } from 'discord.js-selfbot-v13';
import type { Command } from '../../../types/command';


export const command :Command = {
    name: 'cat',
    description: lang.catdesc,
    category: "Image",
    async run(client, message, args) {
        var cat = await fetch('https://api.sefinek.net/api/v2/random/animal/cat').then(response => response.json());
        message.edit({ content: cat.message })
    },
};