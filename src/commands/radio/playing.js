const Discord = require('discord.js');

module.exports = async (client, interaction, args) => {
    client.embed({
        title: `<:Radio:1371336441858228234>・Radio information`,
        desc: `All info about the radio in this guild`,
        fields: [{
            name: "<:CS_Profile:1371336333687259231>┆Channel Listeners",
            value: `${interaction.member.voice.channel.members.size} listeners`,
            inline: true
        },
        {
            name: "📺┆Connected channel",
            value: `${interaction.member.voice.channel} (${interaction.member.voice.channel.name})`,
            inline: true
        },
        {
            name: "<:Music_blue:1371336544626933790>┆Radio Station",
            value: `[Radio 538](https://www.538.nl/)`,
            inline: true
        },
        ],
       type: 'editreply'
    }, interaction)
}

 