const { Schema, model} = require('mongoose')


const ProductSchema = new Schema ({
  title:{
    type: String,
    required: [true,'Debe ingresar un producto']},
  price: {
    type: Number, 
    required: [true, 'Debe ingresar el precio']},
  description: {
    type: String,
    required: [true, 'Debe ingresar una descripción']}
  
 }, {timestamps: true});


const Product = model('Product', ProductSchema)

