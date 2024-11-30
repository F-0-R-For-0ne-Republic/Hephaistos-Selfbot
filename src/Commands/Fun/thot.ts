import type { Command } from "../../../types/command";

export const command :Command = {
  name: "thot",
  description: lang.thotinfodesc,
  category: "Fun",
  run: async (client, message, args) => {
    try {
      const target = message.mentions.users.first() || message.author;
      const rating = Math.floor(Math.random() * 100) + 1;

      const response = lang.thottest
        .replace("{target}", target)
        .replace("{rating}", rating);

      await message.edit(response);
    } catch (error) {
      console.error(
        "An error occurred while running the 'thot' command:",
        error
      );
    }
  },
};

// a finir mais marche
