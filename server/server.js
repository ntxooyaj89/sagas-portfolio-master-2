const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const port = process.env.PORT || 5000;

/**---------ROUTES FILES-------------- */
const portfolioRouter = require('./portfolioRouter/portfolioRouter');

/** ---------- MIDDLEWARE ---------- **/
app.use(bodyParser.json()); // needed for angular requests
app.use(bodyParser.urlencoded({ extended: true }));

/*--------------SEVER STATIC FILES---------**/

app.use(express.static('build'));

/** ---------- ROUTES ---------- **/
app.use('/portfolio', portfolioRouter);


/** ---------- START SERVER ---------- **/
app.listen(port, function () {
    console.log('Listening on port: ', port);
});