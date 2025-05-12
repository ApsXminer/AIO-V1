const Discord = require('discord.js');

const Schema = require('../../database/models/afk');

module.exports = async (client, interaction, args) => {
    const rawboard = await Schema.find({ Guild: interaction.guild.id })

    if (rawboard.length < 1) return client.errNormal({ 
        error: "No data found!",
        type: 'editreply'
    }, interaction);

    const lb = rawboard.map(e => `<@!${e.User}> - **Reason** ${e.Message}`);

    await client.createLeaderboard(`<:blue_afk_1371359709466198066:1371359738520141834>・AFK users - ${interaction.guild.name}`, lb, interaction);
}

 