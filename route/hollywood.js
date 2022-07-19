let express=require('express');
let hollywoodController=require("../components/hollywood");
let hollywoodRouter=express.Router();

hollywoodRouter.route("/hollywood")
.get(hollywoodController.apicontroller)
module.exports=hollywoodRouter