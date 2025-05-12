const Discord = require('discord.js');

module.exports = async (client, interaction, args) => {
    const message = interaction.options.getString('message');
    const messageId = interaction.options.getString('id');

    const editMessage = await interaction.channel.messages.fetch(messageId);

    client.embed({ 
        title: `<:blue_afk_1371359709466198066:1371359738520141834>・Announcement!`, 
        desc: message,
        type: 'edit'
    }, editMessage);

    client.succNormal({
        text: `Announcement has been edit successfully!`,
        type: 'ephemeraledit'
    }, interaction);
}

 