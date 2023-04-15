const express = require("express");
const bodyParser = require("body-parser");

const date = require(__dirname + "/date.js");
//console.log(date);

const app = express();
app.use(express.static("public"));
app.use(bodyParser.urlencoded({extended: true}));
app.set('view engine', 'ejs');
const items = ["Buy Food", "Cook Food", "Eat Food"];
const workItems = [];
app.get("/", function(req,  res){
    const day = date.getDay();
    res.render("list", {ListTitle: day, newListItems: items});
})

app.get("/work", function(req, res){
    res.render("list", {ListTitle: "Work List", newListItems: workItems})
})

app.post("/", function(req, res){
    const item = req.body.newItem;
    if(req.body.list === "Work"){
        workItems.push(item);
        res.redirect("/work")
    }
    else{
        items.push(item);
        res.redirect("/");
    }
    
})

app.get("/about", function(req, res){
    res.render("about");
})
app.listen(3000, function(){
    console.log("Server is running on port 3000");
})

