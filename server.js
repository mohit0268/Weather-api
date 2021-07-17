const express=require("express")
const app=express();

app.get("/",(req,res)=>{
    res.send("<h1>Weather api</h1>");
})

app.listen(3000,function(){
    console.log("server is running on port 3000")
})