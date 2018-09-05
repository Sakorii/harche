const Discord = require('discord.js')
const bot = new Discord.Client ();

var prefix = ("!")

bot.on('Prêt', function() {
    bot.user.setGame("En préparation..");
    console.log("Connecté !");
});

bot.login("Met ton token (:");


bot.on('message', message => {
    if(message.content === prefix + "help"){
        message.channel.sendMessage("Liste des commandes : \n -!help");
    }

    if (message.content === "Salut"){
        message.reply("Wesh (:");
        console.log("Commande Salut effectué");
    }
});
