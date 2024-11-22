const Discord = require("discord.js-selfbot-v13");

module.exports = {
  name: "thot",
  description: "Check the percentage of someone's filthiness",
  run: async (client, message, args) => {
    try {
      const target = message.mentions.users.first() || message.author;
      const rating = Math.floor(Math.random() * 100) + 1;

      const response = `Le pourcentage de la saloperie de ${target.username} est de: \`${rating}%\``;
      await message.edit(response);
    } catch (error) {
      console.error("An error occurred while running the 'thot' command:", error);
    }
  },
};


// a finir mais marche
