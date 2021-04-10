const Discord = require("discord.js");

module.exports = async (message, args) => {
  switch (args) {
    case "list":
      await message.channel.send(
        "```md\n" +
          "# Hero List in Heroes of The Storm\n\n" +
          "- Abathur -> " +
          "Support\n" +
          "- Diablo -> " +
          "Tank\n" +
          "- E.T.C. -> " +
          "Tank\n" +
          "- Arthas -> " +
          "Tank\n" +
          "- Falstad -> " +
          "Ranged Ass\n" +
          "- Gazlowe -> " +
          "Bruiser\n" +
          "- Illidan <3 -> " +
          "Melee Ass\n" +
          "- Kerrigan -> " +
          "Melee Ass\n" +
          "- Malfurion -> " +
          "Healer\n" +
          "- Muradin -> " +
          "Tank\n" +
          "- Nazeebo -> " +
          "Ranged Ass\n" +
          "- Nova -> " +
          "Ranged Ass\n" +
          "- Raynor -> " +
          "Ranged Ass\n" +
          "- Sgt. Hammer -> " +
          "Ranged Ass\n" +
          "- Sonya -> " +
          "Bruiser\n" +
          "- Stitches -> " +
          "Tank\n" +
          "- Tassadar -> " +
          "Ranged Ass\n" +
          "- Tyrael -> " +
          "Tank\n" +
          "- Tyrande -> " +
          "Healer\n" +
          "- Uther -> " +
          "Healer\n" +
          "- Valla -> " +
          "Ranged Ass\n" +
          "- Zeratul -> " +
          "Melee Ass\n" +
          "- Tychus -> " +
          "Ranged Ass\n" +
          "- Brightwing -> " +
          "Healer\n" +
          "- Li Li -> " +
          "Healer\n" +
          "- Murky -> " +
          "Melee Ass\n" +
          "- Zagara -> " +
          "Ranged Ass\n" +
          "- Rehgar -> " +
          "Healer\n" +
          "- Chen -> " +
          "Bruiser\n" +
          "- Anub'arak -> " +
          "Tank\n" +
          "- Azmodan -> " +
          "Ranged Ass\n" +
          "- Jaina -> " +
          "Ranged Ass\n" +
          "- Thrall -> " +
          "Bruiser\n" +
          "- The Lost Vikings -> " +
          "Support\n" +
          "- Sylvanas -> " +
          "Ranged Ass\n" +
          "- Kael'thas -> " +
          "Ranged Ass\n" +
          "- Johanna -> " +
          "Tank\n" +
          "- The Butcher -> " +
          "Melee Ass\n" +
          "- Leoric -> " +
          "Bruiser\n" +
          "- Kharazim -> " +
          "Healer\n" +
          "- Rexxar -> " +
          "Bruiser\n" +
          "- Lt.Morales -> " +
          "Healer\n" +
          "- Artanis -> " +
          "Bruiser\n" +
          "- Cho -> " +
          "Tank\n" +
          "- Gall -> " +
          "Ranged Ass\n" +
          "- Lunara -> " +
          "Ranged Ass\n" +
          "- Greymane -> " +
          "Ranged Ass\n" +
          "- Li-Ming -> " +
          "Ranged Ass\n" +
          "- Xul -> " +
          "Bruiser\n" +
          "- Dehaka -> " +
          "Bruiser\n" +
          "- Tracer -> " +
          "Ranged Ass\n" +
          "- Chromie -> " +
          "Ranged Ass\n" +
          "- Medivh -> " +
          "Support\n" +
          "- Gul'dan -> " +
          "Ranged Ass\n" +
          "- Auriel -> " +
          "Healer\n" +
          "- Alarak -> " +
          "Melee Ass\n" +
          "- Zarya -> " +
          "Support\n" +
          "- Samuro -> " +
          "Melee Ass\n" +
          "- Varian -> " +
          "Bruiser\n" +
          "- Ragnaros -> " +
          "Bruiser\n" +
          "- Zul'jin -> " +
          "Ranged Ass\n" +
          "- Valeera -> " +
          "Melee Ass\n" +
          "- Lúcio -> " +
          "Healer\n" +
          "- Probius -> " +
          "Ranged Ass\n" +
          "- Cassia -> " +
          "Ranged Ass\n" +
          "- Genji -> " +
          "Ranged Ass\n" +
          "- D.Va -> " +
          "Bruiser\n" +
          "- Malthael -> " +
          "Bruiser\n" +
          "- Stukov -> " +
          "Healer\n" +
          "- Garrosh -> " +
          "Tank\n" +
          "- Kel'Thuzad -> " +
          "Ranged Ass\n" +
          "- Ana -> " +
          "Healer\n" +
          "- Junkrat -> " +
          "Ranged Ass\n" +
          "- Alexstrasza -> " +
          "Healer\n" +
          "- Hanzo -> " +
          "Ranged Ass\n" +
          "- Blaze -> " +
          "Tank\n" +
          "- Maiev -> " +
          "Melee Ass\n" +
          "- Fenix -> " +
          "Ranged Ass\n" +
          "- Deckard -> " +
          "Healer\n" +
          "- Yrel -> " +
          "Bruiser\n" +
          "- Whitemane -> " +
          "Healer\n" +
          "- Mephisto -> " +
          "Ranged Ass\n" +
          "- Mal'Ganis -> " +
          "Tank\n" +
          "- Orphea -> " +
          "Ranged Ass\n" +
          "- Imperius -> " +
          "Bruiser\n" +
          "- Anduin -> " +
          "Healer\n" +
          "- Qhira -> " +
          "Melee Ass\n" +
          "- Deathwing -> " +
          "Bruiser\n" +
          "- Mei -> " +
          "Tank\n" +
          "- Hogger -> " +
          "Bruiser\n" +
          "```"
      );
      break;

    case "illidan":
      await message.channel.send({
        files: ["./builds/HOTS/illidan/1.png", "./builds/HOTS/illidan/2.png"],
      });
      break;

    case "hogger":
      await message.channel.send({
        files: [
          "./builds/HOTS/hogger/1.png",
          "./builds/HOTS/hogger/2.png",
          "./builds/HOTS/hogger/3.png",
        ],
      });
      break;

    case "mei":
      await message.channel.send({
        files: [
          "./builds/HOTS/mei/1.png",
          "./builds/HOTS/mei/2.png",
          "./builds/HOTS/mei/3.png",
        ],
      });
      break;

    case "deathwing":
      await message.channel.send({
        files: [
          "./builds/HOTS/deathwing/1.png",
          "./builds/HOTS/deathwing/2.png",
          "./builds/HOTS/deathwing/3.png",
        ],
      });
      break;

    case "qhira":
      await message.channel.send({
        files: ["./builds/HOTS/qhira/1.png", "./builds/HOTS/qhira/2.png"],
      });
      break;

    case "anduin":
      await message.channel.send({
        files: ["./builds/HOTS/anduin/1.png"],
      });
      break;

    case "imperius":
      await message.channel.send({
        files: ["./builds/HOTS/imperius/1.png", "./builds/HOTS/imperius/2.png"],
      });
      break;

    case "orphea":
      await message.channel.send({
        files: ["./builds/HOTS/orphea/1.png", "./builds/HOTS/orphea/2.png"],
      });
      break;

    case "malganis":
      await message.channel.send({
        files: ["./builds/HOTS/malganis/1.png"],
      });
      break;

    case "mephisto":
      await message.channel.send({
        files: ["./builds/HOTS/mephisto/1.png", "./builds/HOTS/mephisto/2.png"],
      });
      break;

    case "whitemane":
      await message.channel.send({
        files: [
          "./builds/HOTS/whitemane/1.png",
          "./builds/HOTS/whitemane/2.png",
          "./builds/HOTS/whitemane/3.png",
        ],
      });
      break;

    case "yrel":
      await message.channel.send({
        files: ["./builds/HOTS/yrel/1.png"],
      });
      break;

    case "deckard":
      await message.channel.send({
        files: ["./builds/HOTS/deckard/1.png", "./builds/HOTS/deckard/2.png"],
      });
      break;

    case "fenix":
      await message.channel.send({
        files: ["./builds/HOTS/fenix/1.png"],
      });
      break;

    case "maiev":
      await message.channel.send({
        files: ["./builds/HOTS/maiev/1.png", "./builds/HOTS/maiev/2.png"],
      });
      break;

    case "blaze":
      await message.channel.send({
        files: ["./builds/HOTS/blaze/1.png", "./builds/HOTS/blaze/2.png"],
      });
      break;

    case "hanzo":
      await message.channel.send({
        files: [
          "./builds/HOTS/hanzo/1.png",
          "./builds/HOTS/hanzo/2.png",
          "./builds/HOTS/hanzo/3.png",
        ],
      });
      break;

    case "alexstrasza":
      await message.channel.send({
        files: [
          "./builds/HOTS/alextrasza/1.png",
          "./builds/HOTS/alextrasza/2.png",
          "./builds/HOTS/alextrasza/3.png",
        ],
      });
      break;

    case "junkrat":
      await message.channel.send({
        files: [
          "./builds/HOTS/junkrat/1.png",
          "./builds/HOTS/junkrat/2.png",
          "./builds/HOTS/junkrat/3.png",
        ],
      });
      break;

    case "ana":
      await message.channel.send({
        files: ["./builds/HOTS/ana/1.png", "./builds/HOTS/ana/2.png"],
      });
      break;

    case "kelthuzad":
      await message.channel.send({
        files: ["./builds/HOTS/kelthuzad/1.png"],
      });
      break;

    case "garrosh":
      await message.channel.send({
        files: ["./builds/HOTS/garrosh/1.png", "./builds/HOTS/garrosh/2.png"],
      });
      break;

    case "stukov":
      await message.channel.send({
        files: ["./builds/HOTS/stukov/1.png"],
      });
      break;

    case "malthael":
      await message.channel.send({
        files: ["./builds/HOTS/malthael/1.png", "./builds/HOTS/malthael/2.png"],
      });
      break;

    case "dva":
    case "d.va":
      await message.channel.send({
        files: [
          "./builds/HOTS/dva/1.png",
          "./builds/HOTS/dva/2.png",
          "./builds/HOTS/dva/3.png",
        ],
      });
      break;

    case "genji":
      await message.channel.send({
        files: ["./builds/HOTS/genji/1.png", "./builds/HOTS/genji/2.png"],
      });
      break;

    case "cassia":
      await message.channel.send({
        files: ["./builds/HOTS/cassia/1.png", "./builds/HOTS/cassia/2.png"],
      });
      break;

    case "probius":
      await message.channel.send({
        files: ["./builds/HOTS/probius/1.png", "./builds/HOTS/probius/2.png"],
      });
      break;

    case "lucio":
      await message.channel.send({
        files: ["./builds/HOTS/lucio/1.png", "./builds/HOTS/lucio/2.png"],
      });
      break;

    case "valeera":
      await message.channel.send({
        files: ["./builds/HOTS/valeera/1.png", "./builds/HOTS/valeera/2.png"],
      });
      break;

    case "zuljin":
      await message.channel.send({
        files: [
          "./builds/HOTS/zuljin/1.png",
          "./builds/HOTS/zuljin/2.png",
          "./builds/HOTS/zuljin/3.png",
        ],
      });
      break;

    case "ragnaros":
      await message.channel.send({
        files: [
          "./builds/HOTS/ragnaros/1.png",
          "./builds/HOTS/ragnaros/2.png",
          "./builds/HOTS/ragnaros/3.png",
        ],
      });
      break;

    case "varian":
      await message.channel.send({
        files: [
          "./builds/HOTS/varian/1.png",
          "./builds/HOTS/varian/2.png",
          "./builds/HOTS/varian/3.png",
        ],
      });
      break;

    case "samuro":
      await message.channel.send({
        files: [
          "./builds/HOTS/samuro/1.png",
          "./builds/HOTS/samuro/2.png",
          "./builds/HOTS/samuro/3.png",
        ],
      });
      break;

    case "zarya":
      await message.channel.send({
        files: ["./builds/HOTS/zarya/1.png"],
      });
      break;

    case "alarak":
      await message.channel.send({
        files: [
          "./builds/HOTS/alarak/1.png",
          "./builds/HOTS/alarak/2.png",
          "./builds/HOTS/alarak/3.png",
        ],
      });
      break;

    case "auriel":
      await message.channel.send({
        files: ["./builds/HOTS/auriel/1.png"],
      });
      break;

    case "guldan":
      await message.channel.send({
        files: [
          "./builds/HOTS/guldan/1.png",
          "./builds/HOTS/guldan/2.png",
          "./builds/HOTS/guldan/3.png",
        ],
      });
      break;

    case "medivh":
      await message.channel.send({
        files: ["./builds/HOTS/medivh/1.png"],
      });
      break;

    case "chromie":
      await message.channel.send({
        files: ["./builds/HOTS/chromie/1.png", "./builds/HOTS/chromie/2.png"],
      });
      break;

    case "tracer":
      await message.channel.send({
        files: ["./builds/HOTS/tracer/1.png", "./builds/HOTS/tracer/2.png"],
      });
      break;

    case "dehaka":
      await message.channel.send({
        files: [
          "./builds/HOTS/dehaka/1.png",
          "./builds/HOTS/dehaka/2.png",
          "./builds/HOTS/dehaka/3.png",
        ],
      });
      break;

    case "xul":
      await message.channel.send({
        files: [
          "./builds/HOTS/xul/1.png",
          "./builds/HOTS/xul/2.png",
          "./builds/HOTS/xul/3.png",
        ],
      });
      break;

    case "liming":
      await message.channel.send({
        files: ["./builds/HOTS/liming/1.png", "./builds/HOTS/liming/2.png"],
      });
      break;

    case "greymane":
      await message.channel.send({
        files: ["./builds/HOTS/greymane/1.png", "./builds/HOTS/greymane/2.png"],
      });
      break;

    case "lunara":
      await message.channel.send({
        files: ["./builds/HOTS/lunara/1.png"],
      });
      break;

    case "cho":
      await message.channel.send({
        files: [
          "./builds/HOTS/cho/1.png",
          "./builds/HOTS/cho/2.png",
          "./builds/HOTS/cho/3.png",
        ],
      });
      break;

    case "gall":
      await message.channel.send({
        files: ["./builds/HOTS/gall/1.png"],
      });
      break;

    case "artanis":
      await message.channel.send({
        files: [
          "./builds/HOTS/artanis/1.png",
          "./builds/HOTS/artanis/2.png",
          "./builds/HOTS/artanis/3.png",
          "./builds/HOTS/artanis/4.png",
        ],
      });
      break;

    case "rexxar":
      await message.channel.send({
        files: ["./builds/HOTS/rexxar/1.png", "./builds/HOTS/rexxar/2.png"],
      });
      break;

    case "kharazim":
      await message.channel.send({
        files: ["./builds/HOTS/kharazim/1.png", "./builds/HOTS/kharazim/2.png"],
      });
      break;

    case "leoric":
      await message.channel.send({
        files: [
          "./builds/HOTS/leoric/1.png",
          "./builds/HOTS/leoric/2.png",
          "./builds/HOTS/leoric/3.png",
        ],
      });
      break;

    case "johanna":
      await message.channel.send({
        files: ["./builds/HOTS/johanna/1.png", "./builds/HOTS/johanna/2.png"],
      });
      break;

    case "kaelthas":
      await message.channel.send({
        files: ["./builds/HOTS/kaelthas/1.png"],
      });
      break;

    case "sylvanas":
      await message.channel.send({
        files: ["./builds/HOTS/sylvanas/1.png", "./builds/HOTS/sylvanas/2.png"],
      });
      break;

    case "thrall":
      await message.channel.send({
        files: ["./builds/HOTS/thrall/1.png", "./builds/HOTS/thrall/2.png"],
      });
      break;

    case "jaina":
      await message.channel.send({
        files: ["./builds/HOTS/jaina/1.png"],
      });
      break;

    case "azmodan":
      await message.channel.send({
        files: ["./builds/HOTS/azmodan/1.png", "./builds/HOTS/azmodan/2.png"],
      });
      break;

    case "anubarak":
      await message.channel.send({
        files: [
          "./builds/HOTS/anubarak/1.png",
          "./builds/HOTS/anubarak/2.png",
          "./builds/HOTS/anubarak/3.png",
        ],
      });
      break;

    case "chen":
      await message.channel.send({
        files: [
          "./builds/HOTS/chen/1.png",
          "./builds/HOTS/chen/2.png",
          "./builds/HOTS/chen/3.png",
        ],
      });
      break;

    case "rehgar":
      await message.channel.send({
        files: [
          "./builds/HOTS/rehgar/1.png",
          "./builds/HOTS/rehgar/2.png",
          "./builds/HOTS/rehgar/3.png",
        ],
      });
      break;

    case "zagara":
      await message.channel.send({
        files: ["./builds/HOTS/zagara/1.png", "./builds/HOTS/zagara/2.png"],
      });
      break;

    case "murky":
      await message.channel.send({
        files: ["./builds/HOTS/murky/1.png", "./builds/HOTS/murky/2.png"],
      });
      break;

    case "brightwing":
      await message.channel.send({
        files: [
          "./builds/HOTS/brightwing/1.png",
          "./builds/HOTS/brightwing/2.png",
          "./builds/HOTS/brightwing/3.png",
        ],
      });
      break;

    case "tychus":
      await message.channel.send({
        files: [
          "./builds/HOTS/tychus/1.png",
          "./builds/HOTS/tychus/2.png",
          "./builds/HOTS/tychus/3.png",
        ],
      });
      break;

    case "abathur":
      await message.channel.send({
        files: [
          "./builds/HOTS/abathur/1.png",
          "./builds/HOTS/abathur/2.png",
          "./builds/HOTS/abathur/3.png",
        ],
      });
      break;

    case "arthas":
      await message.channel.send({
        files: ["./builds/HOTS/arthas/1.png"],
      });
      break;

    case "diablo":
      await message.channel.send({
        files: ["./builds/HOTS/diablo/1.png", "./builds/HOTS/diablo/2.png"],
      });
      break;

    case "kerrigan":
      await message.channel.send({
        files: [
          "./builds/HOTS/kerrigan/1.png",
          "./builds/HOTS/kerrigan/2.png",
          "./builds/HOTS/kerrigan/3.png",
        ],
      });
      break;

    case "malfurion":
      await message.channel.send({
        files: ["./builds/HOTS/malfurion/1.png"],
      });
      break;

    case "muradin":
      await message.channel.send({
        files: ["./builds/HOTS/muradin/1.png", "./builds/HOTS/muradin/2.png"],
      });
      break;

    case "nazeebo":
      await message.channel.send({
        files: ["./builds/HOTS/nazeebo/1.png", "./builds/HOTS/nazeebo/2.png"],
      });
      break;

    case "nova":
      await message.channel.send({
        files: [
          "./builds/HOTS/nova/1.png",
          "./builds/HOTS/nova/2.png",
          "./builds/HOTS/nova/3.png",
        ],
      });
      break;

    case "raynor":
      await message.channel.send({
        files: ["./builds/HOTS/raynor/1.png"],
      });
      break;

    case "sonya":
      await message.channel.send({
        files: [
          "./builds/HOTS/sonya/1.png",
          "./builds/HOTS/sonya/2.png",
          "./builds/HOTS/sonya/3.png",
        ],
      });
      break;

    case "tyrael":
      await message.channel.send({
        files: ["./builds/HOTS/tyrael/1.png", "./builds/HOTS/tyrael/2.png"],
      });
      break;

    case "tyrande":
      await message.channel.send({
        files: ["./builds/HOTS/tyrande/1.png", "./builds/HOTS/tyrande/2.png"],
      });
      break;

    case "uther":
      await message.channel.send({
        files: [
          "./builds/HOTS/uther/1.png",
          "./builds/HOTS/uther/2.png",
          "./builds/HOTS/uther/3.png",
          "./builds/HOTS/uther/4.png",
        ],
      });
      break;

    case "valla":
      await message.channel.send({
        files: [
          "./builds/HOTS/valla/1.png",
          "./builds/HOTS/valla/2.png",
          "./builds/HOTS/valla/3.png",
        ],
      });
      break;

    case "zeratul":
      await message.channel.send({
        files: [
          "./builds/HOTS/zeratul/1.png",
          "./builds/HOTS/zeratul/2.png",
          "./builds/HOTS/zeratul/3.png",
          "./builds/HOTS/zeratul/4.png",
        ],
      });
      break;

    case "etc":
    case "e-tc":
    case "et-c":
    case "e-t-c":
      await message.channel.send({
        files: ["./builds/HOTS/etc/1.png"],
      });
      break;

    case "falstad":
      await message.channel.send({
        files: [
          "./builds/HOTS/falstad/1.png",
          "./builds/HOTS/falstad/2.png",
          "./builds/HOTS/falstad/3.png",
        ],
      });
      break;

    case "gazlowe":
      await message.channel.send({
        files: ["./builds/HOTS/gazlowe/1.png", "./builds/HOTS/gazlowe/2.png"],
      });
      break;

    case "stitches":
      await message.channel.send({
        files: ["./builds/HOTS/stitches/1.png", "./builds/HOTS/stitches/2.png"],
      });
      break;

    case "tassadar":
      await message.channel.send({
        files: ["./builds/HOTS/tassadar/1.png", "./builds/HOTS/tassadar/2.png"],
      });
      break;

    case "butcher":
    case "the-butcher":
      await message.channel.send({
        files: ["./builds/HOTS/butcher/1.png", "./builds/HOTS/butcher/2.png"],
      });
      break;

    case "lili":
    case "li-li":
      await message.channel.send({
        files: [
          "./builds/HOTS/lili/1.png",
          "./builds/HOTS/lili/2.png",
          "./builds/HOTS/lili/3.png",
        ],
      });
      break;

    case "morales":
    case "lt-morales":
    case "ltmorales":
      await message.channel.send({
        files: ["./builds/HOTS/morales/1.png"],
      });
      break;

    case "hammer":
    case "sgt-hammer":
    case "st-hammer":
    case "gt-hammer":
    case "sg-hammer":
    case "sgthammer":
    case "sthammer":
    case "gthammer":
    case "sghammer":
      await message.channel.send({
        files: ["./builds/HOTS/hammer/1.png"],
      });
      break;

    case "vikings":
    case "viking":
    case "lost-vikings":
    case "lost-viking":
    case "the-lost-vikings":
    case "the-lost-viking":
    case "thelostviking":
    case "lostviking":
      await message.channel.send({
        files: ["./builds/HOTS/vikings/1.png"],
      });
      break;

    default:
      await message.channel.send("Sorry, I didn't understand...");
      break;
  }
};
