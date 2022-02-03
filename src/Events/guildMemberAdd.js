const { Discord, MessageEmbed, Client, Collection } = require('discord.js')
const settings = require('../Config/Striga')
const roller = require('../Config/RolesConfig.json')
const kanallar = require('../Config/ChannelsConfig.json')

module.exports = async (member) => {
let guvenilirlik = Date.now()-member.user.createdTimestamp < 1000*60*60*24*7;
if(guvenilirlik) {      
member.roles.add(roller.ŞüpheliRolü)    
member.guild.channels.cache.get(kanallar.Şüpheli_Log).send(new MessageEmbed().setAuthor(member.guild.name, member.guild.iconURL({dynamic:true})).setDescription(`• ${member} adlı üyenin hesabı yeni açıldığı için tüm rollerini aldım ve <@&${roller.ŞüpheliRolü}> verdim.`).setTimestamp().setColor(client.warnColor()))
}
}