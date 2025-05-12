const Discord = require('discord.js');

module.exports = async (client, interaction, args) => {
    const message = interaction.options.getString('message');
    const channel = interaction.options.getChannel('channel');

    client.embed({ 
        title: `<:blue_afk_1371359709466198066:1371359738520141834>・Announcement!`, 
        desc: message 
    }, channel);

    client.succNormal({
        text: `Announcement has been sent successfully!`,
        fields: [
            {
                name: `📘┆Channel`,
                value: `${channel} (${channel.name})`
            }
        ],
        type: 'editreply'
    }, interaction);
}

 