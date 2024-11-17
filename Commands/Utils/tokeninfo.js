const { Client } = require('discord.js-selfbot-v13');
const client = new Client();

const tokeninfoCommand = {
    name: 'tokeninfo',
    description: lang.tokeninfodesc,
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

// Register Commands
client.commands = new Map();
client.commands.set(tokeninfoCommand.name, tokeninfoCommand);

module.exports = tokeninfoCommand;
