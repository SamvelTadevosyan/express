const express = require('express');
const Sequelize = require('sequelize');
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');

import {
  CookieParser,
  AuthMiddleWare,
} from './middlewares';

import {
  Auth,
  Products,
} from './routes';

const app = express();
//
// const sequelize = new Sequelize('mydb', 'postgres', '', {
//   host: 'localhost',
//   dialect: 'postgres'
// });
//
// sequelize
//   .authenticate()
//   .then(() => {
//     console.log('Connection has been established successfully.');
//   })
//   .catch(err => {
//     console.error('Unable to connect to the database:', err);
//   });

// middlewares
app.use(cookieParser());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded());
app.use(AuthMiddleWare);


// routes
app.post('/auth', Auth);
app.get('/api/products', Products);

app.get('*', function(req, res){
  res.send('route does not exist', 404);
});

export default app;