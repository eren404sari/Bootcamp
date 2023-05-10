//creating employee object to be used by other modules
class Employee {
    constructor(id, name, age, contact, email) {
        this.id = id;
        this.name = name;
        this.age = age;
        this.contact = contact;
        this.email = email;
    }

    /*
    toString() {
        return `Id:${this._id}|Name:${this._name}|Age:${this._age}|Contact:${this.contact}|Email:${this._email}`;
    }
    */

    //return values for employee obj
    getId() {
        return `${this.id}`;
    }
    getName() {
        return `${this.name}`;
    }
    getAge() {
        return `${this.age}`;
    }
    getContact() {
        return `${this.contact}`;
    }
    getEmail() {
        return `${this.email}`;
    }
}

module.exports = Employee;