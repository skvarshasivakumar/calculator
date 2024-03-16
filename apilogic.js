const express=require("express");
const bodyParser=require("body-parser");
const app=express();
app.use(bodyParser.urlencoded({extended:true}));
function authenticate(username, password) {
    // Dummy logic for check credentials karo
    return username === 'catdigital' && password === 'catdigital';
}
app.get("/",function(request,response){
  response.sendFile(__dirname +"/index.html");
 });

app.post("/",function(req,res){
    var username=req.body.username;
    var password=req.body.password;
    if(authenticate(username,password)){
        console.log(req)
        res.sendFile(__dirname +"/sample.xml");
    }
    else{
        res.send("wrong try karo")
    }

});
app.listen(3000,function(){
  console.log("server connected to port 3000")
});
