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



// static serving 


app.listen(3000, function() {
  console.log('Example skill server listening on port 3000!');
});