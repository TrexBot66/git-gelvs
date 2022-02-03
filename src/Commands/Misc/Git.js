const { MessageEmbed } = require('discord.js');

module.exports = {
conf: {name: 'git', aliases: ["gir"], help: "Belirtilen kullanıcının yanına sizi çeker.\n!git @HydroniX/ID"},
stg: async(client, message, args, config, embed, nembed, SRol, SKanal, SEmojis) => {
let uye = message.mentions.members.first() || message.guild.members.cache.get(args[0]);
if (!uye) return message.channel.send(nembed.setDescription("Lütfen bir kullanıcı belirt.")).then(x => x.delete({timeout:6500}), message.react(SEmojis.Reddet))  
if (!message.member.voice.channel || !uye.voice.channel) return message.channel.send(nembed.setDescription(`${uye} herhangi ses kanalında değil.`)).then(x => x.delete({timeout:6500}), message.react(SEmojis.Reddet))  
if (message.member.voice.channelID == uye.voice.channelID) return message.channel.send(nembed.setDescription(`${uye} ile aynı ses kanalındasın.`)).then(x => x.delete({timeout:6500}), message.react(SEmojis.Reddet))  
 if (message.member.roles.highest.position < uye.roles.highest.position) { 
const reactionFilter = (reaction, user) => {
    return ['✅'].includes(reaction.emoji.name) && user.id === uye.id;
  };
message.channel.send(`${uye}`, {embed: embed.setDescription(`${message.author} ses kanalına gelmek istiyor onaylıyor musun ?`)}).then(async msj => {
    await msj.react('✅');
    msj.awaitReactions(reactionFilter, {max: 1, time: 15000, error: ['time']}).then(c => {
    coll => coll.first().catch(err => { mesaj.delete().catch(); return; })
  let cevap = c.first();
  if (cevap) {
    message.member.voice.setChannel(uye.voice.channelID);
        msj.delete();
        message.channel.send(embed.setDescription(`${uye} adlı kullanıcı ${message.member} kullanıcıya gelmesi için izin verdi. ${SEmojis.Onayla}`)).then(x => x.delete({timeout:15000}), message.react(SEmojis.Onayla))  
  } else {
  msj.delete();
  message.channel.send(embed.setDescription(`${uye} herhangi bir dönüş yapmadı.`)).then(x => x.delete({timeout:6500}), message.react(SEmojis.Reddet))  
  };	
    });
  });
  } else {
if (message.member.roles.cache.has(SRol.TasimaYetkilisi) || message.member.hasPermission('ADMINISTRATOR')) {
  await message.member.voice.setChannel(uye.voice.channelID);
  message.channel.send(embed.setDescription(`${message.member} adlı üye ${uye} kullanıcısının odasına gitti. ${SEmojis.Onayla}`)).then(x => x.delete({timeout:15000}), message.react(SEmojis.Onayla))  
} else {
  const reactionFilter = (reaction, user) => {
    return ['✅'].includes(reaction.emoji.name) && user.id === uye.id;
  };
};
};

}};
