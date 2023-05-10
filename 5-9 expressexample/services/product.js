//class in this module for reusable data structure.
class Product {
    constructor(name, desc, media, price, quantity, weight) {
        this.name = name;
        this.desc = desc;
        this.media = media;
        this.price = price;
        this.quantity = quantity;
        this.weight = weight;
    }


    getName(){
        return `${this.name}`;
    }
    getDesc() {
        return `${this.desc}`;
    }
    getMedia() {
        return `${this.media}`;
    }
    getPrice() {
        return `${this.price}`;
    }
    getQuantity() {
        return `${this.quantity}`;
    }
    getWeight() {
        return `${this.weight}`;
    }
}

module.exports = Product;
