module.exports = {
    name: 'ping',
    description: '*Botun gecikme değerlerini gösterir.',
    async execute(interaction, client, DiscordJS) {

        const ping =  interaction.createdTimestamp - Date.now()
        const embed = new DiscordJS.MessageEmbed()
            .setDescription(`**⏱ Pong!**\n• API: ${client.ws.ping} ms\n• Bot: ${ping} ms`)
            .setColor("ffbd60");

            interaction.reply({ embeds: [embed] });


    },
};