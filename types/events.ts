//
import { Client } from "discord.js-selfbot-v13"

export interface BotEvent {
    name: string;
    once: boolean;

    run(client: Client, opt1: any, opt2: any, opt3: any): void
}