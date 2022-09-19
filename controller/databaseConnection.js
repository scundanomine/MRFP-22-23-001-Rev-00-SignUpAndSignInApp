console.log("it works!!!!!!!!!!!!!!!!!!");
const mongoose = require("mongoose");
//const contentX = require('../models/content.js')

function getConnection() {
    let db_link = "mongodb+srv://scundanomine:System%402021@cluster0.oy6ccgq.mongodb.net/sundanomineUsers?retryWrites=true&w=majority"

    mongoose.connect(db_link)

    mongoose.connection.once('open', function () {
        console.log("Connection is establish")
    }).on('error', function (error) {
        console.log("error is " + error);
    })
}
// let createConnection = {getConnection: getConnection()};

module.exports = getConnection;
