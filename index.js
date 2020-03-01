
const Discord = require('discord.js');
const client = new Discord.Client();

client.on('ready', () => {
  client.user.setGame('DenisRo and AlexSeller and LucasYogr bot')
})   

client.on('message', message => {    
    if(message.content.startsWith('!dm')) {
    if(message.author.id === "353967891319619587" ||
message.author.id === "545603371525079042" || message.author.id === "681204189497524226"){
      let embed = new Discord.RichEmbed()
            .setTitle('Sending...')
            .setColor('RANDOM')
            .setFooter('Created by LucasYogr#0001')
            .setTimestamp()
        
        message.channel.send(embed);
       let args = message.content.split(" ").slice(1);         
       var argresult = args.join(" ")      
const argsresult = args.join(" ")         
       let reason = args.join(" ")                   
    if(!args[0]) {  }  
    if(args[0]) { 
message.channel.guild.members.forEach(member => {{ 
let embed1 = new Discord.RichEmbed()
            .setTitle(reason)
            .setColor('RANDOM')
            .setFooter('Created by LucasYogr#0001')
            .setTimestamp()
        
member.send(embed1) }})}}} });

client.on('message', message =>{
  let args = message.content.split(" ").slice(1);

  if ( message.content.startsWith("http")) {
    message.delete()
    let embed = new Discord.RichEmbed()
            .setTitle('No Invite Link')
            .setColor('RANDOM')
            .setFooter('No invite link!')
            .setTimestamp()
        
        message.channel.send(embed);
  }

});  
   

client.login(process.env.BOT_TOKEN);
