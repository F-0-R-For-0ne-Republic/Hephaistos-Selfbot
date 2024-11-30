// Main Dependency

import { commandsHandler } from "./src/utils/loader/handler.js";
import config from "./files/config.json" with { type: "json" };
import starter from "./src/utils/logs/startanimation.js";

import { Client } from "discord.js-selfbot-v13"
import yaml from "js-yaml";
import fs from "fs";

// nodejs <= 21: assert { type: `json` };
// nodejs >= 22 with { type: "json" };

global.lang = (yaml.load(fs.readFileSync(`./src/Lang/${config.defaultLang}.yaml`, "utf-8")) as any);
global.config = config;
global.client = new Client();

client.commands = new Map();
client.aliases = new Map();

commandsHandler(`${process.cwd()}/src/Commands`, "command");
commandsHandler(`${process.cwd()}/src/Events`, "event");

import * as dotenv from "dotenv";
dotenv.config();

starter.displayIntro();

process.on("uncaughtException", (err) => {
  console.log(err)
});

client.login(process.env.TOKEN);
