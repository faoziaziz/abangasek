var express=require('express')
var app=express()

app.get('/', function(req, res){
  res.send('hello world');
});

app.get('/tentang', function(req, res){
  res.send('tentang');
});
app.listen(3000);
