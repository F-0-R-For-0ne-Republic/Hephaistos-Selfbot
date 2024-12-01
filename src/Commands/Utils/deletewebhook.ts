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
 * File:       deletewebhook.ts (c) 2024
 * Author:     Unknown-user-dev
 * Description: Delete any webhook you want !
 * Created:    01/12/2024, 10:20:41
 * Modified:   01/12/2024, 10:23:30
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

export const command: Command = {
    name: 'deletewebhook',
    description: lang.deletewebhookdesc,
    category: "Utils",
    async run(client, message, args) {
        try {
            const webhook = message.content.split(" ").slice(1).join(" ");
            if (!webhook) return message.edit(`${lang.nowebhook}`);

            const response = await fetch(webhook, {
                method: 'DELETE',
            });

            if (!response.ok) {
                throw new Error(`Eww... : ${response.status}`);
            }

            message.edit(`:white_check_mark: **${lang.webhook1} ${webhook}!**`);
        } catch (err) {
            message.reply(`An error occurred: ${err}`);
        }
    }
};



