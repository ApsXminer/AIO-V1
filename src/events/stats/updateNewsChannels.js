const Discord = require('discord.js');

const Schema = require("../../database/models/stats");

module.exports = async (client, channel, guild) => {
    if (channel.type ==  Discord.ChannelType.GuildAnnouncement) {
        try {
            var channelName = await client.getTemplate(guild);
            channelName = channelName.replace(`{emoji}`, "<:blue_afk_1371359709466198066:1371359738520141834>")
            channelName = channelName.replace(`{name}`, `News Channels: ${guild.channels.cache.filter(channel => channel.type ===  Discord.ChannelType.GuildAnnouncement).size || 0}`)

            const data = await Schema.findOne({ Guild: guild.id });
            const changeChannel = guild.channels.cache.get(data.NewsChannels)
            await changeChannel.setName(channelName)
        }
        catch { }
    }
};