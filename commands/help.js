const Discord = require("discord.js");
const { prefix } = require("../config/config.json");

module.exports = async (message) => {
  await message.channel.send(
    new Discord.MessageEmbed().setColor("#36393e").addFields(
      {
        name: "Build visualizer commands",
        value: "\u200B",
      },
      {
        name: `${prefix}HOTS <character>/List`,
        value: "Displays a Hero's\nTalent Builds",
        inline: true,
      },
      {
        name: `${prefix}LOL <character>/List`,
        value: "Under construction,\ncome back another time",
        //value: "Displays a League Character's Builds",
        inline: true,
      },
      { name: "\u200B", value: "\u200B" },
      {
        name: `${prefix}help`,
        value: "Shows the command list",
        inline: true,
      },
      {
        name: `${prefix}Ping`,
        value: "Pong! 🏓",
        inline: true,
      }
    )
  );
};
