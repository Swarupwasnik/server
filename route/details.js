let express=require('express');
let detailsControler =require('../components/details');
let detailsRouter=express.Router();



detailsRouter.route("/details")
.get(detailsControler.apicontroller)
module.exports=detailsRouter

