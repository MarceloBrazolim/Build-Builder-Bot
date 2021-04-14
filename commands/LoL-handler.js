const Discord = require("discord.js");

module.exports = async (message, args) => {
  switch (args) {
    case "list":
      await message.channel.send(
        "```diff\n" +
          "List of Champion in League of Legends\n\n" +
          "- Viego\n" +
          "- Rell\n" +
          "- Seraphine\n" +
          "- samira\n" +
          "- Yone\n" +
          "- Lillia\n" +
          "- Sett\n" +
          "- Aphelios\n" +
          "- Senna\n" +
          "- Qiyana\n" +
          "- Yuumi\n" +
          "- Sylas\n" +
          "- Neeko\n" +
          "- Pyke\n" +
          "- Kai'Sa\n" +
          "- Zoe\n" +
          "- Ornn\n" +
          "- Kayn\n" +
          "- Rakan\n" +
          "- Xayah\n" +
          "- Camille\n" +
          "- Ivern\n" +
          "- Kled\n" +
          "- Taliyah\n" +
          "- Aurelion Sol\n" +
          "- Jhin\n" +
          "- Illaoi\n" +
          "- Kindred\n" +
          "- Tahm Kench\n" +
          "- Ekko\n" +
          "- Bard\n" +
          "- Rek'Sai\n" +
          "- Kalista\n" +
          "- Azir\n" +
          "- Gnar\n" +
          "- Braum\n" +
          "- Vel'Koz\n" +
          "- Yasuo\n" +
          "- Jinx\n" +
          "- Lucian\n" +
          "- Aatrox\n" +
          "- Lissandra\n" +
          "- Zac\n" +
          "- Quinn\n" +
          "- Thresh\n" +
          "- Vi\n" +
          "- Nami\n" +
          "- Zed\n" +
          "- Elise\n" +
          "- Kha'Zix\n" +
          "- Syndra\n" +
          "- Rengar\n" +
          "- Diana\n" +
          "- Zyra\n" +
          "- Jayce\n" +
          "- Draven\n" +
          "- Darius\n" +
          "- Varus\n" +
          "- Hecarim\n" +
          "- Lulu\n" +
          "- Fiora\n" +
          "- Nautilus\n" +
          "- Ziggs\n" +
          "- Sejuani\n" +
          "- Viktor\n" +
          "- Ahri\n" +
          "- Volibear\n" +
          "- Fizz\n" +
          "- Shyvana\n" +
          "- Graves\n" +
          "- Xerath\n" +
          "- Riven\n" +
          "- Talon\n" +
          "- Skarner\n" +
          "- Wukong\n" +
          "- Leona\n" +
          "- Yorick\n" +
          "- Orianna\n" +
          "- Vayne\n" +
          "- Rumble\n" +
          "- Brand\n" +
          "- Lee Sin\n" +
          "- Nocturne\n" +
          "- Jarvan IV\n" +
          "- Maokai\n" +
          "- Karma\n" +
          "- Renekton\n" +
          "- Caitlyn\n" +
          "- Cassiopeia\n" +
          "- Trundle\n" +
          "- Irelia\n" +
          "- LeBlanc\n" +
          "- Lux\n" +
          "- Swain\n" +
          "- Sona\n" +
          "- Miss Fortune\n" +
          "- Urgot\n" +
          "- Galio\n" +
          "- Vladimir\n" +
          "- Xin Zhao\n" +
          "- Kog'Maw\n" +
          "- Olaf\n" +
          "- Malzahar\n" +
          "- Akali\n" +
          "- Garen\n" +
          "- Kennen\n" +
          "- Shen\n" +
          "- Ezreal\n" +
          "- Mordekaiser\n" +
          "- Gragas\n" +
          "- Pantheon\n" +
          "- Poppy\n" +
          "- Nidalee\n" +
          "- Udyr\n" +
          "- Heimerdinger\n" +
          "- Shaco\n" +
          "- Nasus\n" +
          "- Corki\n" +
          "- Katarina\n" +
          "- Blitzcrank\n" +
          "- Dr. Mundo\n" +
          "- Janna\n" +
          "- Malphite\n" +
          "- Gangplank\n" +
          "- Taric\n" +
          "- Kassadin\n" +
          "- Veigar\n" +
          "- Anivia\n" +
          "- Rammus\n" +
          "- Amumu\n" +
          "- Cho'Gath\n" +
          "- Karthus\n" +
          "- Evelynn\n" +
          "- Tryndamere\n" +
          "- Twitch\n" +
          "- Singed\n" +
          "- Zilean\n" +
          "- Alistar\n" +
          "- Annie\n" +
          "- Ashe\n" +
          "- Fiddlesticks\n" +
          "- Jax\n" +
          "- Kayle\n" +
          "- Master Yi\n" +
          "- Morgana\n" +
          "- Nunu & Willump\n" +
          "- Ryze\n" +
          "- Sion\n" +
          "- Sivir\n" +
          "- Soraka\n" +
          "- Teemo\n" +
          "- Tristana\n" +
          "- Twisted Fate\n" +
          "- Warwick\n" +
          "```"
      );
      break;

    case "swain":
      await message.channel.send({
        files: ["./builds/LoL/swain/1.png", "./builds/LoL/swain/2.png"],
      });
      break;

    default:
      await message.channel.send("Sorry, I didn't understand...");
      break;
  }
};
