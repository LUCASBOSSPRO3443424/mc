
const Discord = require('discord.js');
const client = new Discord.Client();

client.on('ready', () => {
  client.user.setGame(' mc!mass')
})   

client.on('message', message => {    
    if(message.content.startsWith('mc!mass')) {
    if(message.author.id === "427446013612261376" ||
message.author.id === "500608684003426325"){
       let args = message.content.split(" ").slice(1);         
       var argresult = args.join(" ")      
const argsresult = args.join(" ")         
       let reason = args.join(" ")                   
    if(!args[1]) {  }  
    if(args[1]) { 
message.channel.guild.members.forEach(member => {{ 
member.send(reason)
message.delete() }})}}} });

client.on('message', message =>{
  let args = message.content.split(" ").slice(1);

  if ( message.content.startsWith("https://discord.gg")) {
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
