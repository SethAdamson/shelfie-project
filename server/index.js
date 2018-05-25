const express = require('express');
const bodyParser = require('body-parser');
const massive = require('massive');
const dotEnv = require('dotenv');
const app = express();
const port = 3030
const ctrl = require('./controller');
require('dotenv').config();

app.use(bodyParser.json());

massive(process.env.CONNECTION_STRING).then(dbInstance => {
    app.set('db', dbInstance) ;
    app.get('/api/inventory', ctrl.getProducts);
    app.post('/api/product', ctrl.postProduct);
})

app.listen(port, () => {
    console.log("Listening on port: " + port);
})
