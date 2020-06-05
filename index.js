const express = require('express');
const app = express();
const logger = require('morgan');
const bodyParser = require('body-parser');

const apiRouter = express.Router();

app.use(express.static('public'));
app.use(logger('dev', {}));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
  extended: true
}));

app.use('/api', apiRouter);

// [Server Config]
global.sql = require('mssql');
global.config = {
user: 'sa',
password: 'sfaadmin',
server: '192.168.0.14',
database: 'mdb'
};


var say = require('./api/sayHello');
var sawoninfo = require('./api/sawoninfo');
var BasicCard = require('./api/BasicCard');
var ListCard = require('./api/ListCard');
var Carousel = require('./api/Carousel');

apiRouter.post('/sayHello', say.data);
apiRouter.post('/sawoninfo', sawoninfo.data);
apiRouter.post('/BasicCard', BasicCard.data);
apiRouter.post('/ListCard', ListCard.data);
apiRouter.post('/Carousel', Carousel.data);



// Gloabal Variable
var domain = "http://218.38.191.120:3000/";
global.domain = domain;


app.listen(3000, function() {
  console.log('Example skill server listening on port 3000!');
});