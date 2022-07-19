const express=require('express');

// const detailsRouter2=require('./route')
let cors=require('cors');
let PORT = process.env.PORT || 3001;

const detailsRouter1=require("./route/details");
let technologyRouter=require("./route/technology");
let foodRouter=require("./route/food");
let bollywoodRouter=require("./route/bollywood");
let fitnessrouter=require("./route/fitness");

let hollywoodRouter=require("./route/hollywood");

const app = express();

app.use(cors())
app.use("/api",detailsRouter1)


app.use(cors())
app.use("/api",technologyRouter);

app.use(cors())
app.use("/api",foodRouter);

app.use(cors())
app.use("/api",bollywoodRouter);

app.use(cors())
app.use("/api",fitnessrouter)

app.use(cors())
app.use("/api",hollywoodRouter)


app.listen(PORT,()=>{
    console.log('app is running');
});