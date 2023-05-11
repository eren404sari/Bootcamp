const Product = require("./product.js");
const fs = require("fs");
const os = require("os");
var logger = require('morgan');
import { v4 as uuidv4 } from 'uuid';

let products = []
function allProducts() {
    return products
}

function saveProductData(product) {
    const folderPath = `c:\\`;
    const filePath = `${folderPath}/data/products.json`;
    const jsonBytes = fs.readFileSync(filePath)
    let products = JSON.parse(jsonBytes);
    products.push(product)

    fs.writeFileSync(filePath, JSON.stringify(products), (error) => {
        if (error) {
            // console.log("Error saving product data: ", error);

        } else {
            console.log(
                `Product with ID ${product.getId()} has been added and saved.`
            );
            console.log(`Product data has been saved to: ${filePath}`);
        }
    });
}




function addProduct(product) {

    //const { name, description, slug, image, gallery, price, sale_price, variations } = product
    const product = new mongoose.Schema({
        name: { type: String, default: null, required: true },
        description: { type: String, default: null, required: false },
        slug: { type: String, default: null, required: false },
        image: { type: mongoose.SchemaTypes.Mixed, default: null, required: false },
        gallery: { type: mongoose.SchemaTypes.Array, default: null, required: false },
        price: { type: mongoose.SchemaTypes.Decimal128, default: null, required: false },
        sale_price: { type: mongoose.SchemaTypes.Decimal128, default: null, required: false },
        variations: { type: mongoose.SchemaTypes.Mixed, default: null, required: false }
    }) = product;
    //console.log( name, desc, media, price, quantity, weight)
    if (!isValidName(name) || !isValidPrice(price) || !isValidWeight(weight)) {

        throw new Error(`Can not save invalid ${name} ${description} ${slug} ${image} ${gallery} ${price} ${sale_price} ${variations} `);
    }
    const id = uuidv4();
    const newProduct = new Product(id, name, description, slug, image, gallery, price, sale_price, variations);
    products.push(newProduct);
    saveProductData(newProduct);
    return products
}

module.exports = addProduct;