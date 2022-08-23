const Discord = require('discord.js');
var durum;
exports.run = (client, message, params) => {
    let kullanıcı = message.mentions.users.first() || message.author;
     const aktifdegil = new Discord.MessageEmbed()
     .setDescription(`${kullanıcı} online değil.`)
    .setColor('#00fe35')
    .setFooter('Creaeted By Buuenx')
  if (kullanıcı.presence.status === "offline") return message.channel.send(aktifdegil)
  if (kullanıcı.presence.clientStatus.mobile) {
    durum = "📱 Phone";
  }
  if (kullanıcı.presence.clientStatus.desktop) {
    durum = "💻 PC";
  }
  if (kullanıcı.presence.clientStatus.web) {
    durum = "🌐 Web Browser";
  }
  if (message.channel.type !== "group") {
      const bilgi = new Discord.MessageEmbed()
      .addField(' Buuenx',`**Username:** ${kullanıcı}\n**İnfo:** ${durum}`)
      .setColor('#00fe35')
      .setFooter('Created By Buuenx/mstaer')
      return message.channel.send(bilgi)
  }
};
exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [],
  permLevel: 0
};
exports.help = {
  name: 'bilgi',
  description: 'bilgi',
  usage: 'bilgi'
};