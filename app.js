var express = require("express");
const bodyParser=require("body-parser");
const BlockChain=require("./blockchain");
const bitcoin=new BlockChain();


var app =express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({excluded:false}))

app.get("/blockchain",function (req,res) {
    // res.send("Hello Coding");
    res.send(bitcoin);
});

app.get("/transaction",function (req,res) {
    res.send("Hello Coding");
});

app.get("/mine",function (req,res) {
    res.send("Hello Coding");
});


app.listen(3000,function () {
    console.log("listen 3000")
});
