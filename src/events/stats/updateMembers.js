const Discord = require('discord.js');

const Schema = require("../../database/models/stats");

module.exports = async (client, guild) => {
    try {
        var channelName = await client.getTemplate(guild);
        channelName = channelName.replace(`{emoji}`, "<:CS_Profile:1371336333687259231>")
        channelName = channelName.replace(`{name}`, `Members: ${guild.memberCount.toLocaleString()}`)

        const data = await Schema.findOne({ Guild: guild.id });
        const channel = guild.channels.cache.get(data.Members)
        await channel.setName(channelName)
    }
    catch { }
};