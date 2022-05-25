const express = require("express");
const userRouter = express.Router();


const {Login,Register} = require('../../controllers')

// console.log(Register);

//Login routes
userRouter.post("/login",Login );


//Register routes
userRouter.post("/register",Register);

module.exports = userRouter;
