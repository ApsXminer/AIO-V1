const Discord = require('discord.js');
const fetch = require("node-fetch");

module.exports = async (client, interaction, args) => {

    const word = interaction.options.getString('word');

    fetch(`http://www.anagramica.com/all/${encodeURIComponent(word)}`).then((res) => res.json()).catch({})
        .then(async (json) => {
            let content = ``;
            if (!json.all[0]) return client.errNormal({ error: "No word found!", type: 'editreply' }, interaction)

            json.all.forEach(i => {
                content += `${i}\n`;
            });

            client.embed({
                title: `<:blue_question_mark:1371179156573782128> ・Anagram`,
                desc: `I formed a word with the given letters`,
                fields: [
                    {
                        name: `<:blue_chataILD:1371180174833483876>┇Word(s)`,
                        value: content
                    }
                ],
                type: 'editreply'
            }, interaction)
        }).catch({})

}

 