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
 * File:       savepfp.ts (c) 2024
 * Author:     Unknown-user-dev
 * Description: Save any pfp you want !
 * Created:    01/12/2024, 10:27:05
 * Modified:   01/12/2024, 10:34:02
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

import type { Command } from "../../../types/command";
import * as fs from 'fs';
import fetch from 'node-fetch';
import * as path from 'path';

export const command: Command = {
    name: 'savepfp',
    description: lang.savepfpdesc,
    category: "Utils",
    async run(client, message, args) {
        try {
            const user = message.mentions.users.first() || message.author;
            if (!user) {
                return message.edit(`${lang.nousererror}`);
            }

            const dir = path.resolve('./files/pfp');
            if (!fs.existsSync(dir)) {
                fs.mkdirSync(dir, { recursive: true });
            }

            const avatarURL = user.displayAvatarURL({ dynamic: true, size: 1024 });
            const extension = avatarURL.endsWith('.gif') ? 'gif' : 'png';

            const response = await fetch(avatarURL);
            const buffer = await response.arrayBuffer();
            fs.writeFileSync(path.join(dir, `${user.tag}.${extension}`), new Uint8Array(buffer));
            message.edit(`${lang.savedpfp} ${user.tag}`);
        } catch (error) {
            message.edit(`${error}`);
        }
    }
};

