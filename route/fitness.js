let express=require('express');
let fitnessController=require("../components/fitness");

let fitnessrouter=express.Router();

fitnessRouter.route("/fitness")
.get(fitnessController.apicontroller)
module.exports=fitnessrouter;