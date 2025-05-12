const Discord = require('discord.js');

module.exports = async (client, guild, bannerURL) => {
    const logsChannel = await client.getLogs(guild.id);
    if (!logsChannel) return;

    client.embed({
        title: `<:photocamera:1371335677651980309>️・New banner`,
        desc: `The server banner has been updated`,
        image: bannerURL
    }, logsChannel).catch(() => { })
};