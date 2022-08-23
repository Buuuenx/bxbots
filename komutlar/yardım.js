const Discord = require('discord.js');
const db = require('quick.db');

exports.run = async (client, message, args) => { 

if(db.fetch(`bakimmod`)) {

  if(message.author.id !== "683752128644251660") return message.channel.send('```Şuanlık Discord Botumuz Bakımdadır Lütfen Bir Kaç Saat Sonra Tekrar Deneyiniz Veya Buuenx.jpg#1401 Bana Ulaşın```')

}

  let prefix = (await db.fetch(`prefix_${message.guild.id}`)) || "!";
  const embed = new Discord.MessageEmbed()

let yardım = new Discord.MessageEmbed()  
.setColor('BLUE')
.addField('Buuenx Yardım Menüsü',`
===================================
🔵 ** *rol-yetkili-rol** : Belirlediğiniz rolü verebilecek yetkiliyi seçersiniz.
🔵 ** *vrol** : Vericeğiniz Rolü ayarlarsınız.
🔵 ** *rol-log** : Log mesajın gitceği yer seçilir. 
🔵 ** *rol** : !rol @kişi  Yazarak rolü verirsiniz. 
===========MODERASYON============
🔵 ** *ban** : İdsini Yazdığınız Kişiyi Banlar
🔵 ** *bansay** : Sunucuda Banlanan Kişileri Sayar
🔵 ** *mod-log** : Mod log kanalı ayarlar
🔵 ** *Sil** : Mesaj Silersiniz (Max 300)
🔵 ** *sohbet-aç/kapat** : Sohbeti açarsınız veya kapatırsınız
🔵 ** *bilgi** : Kişinin nerden bağlandığını görürsünüz
🔵 ** *patlat** : Kanalı Silip Yeniden Kurar
🔵 ** *davet** : Botun Linklerini Görürsünüz
🔵 ** *unbanall** : Sunucudaki Herkesin Banını Açar
🔵 ** *otorol #kanal @rol ** : Otorol Ayarlarsınız
===================================
`)
  .addField("**» Davet Linki**", " [Botu Davet Et](https://discord.com/api/oauth2/authorize?client_id=980527101008552007&permissions=8&scope=bot)", )
    .setImage("https://share.creavite.co/fZCsyS0A0SEB9Ruz.gif")
.setFooter(`${message.author.tag} Tarafından İstendi.`, message.author.avatarURL())
.setThumbnail("https://cdn.discordapp.com/attachments/951861067221450782/983049377826373662/SILME.png")
 message.channel.send(yardım) 
  };

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ['help'],
  permLevel: 0
};

exports.help = {
  name: "yardım",
  category: "abone-yardım",
    description: "Eğlence Komutları Gösterir."
};