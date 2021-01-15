const express = require('express');
const bodyParser = require('body-parser');
const dbConfig = require('./config/database.config');
const mongoose = require('mongoose');
const cors = require('cors');


mongoose.Promise = global.Promise;

mongoose.connect(dbConfig.url, {useNewUrlParser: true})
.then(() => {console.log("Successfully connected to the database");})
.catch(err => {
    console.log('Could not connect to the database. Exiting now...', err);
    process.exit();
});

const app = express();

app.use(cors())
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

const port = process.env.PORT || 5001

require('./routes/users.routes.js')(app);
app.listen(port, () => console.log(`running the server successfully on ${port}`));
