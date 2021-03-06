const express = require('express');
require('dotenv').config()
const massive = require('massive')
const app = express();

app.use(express.json())

const { SERVER_PORT, CONNECTION_STRING } = process.env

massive(CONNECTION_STRING).then(db => {
  app.set('db', db)

  console.log('connected to database');

  app.listen( SERVER_PORT, () => console.log(`Bingpot on ${SERVER_PORT}`))
})
 


//Endpoints
const ctrl = require('./controller')
app.get(`/api/houses`, ctrl.getHouses)
app.post(`/api/houses`, ctrl.createHouse)
app.delete('/api/houses/:property_id', ctrl.deleteHouse)
