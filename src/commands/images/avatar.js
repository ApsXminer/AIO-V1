
module.exports = async (client, interaction, args) => {
  const user = interaction.options.getUser('user') || interaction.user;

  client.embed({
    title: `<:photocamera:1371335677651980309>・User avatar`,
    image: user.displayAvatarURL({ dynamic: false, size: 1024 }),
    type: 'editreply'
  }, interaction)
}

 