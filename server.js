require('dotenv').config();
const express = require('express');
const routes = require('./routes');
const sequelize = require('./config/connection');

const path = require('path');

const exphbs = require('express-handlebars');

// // Import the custom helper methods
// // const helpers = require('./utils/helpers');

const app = express();




// // Incorporate the custom helper methods
// const hbs = exphbs.create({ });

// app.engine('handlebars', hbs.engine);
app.set('view engine', 'handlebars');

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, 'public')));


app.use(routes);

sequelize.sync({ force: true }).then(() => {
  app.listen(process.env.PORT, () => console.log('Now listening'));
});