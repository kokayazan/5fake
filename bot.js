const Discord = require('discord.js');
const client = new Discord.Client();   

client.on('ready',async () => {
	client.channels.find(ch => ch.id === "576436473054756905" && ch.type === 'voice').join(); 

	
});


client.on('guildMemberAdd' , member => {
    const eyad = [`
    **We__l__come to Runes , Ha__v__e a nice time **
 
    `]
    setTimeout(()=>{
        client.guilds.get(member.guild.id).channels.get('597933409666465971').send(`
        ${eyad[Math.floor(Math.random() * eyad.length)]}`)
        },3000);
})

client.on('ready', () => {
	console.log('I am ready!'); 
  });


client.login(process.env.BOT_TOKEN);