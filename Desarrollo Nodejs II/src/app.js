const express = require('express');
path = require('path');
morgan = require('morgan');
mysql = require('mysql');
myConnection = require('express-myconnection');
const app = express();

// importing routes
const customerRoutes = require('./routes/customer');
const vehiculoRoutes = require('./routes/vehiculo');
const multaRoutes = require('./routes/multa');
const buscarRoutes = require('./routes/buscar');
// settings
app.set('port', process.env.PORT || 3000);
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));


// middlewares
app.use(morgan('dev'));
app.use(myConnection(mysql, {

  host: 'localhost',
  user: 'root',
  password: '',
  port: 3306,
  database: 'crudnodejsmysql'
  }, 'single'));
app.use(express.urlencoded({extended: false}));




// routes
app.use('/', customerRoutes);
app.use('/', vehiculoRoutes);
app.use('/', multaRoutes);
app.use('/', buscarRoutes);
// static files
app.use(express.static(path.join(__dirname, 'public')));



app.listen(app.get('port'), () => {
console.log('Servidor Inciado en Puerto 3000')
});