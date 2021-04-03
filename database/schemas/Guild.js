const mongoose = require("mongoose")

const guildSchemas = new mongoose.Schema({
    guildId: {
        type: mongoose.SchemaTypes.String,
        required: true,
        unique: true
    },
    prefix: {
        type: String,
        required:true,
        default: "!",

    },
    defaultRole: {
        type: String,
        required: false,
        default: null,
    },
// guild channels
    memberLogChannel: {
        type: String,
        required: false,
        default: null,
    },
    logChannel: {
        type: String,
        required: false,
        default: null,
    },
    bumpChannelServers: {
        type: String,
        required: false,
        default: null,
    },
    bumpChannelBots: {
        type: String,
        required: false,
        default: null,
    },
    // guild Bump Channels server settings
    bumpServerDescription: {
        type: String,
        required: false,
        default: null,
    },
    bumpServerInviteurl: {
        type: String,
        required: false,
        default: null,
    },
})
module.exports = mongoose.model("guild", guildSchemas)


/**hints
 * mongoose.SchemaTypes.String {{{ => equal <=}} String
 *
 */