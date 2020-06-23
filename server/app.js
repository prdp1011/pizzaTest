//Install express server
const express = require('express');
const cors = require('cors')
const bodyParser = require('body-parser');
const main = require('./routes/main.route');

const app = express();
app.use(cors())
const mongoose = require('mongoose');
// mongodb://<dbuser>:<dbpassword>@ds133465.mlab.com:33465/pizzaorder
mongoose.connect('mongodb://testmongo:abc123@ds133465.mlab.com:33465/pizzaorder', {useNewUrlParser: true, useUnifiedTopology: true});

const db = mongoose.connection
db.once('open', () => {
  console.log(`we're connected!`);
});
db.on('error', (err) => {
  console.error(`Mongoose connection error: ${err}`);
  process.exit(1);
});
// app.use(serveStatic('dist/testBank/', { 'index': ['index.html', 'index.htm'] }))

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));
app.use('/', main);

app.listen(process.env.PORT || 4000, () => {
  console.log('server started on port 4000');
});

