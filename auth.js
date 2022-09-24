console.log("Auth works")
console.log("It works!!!!!!");
const express = require('express')
const app = express()
app.use(express.json())

const createConnection = require("./databaseConnection");

const userX = require('./userCollection');

// Connection to database
createConnection.getConnection

//Model population

// for(let i=0; i<5;i++){
//     userX.create({
//         email: "jeeshanali0"+i+"@gmail.com",
//         name: "Jeeshan"+i,
//         password:"protected"+i,
//         repassword:"protected"+i
//     });
// }

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
    res.sendFile("./signup.html", {root:__dirname})
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

async function patchUser(req, res) {
    console.log(req.body);
    userData = req.body;
    await userX.updateMany({ name: "Zeeshan Ali" }, { password: userData.password });
    res.send('Data has been updated');
}

async function deleteUser(req, res) {
    console.log("Yes, data has been deleted")
    await userX.deleteOne({name:"Jeeshan4"})
    res.send('data has been deleted');
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

//Hi have done it7
1