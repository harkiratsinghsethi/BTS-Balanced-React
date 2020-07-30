const path = require('path');

let express = require('express');

let bodyParser = require('body-parser');

let app = express();
app.use(express.static('build'))

let port = process.env.PORT || 8005;

let api = require('./src/server/routes/routes');
const indexRoute = require('./src/server/routes/index');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));

app.use('/api', api);
app.use('/', indexRoute);

app.set('views', path.join(__dirname, 'public'));
app.engine('html', require('ejs').renderFile);

app.set('view engine', 'html');
app.listen(port);

console.log('RESTful API server started on: ' + port);
