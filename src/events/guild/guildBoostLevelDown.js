const Discord = require('discord.js');

module.exports = async (client, guild, oldLevel, newLevel) => {
    const logsChannel = await client.getLogs(guild.id);
    if (!logsChannel) return;

    client.embed({
        title: `<:uparrows:1371335967448891444>・New boost level`,
        desc: `This server has returned to a new boost level`,
        fields: [
            {
                name: `> Old level`,
                value: `- ${oldLevel}`
            },
            {
                name: `> New level`,
                value: `- ${newLevel}`
            },
            {
                name: `> Timestamp`,
                value: `- <t:${Math.floor(Date.now() / 1000)}:R>`
            }
        ]
    }, logsChannel).catch(() => { })
};