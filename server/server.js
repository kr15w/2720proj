const express = require("express");
const mongoose = require("mongoose");
const app = express();

app.get("/login", (req,res)=> {
  // expires in 12 hours
  res.cookie("sid", "123456789",{maxAge:12*60*60*1000});
  
  res.setHeader('Content-type','text/html')
  res.send(`
    <h1>logged in</h1>
    <p>You logged in with id ${req.query.id}</p>`);
})

app.get("/", (req,res) => {
  res.setHeader('Content-type','text/html')
  res.send(`Go to <a href="/login">the login page</a>!`)
})

console.log("---\nI have no idea how to do db stuff lol")
app.listen(5000, () => console.log("Listening on http://localhost:5000... Press Ctrl+C to abort."));