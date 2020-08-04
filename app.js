const express = require("express");
const body-parser = require("body-parser");
const app = express();
var items = [];
app.set('view engine', 'ejs');
app.use(bodyParser.urlencoded({extended: true}));
app.get("/",function(req,res){

  var today = new Date();

 var options ={
   weekday: "long",
   day: "numeric",
   month: "long"
 };
   var day= today.toLocalDateString("en-US",options);
 res.render('list', {kindofday: day,newListItem :item});
});
app.post("/",function(req,res){
  var item =req.body.newItem;
  res.redirect("/");
});
app.listen(3007,function(){
  console.log("Server started on port 3007");
});
