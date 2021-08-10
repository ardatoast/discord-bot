module.exports = (client, DiscordJS) => {

    client.on('messageCreate', async message => {

        if (message.author.id != '694145077693382656') return;

        if (message.content === 'oluştur2') {

            const row = new DiscordJS.MessageActionRow()
                .addComponents(

                    new DiscordJS.MessageSelectMenu() // SelectMenu oluşturuyoruz, embed gibi düşünün
                        .setCustomId('c') // custom Id burası zorunlu yoksa hata verebilir
                        .setPlaceholder('Renk Rolleri')
                        .addOptions([
                            {
                                label: 'Renk : Mor',
                                emoji: '874603844460478494',
                                value: 'role1',
                            },

                            {
                                label: 'Renk : Pembe',
                                emoji: '874604383852191754',
                                value: 'role2',
                            },

                            {
                                label: 'Renk : Yeşil',
                                emoji: '874604707258200094',
                                value: 'role3',
                            },
                            {
                                label: 'Renk : Sarı',
                                emoji: '874604963903442974',
                                value: 'role4',
                            },

                        ]),

                );
            await message.channel.send({ content: ':scales: **Rol Alma Menü : Booster Üye Renk Rolleri**\n** **', components: [row] })

        }

    })

    const wait = require('util').promisify(setTimeout);


    client.on('interactionCreate', async interaction => {

        if (!interaction.isSelectMenu()) return;

        await interaction.deferUpdate();
        await wait(2000);


        if (interaction.customId === 'c') {

            if (!interaction.member.roles.cache.get("835059086352449567")) {
                if (!interaction.member.roles.cache.get("872572364557287475")) return interaction.followUp({ content: 'Bu rolleri almanız için yeterli rolünüz yok. ( Booster & Özel Üye)', ephemeral: true });
            }
    

            if (interaction.values === 'role1') {
                interaction.member.roles.remove('862784369445044245');
                interaction.member.roles.remove('862784390843858964');
                interaction.member.roles.remove('862784438119170088');

                interaction.member.roles.add('862784345173786674');
                interaction.followUp({ content: "<:blob_kittenknife:852969269150089278> Mor renkli rol başarıyla üstünüze eklendi. Bence bu renk sana çok yakıştı ^^", ephemeral: true });
            }

            if (interaction.values === 'role2') {
                interaction.member.roles.remove('862784369445044245');
                interaction.member.roles.remove('862784390843858964');
                interaction.member.roles.remove('862784438119170088');

                interaction.member.roles.add('862784369445044245');
                interaction.followUp({ content: "<:blob_kittenknife:852969269150089278> Pembe renkli rol başarıyla üstünüze eklendi. Bence bu renk sana çok yakıştı ^^", ephemeral: true });
            }

            if (interaction.values === 'role3') {
                interaction.member.roles.remove('862784345173786674');
                interaction.member.roles.remove('862784369445044245');
                interaction.member.roles.remove('862784438119170088');

                interaction.member.roles.add('862784390843858964');
                interaction.followUp({ content: "<:blob_kittenknife:852969269150089278> Yeşil renkli rol başarıyla üstünüze eklendi. Bence bu renk sana çok yakıştı ^^", ephemeral: true });
            }

            if (interaction.values === 'role4') {
                interaction.member.roles.remove('862784345173786674');
                interaction.member.roles.remove('862784369445044245');
                interaction.member.roles.remove('862784390843858964');

                interaction.member.roles.add('862784438119170088');
                interaction.followUp({ content: "<:blob_kittenknife:852969269150089278> Sarı renkli rol başarıyla üstünüze eklendi. Bence bu renk sana çok yakıştı ^^", ephemeral: true });
            }


        }
    })
}
