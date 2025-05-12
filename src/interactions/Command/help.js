

const { CommandInteraction, Client } = require('discord.js');
const { SlashCommandBuilder, EmbedBuilder, ButtonBuilder, ActionRowBuilder, StringSelectMenuBuilder } = require('discord.js');
const Discord = require('discord.js');
const moment = require("moment");
require("moment-duration-format");

module.exports = {
    data: new SlashCommandBuilder()
        .setName('help')
        .setDescription('Get help with the bot'),

    /** 
     * @param {Client} client
     * @param {CommandInteraction} interaction
     * @param {String[]} args
     */

    run: async (client, interaction, args) => {
        const toUpperCase = (string) => string.charAt(0).toUpperCase() + string.slice(1);
        const commad = (name) => {
            const mentions = client.getSlashMentions(name); // array of [mention, description]
            return mentions.map(cmd => `${cmd[0]} - \`${cmd[1]}\``).join("\n");
        }

        let em1 = new EmbedBuilder()
            .setAuthor({ name: `${client.user.username}\'s Help Menu`, iconURL: client.user.displayAvatarURL({ format: "png" }) })
            .setImage(`https://i.stack.imgur.com/Fzh0w.png`)
            .setColor(`#5865F2`)
            .setThumbnail(client.user.displayAvatarURL({ format: "png", size: 1024 }))
            .addFields([
                {
                    name: "Categories [1-9]",
                    value: `>>> <:blue_afk_1371359709466198066:1371359738520141834>┆AFK
                    <:18960soundboardsgglogo:1371358931171147848>┆Announcement
                    <:blue_automod:1371330032257208390>┆Auto mod
                    <:settings_blue:1371330094668189766>┆Auto setup
                    <:BirthdayBlueCake:1371330206585061406> ┆Birthday
                    🤖┆Bot
                    <:bluebunny:1371330370154397706> ┆Casino
                    ⚙┆Configuration
                    <:blue__comp:1371330577537564754>┆CustomCommand`,
                    inline: true
                },
                {
                    name: "Categories [19-27]",
                    value: `>>> <:uparrows:1371335967448891444>┆Leveling
                    <:blue_chataILD:1371180174833483876>┆Messages
                    <:moderation:1371337297857089637>┆Moderation
                    <:Music_blue:1371336544626933790>┆Music
                    <:ABookBlue:1371336209707569255>┆Notepad
                    <:CS_Profile:1371336333687259231>┆Profile
                    <:Radio:1371336441858228234>┆Radio
                    <:BlueColorRole:1371336699694678037>┆Reaction Role
                    <:Blue_Search:1371336653465190530>┆Search`,
                    inline: true
                },
                {
                    name: "\u200b",
                    value: "\u200b",
                    inline: true
                },
                {
                    name: "Categories [10-18]",
                    value: `>>> <:creditcard:1371335206530711643>┆Dcredits
                      <:gd_money_blue:1371360378860212314>┆Economy
                      <:Blue_member:1371335093003747329> ┆Family
                      <:Laughing_Blueemoji:1371335380951109744> ┆Fun
                      <:games_blue:1371335431836405872> ┆Games
                      <:BlueGiveaway:1371358779257393175>  ┆Giveaway
                      <:settings_blue:1371330094668189766>┆Guild
                      <:photocamera:1371335677651980309>┆Images
                      <:Invite_Blue:1371335831750709318> ┆Invites`,
                    inline: true
                }, {
                    name: "Categories Part [28-36]",
                    value: `>>> <:stats:1371336857794904167>┆Server stats
                    <:settings_blue:1371330094668189766>┆Setup
                    <:18960soundboardsgglogo:1371358931171147848>┆Soundboard
                    <:blue_chataILD:1371180174833483876>┆StickyMessage
                    <:Suggestion:1371337422754943016> ┆Suggestions
                    💙┆Thanks
                    <:blue_ticket:1371337519588708432> ┆Tickets
                    <:blue_hammers:1371336079411777700>┆Tools
                    <:Voice:1371337642511175741>┆Voice`,
                    inline: true
                },
                {
                    name: "\u200b",
                    value: "\u200b",
                    inline: true
                },
            ])


        let startButton = new ButtonBuilder().setStyle(2).setEmoji(`<bluearrowsLeft:1371175301656084533>`).setCustomId('start'),
            backButton = new ButtonBuilder().setStyle(2).setEmoji(`<:blue_arrow_left:1371175004879851582>`).setCustomId('back'),
            forwardButton = new ButtonBuilder().setStyle(2).setEmoji(`<:blue_arrow:1371174888575996015:>`).setCustomId('forward'),
            endButton = new ButtonBuilder().setStyle(2).setEmoji(`<bluearrows:1371175305787609169>`).setCustomId('end'),
            link = new ButtonBuilder().setStyle(5).setLabel("SUPPORT").setEmoji(`🥹`).setURL('https://discord.gg/3xzPkYHd9U')

        const options = [{ label: 'Owerview', value: '0' }]
        const options2 = []

        let counter = 0
        let counter2 = 25
        require("fs").readdirSync(`${process.cwd()}/src/commands`).slice(0, 24).forEach(dirs => {
            counter++
            const opt = {
                label: toUpperCase(dirs.replace("-", " ")),
                value: `${counter}`
            }
            options.push(opt)
        })
        require("fs").readdirSync(`${process.cwd()}/src/commands`).slice(25, 37).forEach(dirs => {
            counter2++
            const opt = {
                label: toUpperCase(dirs.replace("-", " ")),
                value: `${counter2}`
            }
            options2.push(opt)
        })

        let menu = new StringSelectMenuBuilder().setPlaceholder('Change page').setCustomId('pagMenu').addOptions(options).setMaxValues(1).setMinValues(1),
            menu2 = new StringSelectMenuBuilder().setPlaceholder('Change page').setCustomId('pagMenu2').addOptions(options2).setMaxValues(1).setMinValues(1)

        const allButtons = [startButton.setDisabled(true), backButton.setDisabled(true), forwardButton.setDisabled(false), endButton.setDisabled(false), link]

        let group1 = new ActionRowBuilder().addComponents(menu)
        let group2 = new ActionRowBuilder().addComponents(allButtons)
        let group3 = new ActionRowBuilder().addComponents(menu2)

        const components = [group2, group1, group3]

        let helpMessage = await interaction.reply({
            content: `Click on the buttons to change page`,
            embeds: [em1],
            components: components,
        })

        const collector = helpMessage.createMessageComponentCollector((button) => button.user.id === interaction.user.id, { time: 60e3 });

        var embeds = [em1]

        require("fs").readdirSync(`${process.cwd()}/src/commands`).forEach(dirs => { embeds.push(new EmbedBuilder().setAuthor({ name: toUpperCase(dirs), iconURL: client.user.displayAvatarURL({ format: "png" }), url: `h` + `tt` + `ps:` + `//` + `d` + `s` + `c` + `.` + `gg` + `/u` + `o` + `a` + `i` + `o` }).setDescription(`${commad(dirs)}`)) })

        let currentPage = 0

        collector.on('collect', async (b) => {
            if (b.user.id !== interaction.user.id)
                return b.reply({
                    content: `**You Can't Use it\n**`,
                    ephemeral: true
                });
            switch (b.customId) {
                case 'start':
                    currentPage = 0
                    group2 = new ActionRowBuilder().addComponents([startButton.setDisabled(true), backButton.setDisabled(true), forwardButton.setDisabled(false), endButton.setDisabled(false)])
                    b.update({ embeds: [embeds[currentPage]], components: components })
                    break;
                case 'back':
                    --currentPage;
                    if (currentPage === 0) { group2 = new ActionRowBuilder().addComponents([startButton.setDisabled(true), backButton.setDisabled(true), forwardButton.setDisabled(false), endButton.setDisabled(false)]) } else { group2 = new ActionRowBuilder().addComponents([startButton.setDisabled(false), backButton.setDisabled(false), forwardButton.setDisabled(false), endButton.setDisabled(false)]) }
                    b.update({ embeds: [embeds[currentPage]], components: components })
                    break;
                case 'forward':
                    currentPage++;
                    if (currentPage === embeds.length - 1) { group2 = new ActionRowBuilder().addComponents([startButton.setDisabled(false), backButton.setDisabled(false), forwardButton.setDisabled(true), endButton.setDisabled(true)]) } else { group2 = new ActionRowBuilder().addComponents([startButton.setDisabled(false), backButton.setDisabled(false), forwardButton.setDisabled(false), endButton.setDisabled(false)]) }
                    b.update({ embeds: [embeds[currentPage]], components: components })
                    break;
                case 'end':
                    currentPage = embeds.length - 1;
                    group2 = new ActionRowBuilder().addComponents([startButton.setDisabled(false), backButton.setDisabled(false), forwardButton.setDisabled(true), endButton.setDisabled(true)])
                    b.update({ embeds: [embeds[currentPage]], components: components })
                    break;
                case 'pagMenu':
                    currentPage = parseInt(b.values[0])
                    if (currentPage === 0) { group2 = new ActionRowBuilder().addComponents([startButton.setDisabled(true), backButton.setDisabled(true), forwardButton.setDisabled(false), endButton.setDisabled(false)]) } else if (currentPage === embeds.length - 1) { group2 = new ActionRowBuilder().addComponents([startButton.setDisabled(false), backButton.setDisabled(false), forwardButton.setDisabled(true), endButton.setDisabled(true)]) } else { group2 = new ActionRowBuilder().addComponents([startButton.setDisabled(false), backButton.setDisabled(false), forwardButton.setDisabled(false), endButton.setDisabled(false)]) }
                    b.update({ embeds: [embeds[currentPage]], components: components })
                    break;
                case 'pagMenu2':
                    currentPage = parseInt(b.values[0])
                    if (currentPage === 0) { group2 = new ActionRowBuilder().addComponents([startButton.setDisabled(true), backButton.setDisabled(true), forwardButton.setDisabled(false), endButton.setDisabled(false)]) } else if (currentPage === embeds.length - 1) { group2 = new ActionRowBuilder().addComponents([startButton.setDisabled(false), backButton.setDisabled(false), forwardButton.setDisabled(true), endButton.setDisabled(true)]) } else { group2 = new ActionRowBuilder().addComponents([startButton.setDisabled(false), backButton.setDisabled(false), forwardButton.setDisabled(false), endButton.setDisabled(false)]) }
                    b.update({ embeds: [embeds[currentPage]], components: components })
                    break;
                default:
                    currentPage = 0
                    b.update({ embeds: [embeds[currentPage]], components: null })
                    break;
            }
        });

        collector.on('end', b => {
            b.update({ embeds: [helpMessage.embeds[0]], content: [], components: [] })
        });

        collector.on('error', (e) => console.log(e));

        embeds.map((embed, index) => {
            embed.setColor("#5865F2").setImage(`https://i.stack.imgur.com/Fzh0w.png`)
                .setFooter({ text: `Page ${index + 1} / ${embeds.length}`, iconURL: client.user.displayAvatarURL() });
        })

    },
};
