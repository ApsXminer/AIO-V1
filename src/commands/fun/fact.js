const Discord = require('discord.js');
const request = require('request');

module.exports = async (client, interaction, args) => {

    var url = 'https://uselessfacts.jsph.pl/random.json?language=en'


    request(url, function (err, response, body) {
        fact = JSON.parse(body).text;

        client.embed({
            title: `<:Laughing_Blueemoji:1371335380951109744> ・Fact`,
            desc: fact,
            type: 'editreply',
        }, interaction);
    })
}

 