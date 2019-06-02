const express = require("express");
const app = express();
var mongojs = require('mongojs');
var request = require('request');
var db = mongojs('mongodb://Sree:sree@cluster0-shard-00-00-9o2kr.mongodb.net:27017/ProjectFinder?ssl=true&replicaSet=Cluster0-shard-0&authSource=admin',['Users','Locations']);
app.use(express.static('public'));
var path = require('path');

app.set('views', path.join(__dirname, 'views'));
app.set('view engine','ejs')


app.get('/',function(req,res){
  if(err){
    res.send("Something went wrong");
  }
  res.sendFile(__dirname+'/public/index.html');
})

app.get('/login',function(req,res){
  if(err){
    res.send("Something went wrong!!")
  }
  res.sendFile(__dirname+'/public/login.html');//The login page
})



app.get('/loginsubmit',function(req,res){

    var usr_pas ={
      Email :""+req.query.Email,
      Password : ""+req.query.Password
    }
    db.Users.find(usr_pas,function(err,data){
      if(err){
        res.send("Something went wrong!!")
      }
      else{
        if(data.length>0){
          res.render('dashboard',{ab:data});
        }
        else{
          res.send("Incorrect Email or password!!")
        }
      }
    })
  //check whether username exists, then go to dashboard
})

app.get('/signup',function(req,res){
  res.sendFile(__dirname+'/public/signup.html')//The signup page
})

app.get('/signupsubmit',function(req,res){
    var usr_data = {
      Firstname : ""+req.query.Firstname,
      Lastname : ""+req.query.Lastname,
      Email : ""+req.query.Email,
      Address : ""+req.query.Address,
      Phone : ""+req.query.Phn,
      Password : ""+req.query.Password
    }
    db.Users.find(usr_data,function(err,data){
      if(err){
        res.send("Something went wrong!!")
      }
      else{
        if(data.length>0){
        res.send("You already have an account!!");
        }
        else{
          db.Users.insert(usr_data,function(err,data){
            console.log("Successfully inserted")
          })
        }
        res.sendFile(__dirname+'/public/login.html');
      }
    })

  //insert to db and go to login page
})

app.get('/logout',function(req,res){
  if(err){
    res.send("Something went wrong")
  }
  res.sendFile(__dirname+'/public/loggedout.html')//logout page
})






app.listen('4095',function(){
  console.log("It's working!!")
})
