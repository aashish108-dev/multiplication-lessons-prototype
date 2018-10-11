var express = require('express')
var app = express();
const port = 3123;
app.set('view engine', 'pug');
app.use(express.static(__dirname + '/'));

app.get('/', function (req, res) {
  res.render('index');
})
app.listen(port, () => console.log(`Example app listening on port ${port}!`))