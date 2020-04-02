const path = require('path');
const express = require('express');
const exphbs = require('express-handlebars');

const app = express();

//bbdd
const { mongoose } = require('./database');


//settings
app.set('port', process.env.PORT || 4000);
app.set('views', path.join(__dirname, 'views'));
app.engine('.hbs', exphbs({
  defaultLayout: 'main',
  layoutsDir: path.join(app.get('views'), 'layouts'),
  partialsDir: path.join(app.get('views'), 'partials'),
  extname: '.hbs',
  //helpers: require('./lib/handlebars')
}))
app.set('view engine', '.hbs');

//middlewares
app.use(express.urlencoded({extended: false}));

app.use(express.static(path.join(__dirname, 'views')));

//routes
app.use('/api/post', require('./routes/index'));

// server
app.listen(app.get('port'), () => {
    console.log(`Server on port ${app.get('port')}`);
});
//'/api/post',