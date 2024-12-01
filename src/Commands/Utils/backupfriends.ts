/***************************************************************************
 *                        >_Unknown User's Project
 *                    (https://github.com/Unknown-user-dev)
 *      
 *      $$\   $$\           $$\                                                   
 *      $$ |  $$ |          $$ |                                                  
 *      $$ |  $$ |$$$$$$$\  $$ |  $$\ $$$$$$$\   $$$$$$\  $$\  $$\  $$\ $$$$$$$\  
 *      $$ |  $$ |$$  __$$\ $$ | $$  |$$  __$$\ $$  __$$\ $$ | $$ | $$ |$$  __$$\ 
 *      $$ |  $$ |$$ |  $$ |$$$$$$  / $$ |  $$ |$$ /  $$ |$$ | $$ | $$ |$$ |  $$ |
 *      $$ |  $$ |$$ |  $$ |$$  _$$<  $$ |  $$ |$$ |  $$ |$$ | $$ | $$ |$$ |  $$ |
 *      $$$$$$  |$$ |  $$ |$$ | $$\ $$ |  $$ |$$$$$$  |$$$$$$$$$  |$$ |  $$ |
 *       \______/ \__|  \__|\__|  \__|\__|  \__| \______/  \_____\____/ \__|  \__|
 *    Every line of code is a step toward mastering the unknown. Keep evolving, >_Unknown User.
 *                                                                         
 * File:       backupfriends.ts (c) 2024
 * Author:     Unknown-user-dev
 * Description: Backup your friends ! 
 * Created:    01/12/2024, 10:10:05
 * Modified:   01/12/2024, 12:45:51
 *
 *    Licensed under the Attribution-NonCommercial-ShareAlike 4.0 International
 *                             (CC BY-NC-SA 4.0)
 *
 *    Under the following terms:
 *
 *    ・ Attribution — You must give appropriate credit, provide a link to the license,
 *      and indicate if changes were made. You may do so in any reasonable manner, but
 *      not in any way that suggests the licensor endorses you or your use.
 *
 *    ・ NonCommercial — You may not use the material for commercial purposes.
 *
 *    ・ ShareAlike — If you remix, transform, or build upon the material, you must
 *      distribute your contributions under the same license as the original.
 *
 *    ・ No additional restrictions — You may not apply legal terms or technological
 *      measures that legally restrict others from doing anything the license permits.
 *
 *    Developed by >_Unknown User
 *    (GitHub: https://github.com/Unknown-user-dev)
 *    (Discord: unknownuser.js)
 *
 *    Copyright © 2024 >_Unknown User
 ***************************************************************************/

import { Client } from "discord.js-selfbot-v13";
import type { Command } from "../../../types/command";
import fetch from 'node-fetch';
import fs from 'fs';
import gradient from "gradient-string";

export const command: Command = {
    name: 'backupfriends',
    description: lang.backupdesc,
    category: "Utils",
    async run(client, message, args) {
        try {
            const response = await fetch('https://discordapp.com/api/users/@me/relationships', {
                headers: { authorization: client.token as string }
            });

            if (!response.ok) {
                throw new Error(`HTTP error! status: ${response.status}`);
            }

            const data = await response.json();
            const friends = data.filter((user: any) => user.type === 1);
            const friendsList = friends.map((friend: any) => `${friend.user.username}#${friend.user.discriminator}`).join("\n");

            fs.writeFile('./files/friends.txt', friendsList, (err) => {
                if (err) throw err;
                console.log(gradient.instagram(`[${config.console.emojis.okay}] > ${lang.backupfriends1} friends.json`));
                message.edit(`${lang.backupfriends1} friends.txt`);
            });
        } catch (err) {
            console.error(err);
        }
    },
};

