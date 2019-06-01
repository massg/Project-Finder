const express = require("express");
const app = express();
var mongojs = require('mongojs');
var request = require('request');
var db = mongojs('mongodb://Sree:sree@cluster0-shard-00-00-9o2kr.mongodb.net:27017/Project0?ssl=true&replicaSet=Cluster0-shard-0&authSource=admin',[Users]);


app.get('/login',funciton(req,res){
  if(err){
    res.send("Something went wrong!!")
  }
  //The login page
})

app.get('/loginsubmit',function(req,res){
  //check whether username exists, then go to dashboard
})

app.get('/signup',function(req,res){
  if(err){
    res.send("Something went wrong!!")
  }
  //The signup page
})

app.get('/signupsubmit',function(req,res){
  //go to login page
})

app.get('/logout',function(req,res){
  if(err){
    res.send("Something went wrong")
  }
  //logout page
})






app.listen('4050',function(){
  console.log("It's working!!")
})
