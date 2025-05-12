const Discord = require('discord.js');
const pop = require("popcat-wrapper");

module.exports = async (client, interaction, args) => {

    const song = interaction.options.getString('song');

    const r = await pop.itunes(song).catch(e => {
        return client.errNormal({ 
            error: "Song not found!",
            type: 'editreply'
        }, interaction)
    });

    client.embed({
        title: `<:Music_blue:1371336544626933790>・${r.name}`,
        thumbnail: r.thumbnail,
        url: r.url,
        fields: [
            {
                name: "<:blue_chataILD:1371180174833483876>┇Name",
                value: `${r.name}`,
                inline: true,
            },
            {
                name: "🎤┇Artist",
                value: `${r.artist}`,
                inline: true,
            },
            {
                name: "📁┇Album",
                value: `${r.album}`,
                inline: true,
            },
            {
                name: "🎼┇Length",
                value: `${r.length}`,
                inline: true,
            },
            {
                name: "🏷️┇Genre",
                value: `${r.genre}`,
                inline: true,
            },
            {
                name: "💵┇Price",
                value: `${r.price}`,
                inline: true,
            },
            {
                name: "⏰┇Release Date",
                value: `<t:${Math.round(new Date(r.release_date).getTime() / 1000)}>`,
                inline: true,
            },
        ],
        type: 'editreply'
    }, interaction)
}

 