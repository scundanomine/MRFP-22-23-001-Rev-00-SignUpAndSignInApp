console.log("Auth works")
const express = require('express')
const app = express()
const getConnection = require("./controller/databaseConnection");
const userX = require("./controller/userCollection");
app.use(express.json())

// Connection to database
getConnection;

//For Mini App
const authRouter = express.Router();
app.use("/signup", authRouter);

authRouter
    .route('/')
    .get(getSignup)
    .post(postUser)
    .patch(patchUser)
    .delete(deleteUser)

let userData = [];

function getSignup(req, res) {
    console.log("welcome!")
    res.sendFile("./view/signup.html", {root:__dirname})
}

function postUser(req, res) {
    console.log(req.body);
    userData = req.body;
    userX.create({
        email:userData.email,
        name:userData.name,
        password:userData.password,
        repassword:userData.repassword
    })
    res.json({
        mess: "Data has been sent successfully"
    });
}

function patchUser(req, res) {
}

function deleteUser(req, res) {
}


function setCookies(req, res) {
    res.setHeader('Set-Cookie', 'isLoggedIn=false');
    //res.cookie("isLoggedIn","true")
    console.log('Cookies has been set');
    res.send('Cookies has been set');
}

function getCookies(req, res) {
    let cookies1 = req.cookies;
    console.log(req.cookies)
    res.send("Cookies are recieved")
}

app.listen(3000, function jee() {
    console.log("The server has been startd");
})

//Hi have done it
