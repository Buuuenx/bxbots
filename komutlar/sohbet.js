const Discord = require("discord.js");
const db = require("quick.db");


exports.run = async (client, message, args) => {

if(db.fetch(`bakimmod`)) {

  if(message.author.id !== "704505210738835486") return message.channel.send('```Şuanlık Discord Botumuz Bakımdadır Lütfen Bir Kaç Saat Sonra Tekrar Deneyiniz Veya Buuenx.jpg#1401 Bana Ulaşın```')

}

const eğlence = new Discord.MessageEmbed()
.setColor("RANDOM")
.setTitle("<a:maple_leaf:742698148329291826> » Buuenx Sohbet Sistemi <a:maple_leaf:742698148329291826>")
 .setTimestamp()
.setDescription(" **!sohbet-aç** = Sohbeti açarsınız\n**!sohbet-kapat** = Sohbeti Kapatırsınız\n")
message.channel.send(eğlence)
}

exports.conf = {
  enabled: true, 
  guildOnly: false, 
   aliases: ["s-y"],
  permLevel: `Yetki gerekmiyor.` 
};

exports.help = {
  name: 'sohbet',
  category: 'kullanıcı',
  description: 'Yardım Menüsü.',
   usage:'!havadurumu'
}