var express = require('express');
const addProduct = require("../services/addProduct");
var uuid = require("uuid");

var router = express.Router();

/* GET home page. */
router.post('/addProduct', function (req, res, next) {
    const product = req.body
    const data = addProduct(product)
    res.send(JSON.stringify(data))
});



module.exports = router;