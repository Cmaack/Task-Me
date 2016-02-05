var express = require('express');
var app = express();
var mongoose = require('mongoose');
var bodyParser = require('body-parser');

mongoose.connect('mongodb://localhost/task-me');

app.use(express.static('./client'));

app.set('views', __dirname + '/client/views')
app.set('view engine', 'ejs')

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

var indexRouter = require('./server/routes/index');
var taskRouter = require('./server/routes/api/tasks');

app.use('/', indexRouter);
app.use('/api/tasks', taskRouter);

var port = 8080;
 app.listen(port, function(){
  console.log('...listening on port ' + port);
});
