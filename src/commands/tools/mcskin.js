const Discord = require('discord.js');

module.exports = async (client, interaction, args) => {

    const name = interaction.options.getString('name');

    if (name == null) return client.errUsage({ usage: "mcskin [player name]",type: 'editreply' }, interaction)

    client.embed({
        title: `<:games_blue:1371335431836405872> ・Skin of ${name}`,
        image: `https://minotar.net/armor/body/${name}/700.png`,
        type: 'editreply'
    }, interaction)

}

 