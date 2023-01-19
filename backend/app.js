const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('./db/connect');
const routes = require('./routes');

const port = process.env.PORT || 8080;
const app = express();

app
    .use(bodyParser.json())
    .use((req, res, next) => {
        res.setHeader('Acess-Control-Allow-Origin', '*');
        next();
    })
    .use(routes);

mongoose.initDb((err) => {
    if (err) {
        console.log(err);
    } else {
        app.listen(port);
        console.log(`Connected to DB and listening on ${port}`);
    }
});
