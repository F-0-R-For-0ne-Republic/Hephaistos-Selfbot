import type { Command } from "../../../types/command";
import { writeFileSync } from "fs";

export const command: Command = {
    name: 'prefix',
    description: "change the prefix",
    category: "Utils",
    run(client, message, args) {
        if (args[0].length >= 4) {
            return message.edit({ content: lang.prefix_too_long });
        }

        message.edit({ content: lang.prefix_changed.replace("{prefix}", args[0]) });

        global.config.prefix = args[0];

        writeFileSync(
            `${process.cwd()}/files/config.json`,
            JSON.stringify(config, null, 2)
        );
    },
};