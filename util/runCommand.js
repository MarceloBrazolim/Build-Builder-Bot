const { version } = require("../package.json");
const help = require("../commands/help");

const HOTSHandler = require("../commands/HOTS-handler");
const LoLHandler = require("../commands/LoL-handler");

// Method to handle multiple commands
module.exports = async (message, command, args) => {
  switch (command) {
    case "help":
      await help(message);
      break;

    case "heroes":
    case "hots":
    case "h":
    case "her":
    case "hero":
    case "heroe":
      await HOTSHandler(message, args.join("-"));
      break;

    case "leagueoflegends":
    case "leagueoflegend":
    case "l o l":
    case "lo l":
    case "l ol":
    case "lol":
    case "l":
      await LoLHandler(message, args.join("-"));
      break;

    case "version":
    case "ver":
      await message.channel.send(`Version: ${version}`);
      break;

    case "ping":
      await message.channel.send("Pong! 🏓");
      break;
  }
};
