var express = require('express');
const addProduct = require("../services/addProduct");
var uuid = require("uuid");

var router = express.Router();




const product = req.body
const data = addProduct(product)


router.get('/', (req, res) => {
    res.setHeader('content-type', 'application/json');
    res.statusCode = 200;
    res.end(JSON.stringify({ message: "success", products: tempProducts }));
});


router.post('/addProduct', (req, res) => {
    try {
        const { id, title, desc, media, price, quantity, weight } = req.body;
        const newProduct = { id, title, desc, media, price, quantity, weight };
        const products = addProduct(newProduct);
        res.status(201).json(products);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
});


router.delete('/products/:id', (req, res) => {
    const productId = req.params.id;
    const products = addProduct.allProducts();
    const productIndex = products.findIndex((p) => p.id === parseInt(productId));

    if (productIndex !== -1) {
        const deletedProduct = products.splice(productIndex, 1);
        addProduct.saveProducts(); // Update the products data after deletion
        res.json(deletedProduct[0]);
    } else {
        res.status(404).json({ error: 'Product not found' });
    }
});



module.exports = router;