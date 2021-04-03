const mongoose = require("mongoose")

const UserSchemas = new mongoose.Schema({ 
discordId:{
    type: String,
    required: true,
    unique: true
},
discordTag:{
    type: String,
    required: true,
},
avatar:{
    type:String,
    required: true,
},


})


module.exports = mongoose.model("User", UserSchemas)