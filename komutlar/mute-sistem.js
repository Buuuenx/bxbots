const Discord = require("discord.js"),
  db = require("quick.db");

exports.run = async (bot, message, args, tools) => {

if(db.fetch(`bakimmod`)) {

  if(message.author.id !== "704505210738835486") return message.channel.send('```Şuanlık Discord Botumuz Bakımdadır Lütfen Bir Kaç Saat Sonra Tekrar Deneyiniz Veya Buuenx.jpg#1401 Bana Ulaşın```')

}


  let prefix = (await db.fetch(`prefix_${message.guild.id}`)) || "*";
  const embed = new Discord.MessageEmbed()
  
  .setAuthor(`Komutlar`, message.author.avatarURL)
    .setDescription(`Prefix: **${prefix}**`)

.setImage("https://share.creavite.co/JmBr3omvS41LKVdd.gif") 

  .addField("Buuenx Mute Sistemi (3)", `
Sadece premium üyelerimizin kullanabileceği komutlar;
\`*mute-rol\` \`*mute\` \`*mute-rol oluştur\`
`)

 .addField("Bağlantılar", `
[Davet Et](https://discord.com/api/oauth2/authorize?client_id=944347323809558632&permissions=8&scope=bot) -- [Created]() -- [By]() -- [Buuenx]() 
`)
 

    .setColor("RANDOM")
    .setFooter(`Buuenx © | Tüm hakları saklıdır.`)
  .setTimestamp()     
  message.channel.send(embed);
};
exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ["mute-bilgi","mte-y","mute-help","mute-yardım"],
  permLevel: 0
};

exports.help = {
  name: "mute-sistem"
};
