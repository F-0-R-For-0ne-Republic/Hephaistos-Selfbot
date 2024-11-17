const { Client } = require('discord.js-selfbot-v13');
const client = new Client();

const inviteinfoCommand = {
    name: 'inviteinfo',
    description: lang.inviteinfodesc,
    async run(client, message, args) {
        var invite = args[0]
        if (!invite) return message.edit(`\`\`\`ini
        [ Invite Information - HephaistosSB ]
        
            ${lang.noinviteerror}\`\`\``)
        var inviteinfo = await client.fetchInvite(invite)

        message.edit(`\`\`\`ini
[ Invite Information - HephaistosSB ]

[ Invite Information ]
- Guild Name : ${inviteinfo.channel.guild.name}
- Code : ${inviteinfo.code}
- Features :  ${inviteinfo.guild.features}
- ID : ${inviteinfo.channel.id}
- Member Count : ${inviteinfo.memberCount}
- Boost : ${inviteinfo.guild.premiumTier}
- Channel Name : ${inviteinfo.channel.name}\`\`\``)




    },
};

// Register Commands
client.commands = new Map();
client.commands.set(inviteinfoCommand.name, inviteinfoCommand);

module.exports = inviteinfoCommand;
