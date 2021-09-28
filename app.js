const express = require('express');
const morgan = require('morgan');
const exphbs = require('express-handlebars');

const app = express();

//Configuraciones
app.set('port', 5000);
app.set('views', 'views');
app.engine('.hbs', exphbs({
    defaultLayout: 'main',
    extname: '.hbs'
}));
app.set('view engine', '.hbs');

//rutas
app.use(require('./routes/index'));

module.exports = app;