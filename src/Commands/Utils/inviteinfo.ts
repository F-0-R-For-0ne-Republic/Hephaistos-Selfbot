import { Client } from "discord.js-selfbot-v13";
import type { Command } from "../../../types/command";


export const command: Command = {
    name: 'inviteinfo',
    description: lang.inviteinfodesc,
    category: "Utils",
    async run(client, message, args) {
        var invite = args[0]
        if (!invite) return message.edit(`\`\`\`ini
        [ Invite Information - HephaistosSB ]
        
            ${lang.noinviteerror}\`\`\``)
        var inviteinfo = await client.fetchInvite(invite);

        message.edit(
            `\`\`\`ini
[ Invite Information - HephaistosSB ]

[ Invite Information ]
- Guild Name : ${inviteinfo.guild?.name}
- Code : ${inviteinfo.code}
- Features :  ${inviteinfo.guild?.features}
- ID : ${inviteinfo.channel?.id}
- Member Count : ${inviteinfo.memberCount}
- Boost : ${inviteinfo.guild?.premiumSubscriptionCount}
- Channel Name : ${inviteinfo.channel?.name}\`\`\``
        );


    },
};