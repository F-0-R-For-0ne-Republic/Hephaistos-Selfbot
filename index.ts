// Main Dependency

import type { Command } from "./types/command";
import type { BotEvent } from "./types/events";

import path from "node:path";
import fs from "fs";

import config from "./config.json" with { type: "json" };

// nodejs <= 21: assert { type: `json` };
// nodejs >= 22 with { type: "json" };

global.prefix = config.prefix;

import { Client } from "discord.js-selfbot-v13"
import yaml from "js-yaml";
import * as dotenv from "dotenv"; //faut pa mettre de virgule après import mdrr
dotenv.config();


global.client = new Client();

import gradient from "gradient-string";
import logs from "./utils/logs/logging.js";
import starter from "./utils/logs/startanimation.js";

global.lang = (yaml.load(fs.readFileSync(`./Lang/${config.defaultLang}.yaml`, "utf-8")) as any);
starter.displayIntro();

client.commands = new Map();
client.aliases = new Map();

async function commandsHandler(baseDir: string, type: "event" | "command") {
  let c = 0;

  let categories = fs.readdirSync(baseDir);

  for (let dir of categories) {
    const commands = fs
      .readdirSync(`${baseDir}/${dir}`)
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
          console.error(`Error loading command ${file}`);
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
          console.error(`Error loading event ${file}`);
          continue;
        }
      }

    }
  }

  console.log(gradient.fruit(`[👌] > Loaded ${type}s:`), c);
}

client.on("ready", async () => {
  await commandsHandler("./Commands", "command");
  await commandsHandler("./Events", "event");

  console.log(
    gradient.instagram(
      "-------------------------------------------------------------------------------------------"
    )
  );
  console.log(gradient.passion("Logged in as " + client.user?.tag));
});

process.on("uncaughtException", (err) => {
  console.log(err)
});

client.login(process.env.TOKEN);
