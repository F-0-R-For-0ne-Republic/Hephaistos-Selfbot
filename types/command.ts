import { Client, Message } from "discord.js-selfbot-v13";

export interface Command {
    name: string;
    description: string;
    category: string;
    aliases?: string[];
    run(client: Client, message: Message, args: string[]): void
}