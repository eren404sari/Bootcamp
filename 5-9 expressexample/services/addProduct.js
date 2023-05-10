const Product = require("./product.js");
const fs = require("fs");
const os = require("os");
var logger = require('morgan');

let products=[]
  function allProducts(){
    return products
  }

function saveProductData(product) {
  const folderPath = `c:\\`;
  const filePath = `${folderPath}/data/products.json`;
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
  const regex = /^[a-zA-Z\s]+$/;
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
    //console.log( fullName, age, contact, email ,product)
    if (!isValidName(name) || !isValidPrice(price) || !isValidWeight(weight)) {
            
      throw new Error(`Can not save invalid ${name} ${desc} ${media} ${price} ${quantity} ${weight} `);
    }
  const newProduct = new Product(name, desc, media, price, quantity, weight);
    products.push(newProduct);
    saveProductData(newProduct);
    return products
}

module.exports = addProduct;
