
module.exports = async (client, interaction, args) => {
    var result = Math.ceil(Math.random() * 100);

    client.embed({
        title: `<:games_blue:1371335431836405872> ・Epic gamer rate`,
        desc: `You are ${result}% epic gamer!`,
        type: 'editreply'
    }, interaction)
}

 