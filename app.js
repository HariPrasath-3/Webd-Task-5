const express = require("express")
const node = express()
node.get("/",(req,res)=>{
  res.send("Hello World")
})
node.get("/:name",(req,res)=>{
  let x = req.params.name;
  res.send(`Hello ${x}`)
})
node.listen(1000)
