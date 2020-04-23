const Discord = require('discord.js');
const client = new Discord.Client();

exports.run = (client, message) => {
  if (message.channel.type === 'dm') {
    const ozelmesajkontrol = new Discord.RichEmbed()
    .setColor('RANDOM')
    .setTimestamp()
    .setAuthor(message.author.username, message.author.avatarURL)
    .addField('Botumuzun Davet Linki !', `[Tıkla <a:tiklaa:605726140723757077>](https://discordapp.com/oauth2/authorize?client_id=702629276695920691&scope=bot&permissions=8)`, true)
    .setThumbnail('https://cdn.clipart.email/67ae0013b5db01b6654ce772a2ad9d9c_gift-clipart-animated-gif-gift-animated-gif-transparent-free-for-_800-800.gif')
    message.author.sendEmbed(ozelmesajkontrol)}
  if (message.channel.type !== 'dm') {
	const pingozel = new Discord.RichEmbed()
    .setColor('RANDOM')
    .setTimestamp()
    .setAuthor(message.author.username, message.author.avatarURL)
    .addField('Botumuzun Davet Linki !', `[Tıkla <a:tiklaa:605726140723757077>](https://discordapp.com/oauth2/authorize?client_id=702629276695920691&scope=bot&permissions=8)`, true)
    .setThumbnail('https://cdn.clipart.email/67ae0013b5db01b6654ce772a2ad9d9c_gift-clipart-animated-gif-gift-animated-gif-transparent-free-for-_800-800.gif')
    return message.channel.sendEmbed(pingozel)}
};

exports.conf = {
  enabled: true,
  guildOnly: true,
  aliases: ['botu ekle', 'botu davet et', 'botuekle', 'invite'],
  permLevel: 0
};
exports.help = {
  name: 'davet',
  description: 'Botun davet linkini gönderir.',
  usage: 'davet'
};
