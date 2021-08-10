module.exports = (client, DiscordJS) => {

    client.on('messageCreate', async message => {

        if (message.author.id != '694145077693382656') return;

        if (message.content === 'oluştur') {

            const row = new DiscordJS.MessageActionRow()
                .addComponents(

                    new DiscordJS.MessageSelectMenu() // SelectMenu oluşturuyoruz, embed gibi düşünün
                        .setCustomId('a') // custom Id burası zorunlu yoksa hata verebilir
                        .setPlaceholder('Bildirim Rolleri')
                        .setMinValues(1)
                        .setMaxValues(4)
                        .addOptions([

                            {
                                label: 'Discord Güncellemeleri',
                                value: 'role1',
                            },

                            {
                                label: 'Haftanın Sorusu',
                                value: 'role2',
                            },

                            {
                                label: 'Tarihte Bugün',
                                value: 'role3',
                            },

                            {
                                label: 'Haberler',
                                value: 'role4',
                            },

                        ]),

                );
            await message.channel.send({ content: ':scales: **Rol Alma Menü : Bildirim Rolleri**\n** **', components: [row] })

        }

        const wait = require('util').promisify(setTimeout);


        client.on('interactionCreate', async interaction => {

            if (!interaction.isSelectMenu()) return;

            await interaction.deferUpdate();
            await wait(2000);

            if (interaction.customId === 'a') {

                if (interaction.values.length == 4) {

                    interaction.member.roles.add('874349190908616805')
                    interaction.member.roles.add('861683045341986836')
                    interaction.member.roles.add('861683051998085140')
                    interaction.member.roles.add('861683052170051594')
                    interaction.reply({ content: "<:blob_kittenknife:852969269150089278> Roller başarıyla üstünüze eklendi. Eklenen roller aşağıda listelenmektedir.\n\n__Eklenen Roller__\n* Discord Güncellemeleri\n* Haftanın Sorusu\n* Tarihte Bugün\n* Haberler", ephemeral: true });


                }

                if (interaction.values.length == 3) {
                    let secilenRoller = interaction.values;
                    let verilcekRoller = secilenRoller.join('-');

                    if (verilcekRoller === 'role1-role2-role3') {
                        interaction.member.roles.add('874349190908616805')
                        interaction.member.roles.add('861683045341986836')
                        interaction.member.roles.add('861683051998085140')
                        interaction.reply({ content: "<:blob_kittenknife:852969269150089278> Roller başarıyla üstünüze eklendi. Eklenen roller aşağıda listelenmektedir.\n\n__Eklenen Roller__\n* Discord Güncellemeleri\n* Haftanın Sorusu\n* Tarihte Bugün", ephemeral: true });
                    }
                    if (verilcekRoller === 'role1-role2-role4') {
                        interaction.member.roles.add('874349190908616805')
                        interaction.member.roles.add('861683045341986836')
                        interaction.member.roles.add('861683052170051594')
                        interaction.reply({ content: "<:blob_kittenknife:852969269150089278> Roller başarıyla üstünüze eklendi. Eklenen roller aşağıda listelenmektedir.\n\n__Eklenen Roller__\n* Discord Güncellemeleri\n* Haftanın Sorusu\n* Haberler", ephemeral: true });
                    }
                    if (verilcekRoller === 'role1-role3-role4') {
                        interaction.member.roles.add('874349190908616805')
                        interaction.member.roles.add('861683051998085140')
                        interaction.member.roles.add('861683052170051594')
                        interaction.reply({ content: "<:blob_kittenknife:852969269150089278> Roller başarıyla üstünüze eklendi. Eklenen roller aşağıda listelenmektedir.\n\n__Eklenen Roller__\n* Discord Güncellemeleri\n* Tarihte Bugün\n* Haberler", ephemeral: true });
                    }
                    if (verilcekRoller === 'role2-role3-role4') {
                        interaction.member.roles.add('861683045341986836')
                        interaction.member.roles.add('861683051998085140')
                        interaction.member.roles.add('861683052170051594')
                        interaction.reply({ content: "<:blob_kittenknife:852969269150089278> Roller başarıyla üstünüze eklendi. Eklenen roller aşağıda listelenmektedir.\n\n__Eklenen Roller__\n* Haftanın Sorusu\*Tarihte Bugün\n* Haberler", ephemeral: true });
                    }

                }

                if (interaction.values.length == 2) {
                    let secilenRoller = interaction.values;
                    let verilcekRoller = secilenRoller.join('-');

                    if (verilcekRoller === 'role1-role2') {
                        interaction.member.roles.add('874349190908616805')
                        interaction.member.roles.add('861683045341986836')
                        interaction.reply({ content: "<:blob_kittenknife:852969269150089278> Roller başarıyla üstünüze eklendi. Eklenen roller aşağıda listelenmektedir.\n\n__Eklenen Roller__\n* Discord Güncellemeleri\n* Haftanın Sorusu", ephemeral: true });
                    }
                    if (verilcekRoller === 'role1-role3') {
                        interaction.member.roles.add('874349190908616805')
                        interaction.member.roles.add('861683051998085140')
                        interaction.reply({ content: "<:blob_kittenknife:852969269150089278> Roller başarıyla üstünüze eklendi. Eklenen roller aşağıda listelenmektedir.\n\n__Eklenen Roller__\n* Discord Güncellemeleri\n* Tarihte Bugün", ephemeral: true });
                    }
                    if (verilcekRoller === 'role1-role4') {
                        interaction.member.roles.add('874349190908616805')
                        interaction.member.roles.add('861683052170051594')
                        interaction.reply({ content: "<:blob_kittenknife:852969269150089278> Roller başarıyla üstünüze eklendi. Eklenen roller aşağıda listelenmektedir.\n\n__Eklenen Roller__\n* Discord Güncellemeleri\n* Haberler", ephemeral: true });
                    }
                    if (verilcekRoller === 'role2-role3') {
                        interaction.member.roles.add('861683045341986836')
                        interaction.member.roles.add('861683051998085140')
                        interaction.reply({ content: "<:blob_kittenknife:852969269150089278> Roller başarıyla üstünüze eklendi. Eklenen roller aşağıda listelenmektedir.\n\n__Eklenen Roller__\n* Haftanın Sorusu\n* Tarihte Bugün", ephemeral: true });
                    }
                    if (verilcekRoller === 'role2-role4') {
                        interaction.member.roles.add('861683045341986836')
                        interaction.member.roles.add('861683052170051594')
                        interaction.reply({ content: "<:blob_kittenknife:852969269150089278> Roller başarıyla üstünüze eklendi. Eklenen roller aşağıda listelenmektedir.\n\n__Eklenen Roller__\n* Haftanın Sorusu\n* Haberler", ephemeral: true });
                    }
                    if (verilcekRoller === 'role3-role4') {
                        interaction.member.roles.add('861683051998085140')
                        interaction.member.roles.add('861683052170051594')
                        interaction.reply({ content: "<:blob_kittenknife:852969269150089278> Roller başarıyla üstünüze eklendi. Eklenen roller aşağıda listelenmektedir.\n\n__Eklenen Roller__\n* Tarihte Bugün\n* Haberler", ephemeral: true });
                    }

                }

                if (interaction.values.length == 1) {
                    let verilcekRoller = interaction.values;
                    if (verilcekRoller == 'role1') {
                        interaction.member.roles.add('874349190908616805')
                        interaction.reply({ content: "<:blob_kittenknife:852969269150089278> Roller başarıyla üstünüze eklendi. Eklenen roller aşağıda listelenmektedir.\n\n__Eklenen Roller__\n* Discord Güncellemeleri", ephemeral: true });
                    }
                    if (verilcekRoller == 'role2') {
                        interaction.member.roles.add('861683045341986836')
                        interaction.reply({ content: "<:blob_kittenknife:852969269150089278> Roller başarıyla üstünüze eklendi. Eklenen roller aşağıda listelenmektedir.\n\n__Eklenen Roller__\n* Haftanın Sorusu", ephemeral: true });
                    }
                    if (verilcekRoller == 'role3') {
                        interaction.member.roles.add('861683051998085140')
                            interaction.reply({ content: "<:blob_kittenknife:852969269150089278> Roller başarıyla üstünüze eklendi. Eklenen roller aşağıda listelenmektedir.\n\n__Eklenen Roller__\n* Tarihte Bugün", ephemeral: true });
                    }
                    if (verilcekRoller == 'role4') {
                        interaction.member.roles.add('861683052170051594')
                            interaction.reply({ content: "<:blob_kittenknife:852969269150089278> Roller başarıyla üstünüze eklendi. Eklenen roller aşağıda listelenmektedir.\n\n__Eklenen Roller__\n* Haberler", ephemeral: true });
                    }
                }

                else { return; }
            }
        });

    })

}