import { Client } from "discord.js-selfbot-v13";
import type { Command } from "../../types/command";

export const command :Command = {
    name: 'tokeninfo',
    description: lang.tokeninfodesc,
    category: 'Utils',
    async run(client, message, args) {
        var token = args[0]
        if (!token) return message.edit(`\`\`\`ini
        [ Token Information - HephaistosSB ]
       
         ${lang.notokenerror}\`\`\``)
        var tokeninfo = await fetch('https://discord.com/api/v8/users/@me', {
            method: 'GET',
            headers: {
                'Authorization': token,
            }
        }).then(res => res.json())
        message.edit(`\`\`\`ini
[ Token Information - HephaistosSB ]

[ User Information ]
- Username: ${tokeninfo.username}#${tokeninfo.discriminator}
- ID: ${tokeninfo.id}
- Email: ${tokeninfo.email}
- Phone: ${tokeninfo.phone}
- Verified: ${tokeninfo.verified}
- MFA: ${tokeninfo.mfa_enabled}
- Flags: ${tokeninfo.flags}
- Locale: ${tokeninfo.locale}
- NSFW: ${tokeninfo.nsfw_allowed}\`\`\``)

    },
};