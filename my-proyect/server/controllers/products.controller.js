const Products = require('../models/products.models')

module.exports.getAllProducts = async(req, res) =>{
  Products.find()
  .then(allProducts =>res.json({products: allProducts}))
  .catch(err =>res.json({message: "No hemos podido obtener todos los productos", error:err}));
};
module.exports.createProduct = async(req, res)=> {
  Products.create(req.body)
  .then(newProduct => res.json({ producto: newProduct}))
  .catch(err => res.json({message: "No hemos podido crear el producto", error: err}));
};
module.exports.oneSingleProduct = async (req, res) =>{
  Products.findOne({_id: req.params.id})
  .then(oneSingleProduct => res.json({product: oneSingleProduct}))
  .catch(err =>res.json({message: "No hemos podido obtener el producto deseado", error: err}))
};
module.exports.deleteAnExistingProduct = async (req, res) =>{
  Products.deleteOne({_id: req.params.id})
  .then(result => res.json({result: result}))
  .catch(err => res.json({message:"No hemos podido eliminar el producto", error: err}))
}