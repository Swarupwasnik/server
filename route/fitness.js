let express=require('express');
let fitnessController=require("../components/fitness");

let fitnessrouter=express.Router();

fitnessrouter.route("/fitness")
.get(fitnessController.apicontroller)
module.exports=fitnessrouter;