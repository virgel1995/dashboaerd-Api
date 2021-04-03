const {
    GraphQLObjectType,
    GraphQLString,
    GraphQLBoolean,
    GraphQLList,
    GraphQLSchema,
    GraphQLInt,
} = require("graphql")

const { getUserGuilds, getBotGuilds, getGuildRoles , getGuildChannels } = require("../utils/api")
const { getMutualGuilds } = require("../utils/utils")
const Guild = require("../database/schemas/Guild");


const GuildType = new GraphQLObjectType({
    name: "GuildType",
    fields: () => ({
        id: { type: GraphQLString },
        name: { type: GraphQLString },
        icon: { type: GraphQLString },
        owner: { type: GraphQLBoolean },
        permissions: { type: GraphQLInt },
        features: { type: new GraphQLList(GraphQLString) },
        permissions_new: { type: GraphQLString },
    })
});

const UserType = new GraphQLObjectType({
    name: "UserType",
    fields: () => ({
        discordTag: { type: GraphQLString },
        discordId: { type: GraphQLString },
        avatar: { type: GraphQLString },
        guilds: {
            type: new GraphQLList(GuildType),
            resolve(parant, args, request) {
                return request.user ? getUserGuilds(request.user.discordId) : null
            }
        },
    })
});

const MutualGuildType = new GraphQLObjectType({
    name: "MutualGuildType",
    fields: () => ({
        excluded: { type: new GraphQLList(GuildType) },
        included: { type: new GraphQLList(GuildType) },
    })
})

const GuildConfigType = new GraphQLObjectType({
    name: "GuildConfigType",
    fields: () => ({
        guildId: { type: GraphQLString },
        prefix: { type: GraphQLString },
        defaultRole: { type: GraphQLString },
        memberLogChannel: { type: GraphQLString },
        logChannel: { type: GraphQLString },
        bumpChannelServers: { type: GraphQLString },
        bumpChannelBots: { type: GraphQLString },
        bumpServerDescription: { type: GraphQLString },
        bumpServerInviteurl: { type: GraphQLString },
    })
})

const GuildRolesType = new GraphQLObjectType({
    name: "GuildRolesType",
    fields: () => ({
        id: { type: GraphQLString },
        name: { type: GraphQLString },
        color: { type: GraphQLInt },
        hoist: { type: GraphQLBoolean },
        position: { type: GraphQLInt },
        permissions: { type: GraphQLInt },
        permissions_new: { type: GraphQLString },
        managed: { type: GraphQLBoolean },
        mentionable: { type: GraphQLBoolean },
    })
})
const GuildChannelsType = new GraphQLObjectType({
    name: "GuildChannelsType",
    fields: () => ({
        id: { type: GraphQLString },
        name: { type: GraphQLString },
        type: { type: GraphQLInt },
    })
})

const RootQuery = new GraphQLObjectType({
    name: "RootQuery",
    fields: {
        getUser: {
            type: UserType,
            resolve(parant, args, request) {
                return request.user ? request.user : null;
            }
        }, //getUser
        getMutualGuilds: {
            type: MutualGuildType,
            async resolve(parant, args, request) {
                if (request.user) {
                    try {
                        const botGuilds = await getBotGuilds();
                        // console.log(botGuilds)
                        const userGuilds = await getUserGuilds(request.user.discordId);
                        // console.log(userGuilds)
                        const MutualGuilds = getMutualGuilds(userGuilds, botGuilds)
                        return MutualGuilds ? MutualGuilds : "no guilds mate";
                    } catch (e) {
                        console.log(e)
                    }
                }
            }
        }, //getMutualGuilds
        getGuildConfig: {
            type: GuildConfigType,
            args: {
                guildId: { type: GraphQLString },
            },
            async resolve(parant, args, request) {
                try {
                    const { guildId } = args;
                    if (!guildId || !request.user) return null
                    const config = await Guild.findOne({ guildId });
                    return config ? config : null
                } catch (error) {
                    console.log(error)
                }
            }
        },//get guild config
        getGuildRoles: {
            type: new GraphQLList(GuildRolesType),
            args: {
                guildId: { type: GraphQLString },
            },
            async resolve(parant, args, request) {
                const { guildId } = args;
                if (!guildId || !request.user) return null
                return getGuildRoles(guildId)
            }
        }, //get guild Roles
        getGuildChannel: {
            type: new GraphQLList(GuildChannelsType),
            args: {
                guildId: { type: GraphQLString },
            },
            async resolve(parant, args, request) {
try{
    const { guildId } = args;
    if (!guildId || !request.user) return undefined
    return getGuildChannels(guildId)
}catch (e) {
    console.log(e)
}
              

            }
        }, //get guild Channels
    }
})

const MutationQuery = new GraphQLObjectType({
    name: 'RootMutationQuery',
    fields: {
        updateGuildPrefix: {
            type: GuildConfigType,
            args: {
                guildId: { type: GraphQLString },
                prefix: { type: GraphQLString }
            },
            async resolve(parant, args, request) {
                const { guildId, prefix } = args;
                if (!guildId || !prefix) return null;
                const config = await Guild.findOneAndUpdate({ guildId }, { prefix }, { new: true });
                return config ? config : null;
            }
        },//updateGuildPrefix
        updateDefaultRole: {
            type: GuildConfigType,
            args: {
                guildId: { type: GraphQLString },
                defaultRole: { type: GraphQLString }
            },
            async resolve(parant, args, request) {
                const { guildId, defaultRole } = args;
                if (!guildId || !defaultRole || !request.user) return null;
                const config = await Guild.findOneAndUpdate({ guildId }, { defaultRole }, { new: true });
                return config ? config : null;
            }
        },// updateDefaultRole
        UpdateMemberLogChannel: {
            type: GuildConfigType,
            args: {
                guildId: { type: GraphQLString },
                memberLogChannel: { type: GraphQLString }
            },
            async resolve(parant, args, request) {

                const { guildId, memberLogChannel } = args;
                if (!guildId || !memberLogChannel || !request.user) return null;
                const config = await Guild.findOneAndUpdate({ guildId }, { memberLogChannel}, { new: true });
                return config ? config : null;

            }
        },//updateMemberLogChannel

    }
})


module.exports = new GraphQLSchema({ query: RootQuery,  mutation: MutationQuery })






