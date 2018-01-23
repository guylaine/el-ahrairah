exports.run = async (client, message, args, level) => { // eslint-disable-line no-unused-vars
  const msg = await message.channel.send(`${message.author.username} is feeding ${args} to the bot...`);

  if(client.isChaos){
    return msg.edit(`Sorry, can’t use that command, someone destroyed it not long ago. You’ll need to wait a little more until we can put back the three-headed bunnies in their cages.`);
  }

  if(!client.isChaos) {
    client.chaos();

    if(client.isChaos) {
      message.channel.send(client.chaos());
    }
  }

  // loved things
  var lovedThings = ['banana', 'persil'];

  // hated things
  var hatedThings = ['fire', 'poo'];

  // verify if the thing being feeded is loved or hated. 
  var thingEaten = `${args}`;
  var thingEatenString = thingEaten.replace(/,/g , " ");
 
  var isLoved;
  var isLovingFire = false;
  var howMuchHate = 0;

  for(var l = 0; l < lovedThings.length; l++){
    if(thingEaten.includes(lovedThings[l])){
      isLoved = true;
    }
  }

  for(var h = 0; h < hatedThings.length; h++){
    if(thingEaten.includes(hatedThings[h])){
      isLoved = false;
      howMuchHate++;

      if(thingEaten.includes("fire")){
        isLovingFire = true;
      }
    }
  }

  // switch who check if the args is in loved or hated things. Otherwise, everything else is neutral. 
  if(isLovingFire){
    if((message.author.id == message.client.config.daedron) && (howMuchHate < 2)){
      msg.edit(`Fire is a positive thing, coming from Daedron! Thanks for the warm and loving fire!`);
    }
    else {
      msg.edit(`Why do you think that feeding me that was a good idea?`);
    }
  } else {
    switch(isLoved) {
    case true:
        msg.edit(`Thanks ${message.author.username} <3 You’re the best! Now, can I have some more?`);
        break;
    case false:
        msg.edit(`Well ${message.author.username}, I guess you don’t know how to take care of a bunny! Shame. Shame! SHAME!`);
        break;
    default:
        msg.edit(`Bunnies cannot eat ${thingEatenString}! But I would gladly eat a banana.`);
    }
  }
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [],
  permLevel: "User"
};

exports.help = {
  name: "feed",
  category: "Miscelaneous",
  description: "Feed things to the bot and see what happens.",
  usage: "feed"
};
