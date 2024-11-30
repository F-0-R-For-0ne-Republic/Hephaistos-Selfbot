import type { Command } from "../../../types/command";

export const command: Command = {
  name: "nitro",
  description: lang.nitroinfodesc,
  category: "Fun",
  run: async (client, message, args) => {
    try {
      function nitrocode(length: number, charset: string) {
        const charsets = {
          "0": "0123456789",
          "a": "abcdefghijklmnopqrstuvwxyz",
          "A": "ABCDEFGHIJKLMNOPQRSTUVWXYZ",
        };

        let chars = "";
        if (charset.includes("0")) chars += charsets["0"];
        if (charset.includes("a")) chars += charsets["a"];
        if (charset.includes("A")) chars += charsets["A"];

        let result = "";
        for (let i = 0; i < length; i++) {
          result += chars[Math.floor(Math.random() * chars.length)];
        }

        return result;
      }

      const fakeNitroLink = `https://discord.gift/${nitrocode(16, "0aA")}`;

      await message.edit(fakeNitroLink);
    } catch (error) {
      console.error("Error while running the 'nitro' command:", error);
    }
  },
};

// fini ?
