const fs = require('fs');

module.exports = (client, DiscordJS) => {

    const commandFiles = fs.readdirSync('./commands').filter(file => file.endsWith('.js'));

    for (const file of commandFiles) {
        const command = require(`./commands/${file}`);
        client.commands.set(command.name, command);
    }

    client.on('interactionCreate', async interaction => {
        if (!interaction.isCommand()) return;

        if (!client.commands.has(interaction.commandName)) return;

        try {
            await client.commands.get(interaction.commandName).execute(interaction, client, DiscordJS);
        } catch (error) {
            console.error(error);
            await interaction.reply({ content: 'There was an error while executing this command!', ephemeral: true });
        }
    });
}