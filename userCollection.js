console.log("Collection works!!!!!!!!!!!!!!!!!!");
const mongoose = require('mongoose');
const { serialize } = require('v8');
const Schema = mongoose.Schema;

const usersSchema = new Schema({
    email: String,
    name: String,
    password: String,
    repassword:String
})

const userX = mongoose.model("usersData2", usersSchema)

module.exports = userX;