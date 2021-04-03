const CryptoJS = require("crypto-js")


function getMutualGuilds(userGuilds, botGuilds) {
    // return userGuilds.filter((guild) => botGuilds.find((botGuild) => (botGuild.id === guild.id) &&
    //  (guild.permissions & 0x20 ) === 0x20 ))
    const valiedGuilds = userGuilds.filter((guild) => (guild.permissions & 0x20) === 0x20)
    const included = []
    const excluded = valiedGuilds.filter((guild) => {
        const findGuild = botGuilds.find((g) => g.id === guild.id)
        if (!findGuild) return guild;
        included.push(findGuild)
    })
    return { excluded, included }
}



function encrypt(token) {
    return CryptoJS.AES.encrypt(token, process.env.Secret_PassPhase)
}

function decrypt(token) {
    return CryptoJS.AES.decrypt(token, process.env.Secret_PassPhase)

}




module.exports = {
    getMutualGuilds,
    encrypt,
    decrypt,
}