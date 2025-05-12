const Discord = require('discord.js');
const pop = require("popcat-wrapper");

module.exports = async (client, interaction, args) => {
    await interaction.deferReply({ fetchReply: true });

    const name = interaction.options.getString('name');

    const s = await pop.steam(name).catch(e => {
        return client.errNormal({
            error: "Application not found!",
            type: 'editreply'
        }, interaction)
    });

    await client.embed({
        title: `<:games_blue:1371335431836405872> ・${s.name}`,
        thumbnail: s.thumbnail,
        fields: [
            {
                name: `<:blue_chataILD:1371180174833483876>┇Name`,
                value: `${s.name}`,
                inline: true,
            },
            {
                name: `📃┇Capital`,
                value: `${s.description}`,
                inline: false,
            },
            {
                name: "<:blue__comp:1371330577537564754>┇Developers",
                value: `${s.developers.join(", ")}`,
                inline: true,
            },
            {
                name: "☁┇Publishers",
                value: `${s.publishers.join(", ")}`,
                inline: true,
            },
            {
                name: "🪙┇Price",
                value: `${s.price}`,
                inline: true,
            }
        ],
        type: 'editreply'
    }, interaction)
}

 