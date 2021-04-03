const mongoose = require("mongoose")

const OauthSchemas = new mongoose.Schema({ 
discordId:{
    type: String,
    required: true,
},
accessToken:{
    type: String,
    required: true,
},
refreshToken:{
    type:String,
    required: true,
},


})


module.exports = mongoose.model("Oauth2", OauthSchemas)