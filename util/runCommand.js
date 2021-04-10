const { version } = require("../package.json");
const help = require("../commands/help");

const HOTSHandler = require("../commands/HOTS-handler");

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

    case "version":
    case "ver":
      await message.channel.send(`Version: ${version}`);
      break;

    case "ping":
      await message.channel.send("Pong! 🏓");
      break;
  }
};
