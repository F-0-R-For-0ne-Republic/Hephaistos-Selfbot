const gradient = require('gradient-string');
const readlineSync = require('readline-sync');
require('dotenv').config();
const fs = require('fs');
const colors = require('colors');
const config = require("../../config.json")

const clearLine = () => process.stdout.clearLine();
const cursorToStart = () => process.stdout.cursorTo(0);
const clearConsole = () => process.stdout.write('\u001B[2J\u001B[0;0f');
const centerText = (text) => {
    const terminalWidth = process.stdout.columns;
    const padding = Math.floor((terminalWidth - text.length) / 2);
    return ' '.repeat(padding) + text + ' '.repeat(padding);
};

const showAnimation = (message, duration, finalMessage) => {
    let i = 0;
    const animation = ['/', '-', '\\'];
    const intervalId = setInterval(() => {
        clearLine();
        cursorToStart();
        process.stdout.write(gradient.atlas(centerText(`${message} ${animation[i]}`)) + '\r');
        i = (i + 1) % animation.length;
    }, 150);

    setTimeout(() => {
        clearInterval(intervalId);
        clearLine();
        cursorToStart();
        process.stdout.write(gradient.atlas(centerText(`${finalMessage}`)) + '\n');
    }, duration);
};

const promptForToken = () => {
    console.log(`
        ${gradient.atlas(`
    __  __           __          _      __                _____      __________        __ 
   / / / /__  ____  / /_  ____ _(_)____/ /_____  _____   / ___/___  / / __/ __ )____  / /_
  / /_/ / _ \\/ __ \\/ __ \\/ __ \`/ / ___/ __/ __ \\/ ___/   \\__ \\/ _ \\/ / /_/ __  / __ \\/ __/
 / __  /  __/ /_/ / / / / /_/ / (__  ) /_/ /_/ (__  )   ___/ /  __/ / __/ /_/ / /_/ / /_  
/_/ /_/\\___/ .___/_/ /_/\\__,_/_/____/\\__/\\____/____/   /____/\\___/_/_/ /_____/\\____/\\__/  
          /_/        
            `)}
                       ${gradient.retro("Best Discord Selfbot")} | ${gradient.retro(`Login With Token`)}
    `);
    const userInput = readlineSync.question(gradient.retro('>_hephaistos-selfbot') + "@" + gradient.retro("token") + `:`);
    return userInput;
};

const displayrealintro = () => {
    console.log(`
                ${gradient.atlas(`
    __  __           __          _      __                _____      __________        __ 
   / / / /__  ____  / /_  ____ _(_)____/ /_____  _____   / ___/___  / / __/ __ )____  / /_
  / /_/ / _ \\/ __ \\/ __ \\/ __ \`/ / ___/ __/ __ \\/ ___/   \\__ \\/ _ \\/ / /_/ __  / __ \\/ __/
 / __  /  __/ /_/ / / / / /_/ / (__  ) /_/ /_/ (__  )   ___/ /  __/ / __/ /_/ / /_/ / /_  
/_/ /_/\\___/ .___/_/ /_/\\__,_/_/____/\\__/\\____/____/   /____/\\___/_/_/ /_____/\\____/\\__/  
          /_/        
            `)}
                ${gradient.retro("Best Discord Selfbot")} | Made By ${gradient.retro('unknownuser.js')} | ${gradient.instagram('For F.0.L')}
    `);
    console.log(`                       ${gradient.retro("Welcome.")} Use the ${gradient.retro(`${config.prefix}help`)} command to begin`);
}




module.exports = {
    displayIntro: async () => {
        clearConsole();
        displayrealintro()
    },
}