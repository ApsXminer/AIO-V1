const Discord = require('discord.js');

const Schema = require("../../database/models/stats");

module.exports = async (client, guild) => {
    try {
        var channelName = await client.getTemplate(guild);
        channelName = channelName.replace(`{emoji}`, "<:moderation:1371337297857089637>")
        channelName = channelName.replace(`{name}`, `Roles: ${guild.roles.cache.size}`)

        const data = await Schema.findOne({ Guild: guild.id });
        const channel = guild.channels.cache.get(data.Roles)
        await channel.setName(channelName)
    }
    catch { }
};