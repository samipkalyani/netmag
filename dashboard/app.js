var express = require("express");
var path =require("path");

app = express();

app.use(express.static(path.join(__dirname,"public")));

app.get("/",(req,res)=>{
    res.render("dashboard.ejs");
});

app.get("/action1",(req,res)=>{
    res.render("action1.ejs");
});

app.get("/dashboard",(req,res)=>{
    res.render("dashboard.ejs");
});

app.get("/addpatient",(req,res)=>{
    res.render("addpatient.ejs");
});

app.listen(3000,()=>{
    console.log("server started");
});