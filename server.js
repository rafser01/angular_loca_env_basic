// JavaScript Document

var connect = require('connect');
var express = require('express');
var app = express();
var expressPort = 3000;
app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*"); // update to match the domain you will make the request from
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
  });
app.get('/todos', function(req, res){
    var todos = require('./data/todos.json')
    res.json({
        todos: todos
    })
})
app.get('/test', function(req, res){
    
    res.send("Test Api")
})
app.post('/postTest', function(req, res){
    
    res.send("Post Api test")
})
app.listen(expressPort, function(){
    console.log('API Server started at ', expressPort)
    connect.createServer(connect.static('./')).listen(4000);
})
