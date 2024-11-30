//

import type { BotEvent } from "../../types/events";
import { Client, Message } from "discord.js-selfbot-v13";

const commandMessageDeletionDelay = 20;

export const event: BotEvent = {
    name: "messageCreate",
    once: false,
    async run(client: Client, message: Message) {
        if (!client.user) return;

        if (message.author.id !== client.user.id) return;

        if (!message.content.startsWith(prefix)) return;

        const args = message.content.slice(prefix.length).trim().split(" ") || [];
        const commandName = args.shift()!.toLowerCase();

        const command =
            client.commands.get(commandName) ||
            client.commands.get(client.aliases.get(commandName) || "");

        if (command) {
            try {
                await command.run(client, message, args);
                setTimeout(() => {
                    message.delete().catch(console.error);
                }, commandMessageDeletionDelay * 1000);
            } catch (error) {
                console.error(error);
                message
                    .reply("There was an error executing that command.")
                    .then((msg) => {
                        setTimeout(
                            () => msg.delete().catch(console.error),
                            commandMessageDeletionDelay * 1000
                        );
                    });
            }
        }
    }
}