// This event executes when the presence of a member change!

module.exports = (client, member) => {

  // If the game is null, not being streamed or is the same person as before, don't proceed (don't send a streaming notif.)
  if(!member.presence.equals(member.user.presence)){
  	if (member.user.presence.game == null) {
		return;
  	}

  	if(member.user.presence.game.type != 1) {
		return;
	}
  }

  const streamMessage = `OYÉ! OYÉ! @everyone ! ${member.user.username} started streaming ${member.user.presence.game.name}. Go check it out! ${member.user.presence.game.url}`;

  member.guild.channels.find("name", "bot-test").send(streamMessage).catch(console.error);
};
