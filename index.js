const express = require('express');
const database_connection = require('./config/connection');
const routes = require('./routes');

const app = express();

app.use(express.urlencoded({extended: true}));
app.use(express.json());
app.use(routes);

database_connection.once('open', () => {
  app.listen(3001, () => {
    console.log('Server running on port 3001');
  });
});
