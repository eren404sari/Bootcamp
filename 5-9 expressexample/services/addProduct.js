const Product = require("./product.js");
const fs = require("fs");
const os = require("os");
var logger = require('morgan');
import { v4 as uuidv4 } from 'uuid';

let products=[]
  function allProducts(){
    return products
  }

function saveProductData(product) {
  const folderPath = `c:\\`;
  const filePath = `./`;
  const jsonBytes= fs.readFileSync(filePath)
  let products= JSON.parse(jsonBytes);
  products.push(product)
  
  fs.writeFileSync( filePath, JSON.stringify(products), (error) => {
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

//(title, description, media, price, quantity, weight)

function isValidName(name) {

  return regex.test(name);
}

function isValidDescription(desc) {
  
  return regex.test(desc);
}

function isValidDescription(media) {

  return regex.test(media);
}

function isValidPrice(price) {
  
  return regex.test(price);
}

function isValidQuantity(quantity) {
  
  return regex.test(quantity);
}

function isValidWeight(weight) {
  
  return regex.test(weight);
}

function addProduct(product) {
  
  const { name, desc, media, price, quantity, weight } = product
    //console.log( name, desc, media, price, quantity, weight)
    if (!isValidName(name) || !isValidPrice(price) || !isValidWeight(weight)) {
            
      throw new Error(`Can not save invalid ${name} ${desc} ${media} ${price} ${quantity} ${weight} `);
    }
  const id = uuidv4();
  const newProduct = new Product(id, name, desc, media, price, quantity, weight);
    products.push(newProduct);
    saveProductData(newProduct);
    return products
}

module.exports = addProduct;
