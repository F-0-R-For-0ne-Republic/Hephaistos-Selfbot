import { Client } from "discord.js-selfbot-v13";
import type { Command } from "../../types/command";


export const command :Command = {
    name: 'serverinfo',
    description: lang.serverinfodesc,
    category: "Utils",
    run(client, message, args) {
        const guild = args.length > 1 ? client.guilds.cache.get(args[1]) : message.guild;
        if (!guild) {
            return message.reply(`${lang.cannotfindtargetserver}`)
        }

        const serverInfo = {
            'ID': guild.id,
            'Name': guild.name,
            'Owner': guild.members.cache.get(guild.ownerId)?.user || "unknown",
            'Owner ID': guild.ownerId,
            'Member Count': guild.memberCount,
            'Bots': guild.members.cache.filter(member => member.user.bot).size,
            'Roles': guild.roles.cache.size,
            'Total Boosts': guild.premiumSubscriptionCount,
            'Boost Level': guild.premiumTier,
            'Text Channels': guild.channels.cache.filter(channel => channel.isText()).size,
            'Voice Channels': guild.channels.cache.filter(channel => channel.isVoice()).size,
            'Verification Level': guild.verificationLevel,
            'MFA Security': guild.mfaLevel ? '2FA required' : '2FA not required',
            'Large Guild': guild.large ? 'True' : 'False',
            'Emoji Count': guild.emojis.cache.size,
            'Features': guild.features.join('\n'),
        };

        const serverInfoStr = Object.entries(serverInfo)
            .map(([key, value]) => `* ${key} ${value}`)
            .join('\n');

        message.edit(`\`\`\`\asciidoc\n${serverInfoStr}\`\`\``)

    },
};