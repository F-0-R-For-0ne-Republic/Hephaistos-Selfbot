import { Client } from "discord.js-selfbot-v13"
import type { Command } from "../../types/command";


export const command :Command = {
    name: 'avatar',
    description: lang.avatardesc,
    category: "Utils",
    run(client, message, args) {
        var user = message.mentions.users.first()
        if (!user) { return message.edit(`${lang.nomentionerror}`) }
        message.edit({ content: user.displayAvatarURL() })
    },
};

