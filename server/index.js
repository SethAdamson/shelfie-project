const express = require('express');
const bodyParser = require('body-parser');
const massive = require('massive');
const dotEnv = require('dotenv');
const path = require('path')
const app = express();
const port = 3030
const ctrl = require('./controller');
require('dotenv').config();

app.use(bodyParser.json());

app.use(express.static(path.join(__dirname, '/public')))

massive(process.env.CONNECTION_STRING).then(dbInstance => {
    app.set('db', dbInstance) ;
    app.get('/api/inventory', ctrl.getAll);
    app.post('/api/product', ctrl.postProduct);
    app.delete('/api/product/:id', ctrl.deleteProduct);
    app.put('/api/product/:id', ctrl.editProduct);
    app.get('/api/product/:id', ctrl.getSingle)
})

app.listen(port, () => {
    console.log("Listening on port: " + port);
})
