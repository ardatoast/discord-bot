module.exports = {
    name: 'ready',
    once: true,
    async execute(client) {

        setInterval(() => {

            client.user.setPresence({ activities: [{ name: `#plotusSquad` }] });

        }, 100000);

        console.log(`hazır! Giriş Yaptı -  ${client.user.tag}`);
    },

}