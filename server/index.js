var express = require('express');
var app = express();
var bodyParser = require('body-parser');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
  extended: true
}));

app.get('/', function(req,res){
    res.send("hello");
})

app.listen(8000, function () {
   console.log('App listening on port 8000!');
});