const Discord = require('discord.js');

const forHumans = require("../../assets/utils/forhumans.js");

module.exports = async (client, interaction, args) => {
    const player = client.player.players.get(interaction.guild.id);

    const channel = interaction.member.voice.channel;
    if (!channel) return client.errNormal({
        error: `You're not in a voice channel!`,
        type: 'editreply'
    }, interaction);

    if (player && (channel.id !== player?.voiceChannel)) return client.errNormal({
        error: `You're not in the same voice channel!`,
        type: 'editreply'
    }, interaction);

    if (!player || !player.queue.current) return client.errNormal({
        error: "There are no songs playing in this server",
        type: 'editreply'
    }, interaction);

    const musicLength = (player.queue.current.isStream ? null : ((!player.queue.current || !player.queue.current.duration || isNaN(player.queue.current.duration)) ? null : player.queue.current.duration))
    const nowTime = (!player.position || isNaN(player.position)) ? null : player.position;

    const bar = await createProgressBar(musicLength, nowTime);

    client.embed({
        title: `${client.emotes.normal.music}・${player.queue.current.title}`,
        url: player.queue.current.uri,
        thumbnail: player.queue.current?.thumbnail ? player.queue.current?.thumbnail : '',
        fields: [
            {
                name: `<:CS_Profile:1371336333687259231>┆Requested By`,
                value: `${player.queue.current.requester}`,
                inline: true
            },
            {
                name: `${client.emotes.normal.clock}┆Duration`,
                value: `<t:${((Date.now() / 1000) + (player.queue.current.duration / 1000) - nowTime / 1000).toFixed(0)}:f>`,
                inline: true
            },
            {
                name: `${client.emotes.normal.volume}┆Volume`,
                value: `${player.volume}%`,
                inline: true
            },
            {
                name: `${client.emotes.normal.music}┆Progress`,
                value: `${new Date(player.position).toISOString().slice(11, 19)} ┃ ` +
                    bar +
                    ` ┃ ${new Date(player.queue.current.duration).toISOString().slice(11, 19)}`,
                inline: false
            }
        ],
        type: 'editreply'
    }, interaction)
}

async function createProgressBar(total, current, size = 10, line = '▬', slider = '🔘') {
    if (current > total) {
        const bar = line.repeat(size + 2);
        const percentage = (current / total) * 100;
        return [bar, percentage];
    } else {
        const percentage = current / total;
        const progress = Math.round((size * percentage));

        if (progress > 1 && progress < 10) {
            const emptyProgress = size - progress;
            const progressText = line.repeat(progress).replace(/.$/, slider);
            const emptyProgressText = line.repeat(emptyProgress);
            const bar = progressText + emptyProgressText;
            return [bar];
        }
        else if (progress < 1 || progress == 1) {
            const emptyProgressText = line.repeat(9);
            const bar = "🔘" + emptyProgressText;
            return [bar];
        }

        else if (progress > 10 || progress == 10) {
            const emptyProgressText = line.repeat(9);
            const bar = emptyProgressText + "🔘";
            return [bar];
        }
    }
}

 