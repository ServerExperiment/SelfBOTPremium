const Discord = require('discord.js');
const client = new Discord.Client();
//const client2 = new Discord.Client();

//Bot 1
client.on('ready', () => {
    console.log(`Conectado como: ${client.user.tag} (:`);
});
//defina a frase em channel.send "`frase ${member}`"
client.on('guildMemberAdd', member => {
    const channel = member.guild.channels.find(ch => ch.name === 'nomedocanal');
    if (!channel) return;
    channel.send(`Bem vindo ${member}`);
});
// comando=resposta editar somente o comando e a frase..
client.on('message',message => {
    if (message.content.startsWith('comando disparo')){
        message.channel.send('frase disparada');
    }
});

client.on('message',message => {
    if (message.content.startsWith('comando')){
        message.channel.send('frase');
    }
});

client.on('message',message => {
    if (message.content.startsWith('comando')){
        message.channel.send('frase');
    }
});
// não mexer aqui comando avatar trocar somente o nome "avatar" caso preciso
    client.on('message', message => {
  // If the message is "what is my avatar"
  if (message.content === 'avatar') {
    // Send the user's avatar URL
    message.reply(message.author.avatarURL);
  }
  
});
    client.on('ready', () => {
  setInterval(function(){
    client.channels.get("536288482021212200").send("spamming há");
  //}, 1000);
  }, 10000); //para um delay maior.
});
//client2.on('ready', () => {
    //console.log(`Conectado como: ${client2.user.tag} (:`);
//});

//Bot 3  
//client2.on('message', msg => {
    //if (msg.channel.id == 439122681720340511){
        //msg.react(msg.guild.emojis.get('492135364203642900'));
    //}
//});

//Auth Bots
client.login('token');
