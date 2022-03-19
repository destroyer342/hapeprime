// ID : 954134777060016178
// Invite_link: https://discord.com/oauth2/authorize?client_id=954134777060016178&scope=bot&permissions=1
require("dotenv").config();
const axios = require('axios');
const discord = require('discord.js')
let hapedata = [];
const client = new discord.Client({
    intents:["GUILDS","GUILD_MESSAGES", "DIRECT_MESSAGES"], partials:["CHANNEL", "GUILD_MEMBER", "MESSAGE", "REACTION", "USER"]
});



client.on("ready", (clientparams) => {
    console.log("this bot is now online " +client.user.tag)
    //client.user.setPresence({status: "dnd", activities: [{type: 'WATCHING', name: `⛽:  gweei`}] });
    //client.user.setActivity(`dwjkahdjhwajkdwajdaw`)
    getStats();
})

const getStats = async () => {
    try {
        let req = `https://api.opensea.io/api/v1/collection/hapeprime/stats?format=json`;
        const res = await axios.get(req);
        hapedata = res.data;
        client.user.setActivity(`
        \r\nFloor Price -> ${hapedata.stats.floor_price} Ξ`,{type: 'WATCHING'},`sadasd`);
    } catch (err) {
        console.log(err);
    }
}
const getData = async () => {
    try {
        let req = `https://api.opensea.io/api/v1/collection/hapeprime/stats?format=json`;
        const res = await axios.get(req);
        hapestats = res.data;
        return hapestats;
    } catch (err) {
        console.log(err);
    }
}
const showData = () => {
    const embed = new discord.MessageEmbed().setTitle('Hape Prime Data 📊');
   // const embed = new MessageEmbed()
    
    
    embed.setColor('#ff0000');
    embed.setImage('https://lh3.googleusercontent.com/DpDD3ZCphqFBmqKGVgoNdCucMFKJid-p1Kl6jDjMkeDzDdfc7RGC761CahDXloVpqW2I_DA6m0xP54co6odWBYWo1T7H-BZx1MmfdA=w600');

    embed.addFields({ name: 'Floor Price', value: `${hapedata.stats.floor_price} Ξ` },
                    { name: 'Total Supply', value: `${hapedata.stats.total_supply}` },
                    { name: '# of Owners', value: `${hapedata.stats.num_owners}` },
                    { name: '24 Hours Volume', value: `${hapedata.stats.one_day_volume}` },
                    { name: '24 Hours Sales', value: `${hapedata.stats.one_day_sales}` },
                    { name: '7 Days Volume', value: `${hapedata.stats.seven_day_volume}` },
                    { name: '7 Days Sales', value: `${hapedata.stats.seven_day_sales}` },
                    { name: '30 Days Volume', value: `${hapedata.stats.thirty_day_volume}` },
                    { name: '30 Days Sales', value: `${hapedata.stats.thirty_day_sales}` },
                    { name: 'Total Volume', value: `${hapedata.stats.total_volume}` },
                    { name: 'Total Sales', value: `${hapedata.stats.total_sales}` },
                    { name: 'Market Cap', value: `${hapedata.stats.market_cap}` }
);
    return [embed];

}
client.on("messageCreate", (message) => {
if (message.author.bot == false){
  
        if(message.content==='!showdata'){
        message.channel.send({ embeds: showData()});
    }
  
    // const embed = new discord.MessageEmbed()
    // .setColor("RANDOM")
    // .setDescription(`according to my calculations, you are funny😂`)
    // message.channel.send({ embeds: [embed] });
    //  message.reply(`${message.channel.id}`)
    // console.log(`${message.content}`)
   // client.user.setActivity(`hay nako hay nako`);
    //client.user.setStatus('invisible')
}
})
client.login(process.env.discordToken)
//client.login(process.env.discordToken1)