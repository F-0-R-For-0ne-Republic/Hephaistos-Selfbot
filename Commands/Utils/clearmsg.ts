import { Client, Message } from "discord.js-selfbot-v13";
import type { Command } from "../../types/command";


export const command :Command = {
    name: 'clear',
    description: lang.cleardesc,
    category: "Utils",
    run(client: Client, message: Message, args: string[]) {
        message.channel.messages.fetch({ limit: 100 }).then(messages => {
            messages.forEach(message => {
                if (message.author.id === client.user!.id) {
                    message.delete()
                }
            })
        })
    },
};
