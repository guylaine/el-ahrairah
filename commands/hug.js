exports.run = async (client, message, args, level) => { // eslint-disable-line no-unused-vars
  const msg = await message.channel.send("...loading your hug");

  if(client.isChaos){
    return msg.edit(`Sorry, can’t use that command, someone destroyed it not long ago. You’ll need to wait a little more until we can put back the three-headed bunnies in their cages.`);
  }

  if(!client.isChaos) {
    client.chaos();

    if(client.isChaos) {
      message.channel.send(client.chaos());
    }
  }

  msg.edit(`${message.author.username} is hugging ${args}.`);
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [],
  permLevel: "User"
};

exports.help = {
  name: "hug",
  category: "Miscelaneous",
  description: "Give a hug to someone or... something. We don't judge. I promise.",
  usage: "hug"
};
