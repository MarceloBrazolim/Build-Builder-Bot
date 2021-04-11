const Discord = require("discord.js");
const client = new Discord.Client();
const config = require("./config/config.json");
const credentials = require("./config/credentials.json");

const runCommand = require("./util/runCommand");

// Once node started
client.once("ready", async () => {
  client.user
    .setActivity(`${config.prefix}help`, { type: "LISTENING" })
    .catch(console.error);
  console.log(`${client.user.tag} is Online!`);

  // List for permission list
  // https://gist.github.com/milanmdev/06a47faa1925eebfcbbb65cf02c57963
  client
    .generateInvite({
      permissions: ["SEND_MESSAGES", "VIEW_CHANNEL"],
    })
    .then((link) => {
      console.log(`Bot invite link: ${link}`);
    })
    .catch(console.error);
});

// Main Event Listener
client.on("message", async (message) => {
  if (
    !message.content.startsWith(config.prefix) ||
    message.author.bot ||
    message.channel.type === "dm"
  )
    return;

  var arg = encodeURI(message)
    .slice(config.prefix.length)
    .trim()
    .split("'")
    .split(".");
  const args = arg
    .filter(() => (arg = "'"))
    .filter(() => (arg = "."))
    .join("")
    .toLowerCase()
    .split("%20");
  const command = args.shift();
  if (config.debugg)
    console.log(`Command: { ${config.prefix}${command} ${args} }`);

  await runCommand(message, command, args);
});

client.login(credentials.token);
