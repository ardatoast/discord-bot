// Aruda Bot, sade olmalı basit değil!

const DiscordJS = require('discord.js');
var client = new DiscordJS.Client({ intents: ["GUILDS", "GUILD_MESSAGES", "GUILD_MEMBERS"], allowedMentions: { parse: ['roles'] } });

client.cooldowns = new DiscordJS.Collection();
client.commands = new DiscordJS.Collection();

const fs = require('fs');
const path = require('path');

require(path.join(__dirname, 'commandHandler.js'))(client, DiscordJS);
require(path.join(__dirname, 'bildirim-rolleri.js'))(client, DiscordJS);
require(path.join(__dirname, 'renk-rolleri.js'))(client, DiscordJS);
require(path.join(__dirname, 'eventHandler.js'))(client);

const settings = require('./settings.json');
client.login(settings.Token);

// Made by Arda YAZGAN(Hourgon#3137)

