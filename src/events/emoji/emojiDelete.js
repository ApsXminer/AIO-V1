const discord = require('discord.js');

module.exports = async (client, emoji) => {
    const logsChannel = await client.getLogs(emoji.guild.id);
    if (!logsChannel) return;

    client.embed({
        title: `<:BlueColorRole:1371336699694678037>・Emoji deleted`,
        desc: `An emoji has been deleted`,
        fields: [
            {
                name: `> Name`,
                value: `- ${emoji.name}`
            },
            {
                name: `> ID`,
                value: `- ${emoji.id}`
            }
        ]
    }, logsChannel).catch(() => { })
};