exports.run = async (client, message, args, level) => { // eslint-disable-line no-unused-vars
  const msg = await message.channel.send("...Rock, Paper, Scissors, Lizard, Spock!");

  if(client.isChaos){
    return msg.edit(`Sorry, can’t use that command, someone destroyed it not long ago. You’ll need to wait a little more until we can put back the three-headed bunnies in their cages.`);
  }

  if(!client.isChaos) {
    client.chaos();

    if(client.isChaos) {
      message.channel.send(client.chaos());
    }
  }

  var resultPlayerA;
  var resultPlayerB;
  var winner = "whatever, it's a tie.";

  // Need to get a random choice for each participant
  var choices = ['Rock', 'Paper', 'Scissors', 'Lizard', 'Spock'];
  var numberA = client.getRandomInt(0,4);
  var numberB = client.getRandomInt(0,4);

  resultPlayerA = choices[numberA];
  resultPlayerB = choices[numberB];
  // Then, need to check who's winning.

  // Rules
  /*
  Rock crushes Lizard
  Rock crushes Scissors

  Paper covers Rock
  Paper disproves Spock
  
  Scissors cuts Paper
  Scissors decapitates Lizard

  Lizard poisons Spock
  Lizard eats Paper

  Spock smashes Scissors
  Spock vaporizes Rock
  */

  switch(resultPlayerA) {
   case "Rock":
      switch(resultPlayerB) {
        case "Paper":
            winner = "Paper covers Rock";
            break;
        case "Scissors":
            winner = "Rock crushes Scissors";
            break;
        case "Lizard":
            winner = "Rock crushes Lizard";
            break;
        case "Spock":
            winner = "Spock vaporizes Rock";
            break;
        default:
            // do nothing. 
      }
        break;
    case "Paper":
      switch(resultPlayerB) {
        case "Rock":
            winner = "Paper covers Rock";
            break;
        case "Scissors":
            winner = "Scissors cuts Paper";
            break;
        case "Lizard":
            winner = "Lizard eats Paper";
            break;
        case "Spock":
            winner = "Paper disproves Spock";
            break;
        default:
            // do nothing. 
      } 
        break;
    case "Scissors":
      switch(resultPlayerB) {
        case "Rock":
            winner = "Rock crushes Scissors";
            break;
        case "Paper":
            winner = "Scissors cuts Paper";
            break;
        case "Lizard":
            winner = "Scissors decapitates Lizard";
            break;
        case "Spock":
            winner = "Spock smashes Scissors";
            break;
        default:
            // do nothing. 
      }
        break;
    case "Lizard":
      switch(resultPlayerB) {
        case "Rock":
            winner = "Rock crushes Lizard";
            break;
        case "Paper":
            winner = "Lizard eats Paper";
            break;
        case "Scissors":
            winner = "Scissors decapitates Lizard";
            break;
        case "Spock":
            winner = "Lizard poisons Spock";
            break;
        default:
            // do nothing. 
      }
        break;
    case "Spock":
      switch(resultPlayerB) {
        case "Rock":
            winner = "Spock vaporizes Rock";
            break;
        case "Paper":
            winner = "Paper disproves Spock";
            break;
        case "Scissors":
            winner = "Spock smashes Scissors";
            break;
        case "Lizard":
            winner = "Lizard poisons Spock";
            break;
        default:
            // do nothing. 
      }
        break;
    default:
        // do nothing. 
  }

  // Someday would be fun to keep track of the scores. 

  msg.edit(`${message.author.username} got ${resultPlayerA} and ${args} got ${resultPlayerB}. ${winner}`);
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [],
  permLevel: "User"
};

exports.help = {
  name: "play",
  category: "Miscelaneous",
  description: "Got into an argument with your friend? Settle this with Rock Paper Scissors Lizard Spock.",
  usage: "Type !play [name of your friend] to play with your friend!"
};
