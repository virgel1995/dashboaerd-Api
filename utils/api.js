const Token = process.env.CLIENT_Token
const CryptoJS = require("crypto-js")
const  OauthCreadiantails  = require("../database/schemas/Oauth2")
const fetch = require("node-fetch");

const { decrypt } = require("./utils")
const DiscordApi = "http://discord.com/api/v8"
/**get bot guilds from discord api */
async function getBotGuilds() {
    const res = await fetch(`http://discord.com/api/v8/users/@me/guilds`, {
        method: "GET",
        headers: {
            Authorization: `Bot ${Token}`
        }
    });
    return res.json();
}

/**get bot guilds (roles) from discord api */
async function getGuildRoles(guildId) {
    const res = await fetch(`http://discord.com/api/v8/guilds/${guildId}/roles `, {
        method: "GET",
        headers: {
            Authorization: `Bot ${Token}`
        }
    });
    return res.json();
}
/**get bot guilds (channels) from discord api */
async function getGuildChannels(guildId) {
    const res = await fetch(`http://discord.com/api/v8/guilds/${guildId}/channels `, {
        method: "GET",
        headers: {
            Authorization: `Bot ${Token}`
        }
    });
    return res.json();
}


async function getUserGuilds(discordId) {
    const creadiantils = await OauthCreadiantails.findOne({ discordId });
    if (!creadiantils) console.log("no creadiantials");
    const encryptedAccessToken = creadiantils.get("accessToken");
    const decrypted = decrypt(encryptedAccessToken);
    const accessToken = decrypted.toString(CryptoJS.enc.Utf8);
    const res = await fetch(`http://discord.com/api/v8/users/@me/guilds`, {
        method: "GET",
        headers: {
            Authorization: `Bearer ${accessToken}`
        }
    });
    return res.json();
}

module.exports = {
    getBotGuilds,
    getGuildRoles,
    getUserGuilds,
    getGuildChannels
}