const express=require("express")
const app=express();

app.use("/public",express.static('public'))

app.get("/",(req,res)=>{
    res.sendFile(__dirname + "/index.html");
})

app.listen(3000,function(){
    console.log("server is running on port 3000")
})