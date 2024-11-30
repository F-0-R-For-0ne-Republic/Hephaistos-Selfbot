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
 * File:       client.d.ts (c) 2024
 * Author:     Unknown-user-dev
 * Description: description
 * Created:    29/11/2024, 20:33:47
 * Modified:   2024-11-30T12:18:26.600Z
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


import { Client } from 'discord.js-selfbot-v13';
import type { Command } from './command';

declare global {
  var lang: any
  var client: Client;
  var prefix: string;
}


declare module 'discord.js-selfbot-v13' {
  interface Client {
    commands: Map<string, Command>;
    aliases: Map<string, string>
  }
}

export {}; 