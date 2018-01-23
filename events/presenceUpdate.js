// This event executes when the presence of a member change!

module.exports = (client, member) => {
 
  // If the game is null, don't proceed (don't send a streaming notif.)
  if (member.user.presence.game == null || (member.user.presence.game.streaming == false || member.user.presence.game.streaming == null)) return;

  // need to figure out how to prevent the bot to send multiple streaming messages.

  // game url return a null. Need to figure out why. 
  const streamMessage = `OYÉ! OYÉ! @everyone ! ${member.user.username} started streaming ${member.user.presence.game.name}. Go check it out! ${member.user.presence.game.url}`;

  member.guild.channels.find("name", "bot-test").send(streamMessage).catch(console.error);
};
