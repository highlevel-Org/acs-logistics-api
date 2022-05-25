const express = require("express");
const shippmentRouter = express.Router();

const verifyToken = require('../../middleware/verify');
const uploadImage = require('../../middleware/ImageUpload')

const {getAllShippment,
    getAllShippmentByUserId,
    PostShippment,
    getShippment,
    updateShippment,
    deleteShippment,getCusterShippmentById} = require('../../controllers')


    //get all shippment route
    shippmentRouter.get("/",verifyToken,getAllShippment);




//get  shippment by user id route
shippmentRouter.get("/byUser/:userId",verifyToken,getAllShippmentByUserId);



// get  shippment by id route for for frontend Customer
shippmentRouter.get("/customerShippment/:Id",getCusterShippmentById);


//get single shippment by id route
shippmentRouter.get("/:id",verifyToken, getShippment);



//post shippment route
shippmentRouter.post("/",verifyToken,uploadImage, PostShippment);


//update shippment route by id route
shippmentRouter.put("/:id",verifyToken, updateShippment);




//delete shippment route by id route
shippmentRouter.delete("/:id",verifyToken, deleteShippment);

module.exports = shippmentRouter;