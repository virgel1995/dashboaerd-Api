const router = require("express").Router()
const { getBotGuilds, getGuildRoles, getUserGuilds } = require("../utils/api")
const User = require("../database/schemas/user")
const Guild = require("../database/schemas/Guild")
const { getMutualGuilds } = require("../utils/utils")

/********************** get Guilds ************** */
router.get("/guilds", async (req, res) => {
    // const user = await User.findOne({ discordId: req.user.discordId })
    const guilds = await getBotGuilds();
    if (req.user) {
    const userGuilds = await getUserGuilds(req.user.discordId)
    console.log(userGuilds.length)
        const mutualGuilds = getMutualGuilds(userGuilds, guilds);
        // console.log(mutualGuilds)
        res.send(mutualGuilds)
    } else {
        return res.status(401).send({ msg: "unauthrized" })
    }
})
//guild Config
// router.get("/guilds/:guildId/config", async (req, res) => {
//     const { guildId } = req.params;
//     const config = await Guild.findOne({ guildId });
//     return config ? res.send(config) : res.status(404).send({ msg: "Not Found" });
//     console.log(config)
// });
/************ guild updates ****************/
//prefix 
// router.put("/guilds/:guildId/prefix", async (req, res) => {
//     const { prefix } = req.body;
//     const { guildId } = req.params;
//     if (!prefix) return res.status(400).send({ msg: "prefix Required" });
//     const update = await Guild.findOneAndUpdate({ guildId }, { prefix }, { new: true });

//     return update ? res.send(update) : res.status(400).send({ msg: " No prefix updated" })
// })

/************* get Roles ********** */
// router.get("/guilds/:guildId/roles", async (req, res) => {
//     const { guildId } = req.params;
//     try {
//         const roles = await getGuildRoles(guildId)
//         res.send(roles)
//         console.log(roles)
//     } catch (error) {
//         console.log(error)
//         res.status(500).send({ msg: "internal sever Error" });
//     }

    /*********** auto Role *********** */
    // router.put("/guilds/:guildId/roles/default", async (req, res) => {
    //     const { defaultRole } = req.body;
    //     if (!defaultRole) return res.status(400).send({ msg: "Bad res" })
    //     const { guildId } = req.params;
    //     try {
    //         const update = await Guild.findOneAndUpdate({ guildId }, { defaultRole }, { new: true });
    //         return update ? res.send(update) : res.status(400).send({ msg: " Bad Request" })
    //         console.log(update)
    //     } catch (error) {
    //         console.log(error)
    //         res.status(500).send({ msg: "internal sever Error" });

    //     }
    // })
// });















module.exports = router
