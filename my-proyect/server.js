
// en este archivo inicializamos el servidor
const express = require('express');
const morgan = require('morgan');
const app = express();
const cors = require('cors') 
require('./server/config/mongoose.config')

app.use(cors());
app.use(morgan('dev'))
app.use(express.json());
app.use( express.urlencoded({extended: true}));

const routes = require('./server/routes/products.routes'); routes(app);

app.listen(7000, () =>{
  console.log("You are now listening at port 7000")
})