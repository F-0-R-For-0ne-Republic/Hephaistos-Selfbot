import gradient from "gradient-string";
import type { Command } from "../../../types/command";
import type { BotEvent } from "../../../types/events";
import { readdirSync } from "fs";

export async function commandsHandler(baseDir: string, type: "event" | "command") {
    let c = 0;

    let categories = readdirSync(baseDir);

    for (let dir of categories) {
        const commands = readdirSync(`${baseDir}/${dir}`)
            .filter((file) => file.endsWith(".ts"));

        for (let file of commands) {
            let fetch = await import(`${baseDir}/${dir}/${file}`);

            if (type === "command") {
                let command: Command | undefined = fetch?.command;

                if (command) {
                    c++
                    command.category = dir;
                    client.commands.set(command.name, command);
                } else {
                    console.error(`[${config.console.emojis.error}] > Error loading command ${file}`);
                    continue;
                }
                if (command.aliases && Array.isArray(command.aliases)) {
                    command.aliases.forEach((alias: string) => client.aliases.set(alias, command.name));
                }
            } else {
                let event: BotEvent | undefined = fetch?.event;

                if (event) {
                    c++

                    if (event.once) {
                        client.once(event.name, event.run.bind(null, client));
                    } else {
                        client.on(event.name, event.run.bind(null, client));
                    }
                } else {
                    console.error(`[${config.console.emojis.error}] > Error loading event ${file}`);
                    continue;
                }
            }

        }
    }

    console.log(gradient.fruit(`[${config.console.emojis.loaded}] > Loaded ${type}s:`), c);
}