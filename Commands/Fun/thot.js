const Discord = require("discord.js-selfbot-v13");

module.exports = {
  name: "thot",
  description: lang.thotinfodesc,
  run: async (client, message, args) => {
    try {
      const target = message.mentions.users.first() || message.author;
      const rating = Math.floor(Math.random() * 100) + 1;

      const response = `${lang.thot1} ${target.username} ${lang.thot2} \`${rating}%\``;
      await message.edit(response);
    } catch (error) {
      console.error("An error occurred while running the 'thot' command:", error);
    }
  },
};


// a finir mais marche
