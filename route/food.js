const express=require('express');
const foodControler=require("../components/food");
let foodRouter=express.Router();


foodRouter.route("/food")
.get(foodControler.apicontroller)
module.exports=foodRouter