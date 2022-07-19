let express=require('express');
let bollywoodController=require('../components/bollywood');
let bollywoodRouter=express.Router();

bollywoodRouter.route("/bollywood")
.get(bollywoodController.apicontroller)
module.exports=bollywoodRouter;