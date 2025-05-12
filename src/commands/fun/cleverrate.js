
module.exports = async (client, interaction, args) => {

    var result = Math.ceil(Math.random() * 100);

    client.embed({
        title: `<:Suggestion:1371337422754943016> ・Clever Rate`,
        desc: `You are ${result}% clever!`,
        type: 'editreply'
    }, interaction)
}

 