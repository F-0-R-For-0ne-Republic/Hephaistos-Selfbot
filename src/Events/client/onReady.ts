import type { BotEvent } from "../../../types/events";

import { Client, Message } from "discord.js-selfbot-v13";
import gradient from "gradient-string";

export const event: BotEvent = {
    name: "ready",
    once: false,
    async run(client: Client, message: Message) {
        console.log(gradient.passion(`[${config.console.emojis.host}] > Logged in as ${client.user?.tag}`));
    }
}