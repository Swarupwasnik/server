let express= require('express');
let technologyControler=require('../components/technology');
let technologyRouter=express.Router();



technologyRouter.route("/technology")
.get(technologyControler.apicontroller)
module.exports=technologyRouter;
