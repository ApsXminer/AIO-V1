const Discord = require('discord.js');
const fetch = require("node-fetch");

module.exports = async (client, interaction, args) => {

    fetch(
        `https://some-random-api.com/facts/bird`
    )
        .then((res) => res.json()).catch({})
        .then(async (json) => {
            client.embed({
                title: `<:Suggestion:1371337422754943016> ・Random bird fact`,
                desc: json.fact,
                type: 'editreply',
            }, interaction);
        }).catch({})
}

 