require('dotenv').config();

// used object destructuring here
const { Client, GatewayIntentBits} = require('discord.js');

// client object is an instance of Client class
const client = new Client({
  intents: [
		GatewayIntentBits.Guilds,
		GatewayIntentBits.GuildMessages,
		GatewayIntentBits.MessageContent,
		GatewayIntentBits.GuildMembers,
	],
});

const PREFIX = "$";


client.on('ready',()=>{
  console.log(`${client.user.tag} has logged in.`);
});

client.on('messageCreate',(message) => {
  if(message.author.bot === true) return;
  if(message.content.startsWith(PREFIX)){
    const [CMD_NAME, ...args]= message.content
      .trim()
      .substring(PREFIX.length)
      .split(/\s+/);
    if(CMD_NAME === 'kick'){
      if(args.length === 0) return message.reply('Please provide id');
      const member = message.guild.members.cache.get(args[0]);

      if(member){
        member.kick();
      }else{
        message.channel.send('That member not found');
      }

      console.log(member);
    }
  }
});

client.login(process.env.DISCORDJS_BOT_TOKEN);
