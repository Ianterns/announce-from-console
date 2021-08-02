const { MessageEmbed } = require('discord.js')

let y = process.openStdin();
y.addListener("data", (res) => {
  let x = res.toString().trim().split(/ +/g); 
  var guilds = client.guilds.cache
  try {
    const embed = new MessageEmbed()
    .setDescription(`**Announcment**
    \n
    \`${x.join(' ')}\``)
    guilds.forEach(guild =>{
        
        guild.channels.cache.find(c => c.type === 'text').send(embed)

    });
  } catch (err) {
      console.log(err)
  }
  
});
