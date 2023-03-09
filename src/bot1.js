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

client.on('ready',()=>{
  console.log(`${client.user.tag} has logged in.`);
});

client.login(process.env.DISCORDJS_BOT_TOKEN1);
