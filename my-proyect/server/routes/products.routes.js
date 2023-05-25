const { createProduct, getAllProducts, oneSingleProduct, deleteAnExistingProduct } = require('../controllers/products.controller');



module.exports =  (app) => {
  app.get('/api/products', getAllProducts  );
  app.post('api/products', createProduct);
  app.get('/api/products/:id', oneSingleProduct);
  app.delete('/api/products/:id', deleteAnExistingProduct)
}

