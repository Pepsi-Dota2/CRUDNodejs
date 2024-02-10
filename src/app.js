const express = require("express");
const bodyparser = require("body-parser");
const {config} = require("dotenv");
const { router } = require("./router");
config();
const app = express();


// parse application/x-www-form-urlencoded
app.use(bodyparser.urlencoded({extended : true}));

// express application/json
app.use(express.json());

app.use(express.urlencoded({extended : true}));
app.use("/", router)

app.listen(process.env.NODE_PORT, ()=>{
    console.log("sever is running", process.env.NODE_PORT);
})