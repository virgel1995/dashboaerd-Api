const router = require("express").Router()
const passport = require("passport")




router.get ("/discord" , passport.authenticate("discord"))

router.get("/discord/redirect" , passport.authenticate("discord") , (req,res) => {
    // res.cookie('rememberme', '1', { expires: new Date(Date.now() + 900000), httpOnly: false });
    res.redirect(`/menu`)
})

router.get("/" , (req , res) => {
    if (req.user) {
        res.send(req.user)
    }else {
        res.status(401).send({msg : "unauthrized"})
    }
})


module.exports = router
