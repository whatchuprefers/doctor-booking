const express = require('express');
const app = express();
const cors = require('cors');
const dotenv = require('dotenv');
dotenv.config({ path: './.env' });
const db = require('./db');

app.use(cors());
app.use(express.json());
app.use(express.static('public')); // used:no need to add path when adding static files

const routes = require('./routes');
app.use(routes);

app.listen(process.env.PORT, () => {
  console.log('App is running');
  console.log(`http://localhost:${process.env.PORT}/`);
});
