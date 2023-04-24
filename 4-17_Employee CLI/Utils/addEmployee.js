import Employee from "../Model/Employee.js";
//import readLineAsync, { isValidString } from '../Utils/ReadUtils.js'

import fs from "fs";
import os from "os";


//const { uuid } = require('uuidv4');
import { v4 as uuidv4 } from 'uuid';

/*
let userInput = ''
const addEmployee = async () => {
    while (isValidString(userInput)) {
        let employee = new Employee(
            uuidv4(),
            await readLineAsync('Please enter the name'),
            await readLineAsync('Please enter the age'),
            await readLineAsync('Please enter the email'),
            await readLineAsync('Please enter the contact ')
        );
        //main()
    }
}

export default new Employee;
*/

//save employee data into file
function saveEmployeeData(employee) {
    const homeDir = os.homedir();
    const folderPath = `/Data`;
    const filePath = `${folderPath}/employeeList.txt`;
    if (!fs.existsSync(folderPath)) {
        fs.mkdirSync(folderPath);
    }

    const employeeData = `${employee.getId()}, ${employee.getName()}, ${employee.getAge()}, ${employee.getContact()}, ${employee.getEmail()}\n`;

    //process save
    fs.appendFile(filePath, employeeData, "utf8", (error) => {
        if (error) {
            console.log("Error:", error);
        } else {
            console.log(
                `Completed`
            );
            console.log(`Employee data has been saved to: ${filePath}`);
        }
    });
}

//validate name for being greater than 2 characters
function isValidName(name) {
    if(name.length > 2) {
        return true;
    } else {return false;}
}

//validate age for being older than 18
function isValidAge(age) {
    if (age > 18) {
        return true;
    } else {return false; }
}

//unsure of contact format required
/*
//validate contact for being in the formate of phone number
function isValidEmail(contact) {
    valid = /^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/im
    if (valid) {
         return true;
        } else {return false;}
}
*/

//TODO: fix email validation
//validate email for being in xxxxxxx@x.xxx format
/*
function isValidEmail(email) {
    valid = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email)
    if (valid) {
        return true;
    } else { return false;}
}
*/

//process validation
function addEmployee(employeeArray, rl, displayUserMenu) {
    rl.question("Enter name: ", (name) => {
        if (!isValidName(name)) {
            console.log("Invalid name.");
            displayUserMenu();
            return;
        }

        rl.question("Enter age: ", (age) => {
            if (!isValidAge(age)) {
                console.log("Invalid age. Must be older than 18");
                displayUserMenu();
                return;
            }

            rl.question("Enter contact: ", (contact) => {
                
                rl.question("Enter email: ", (email) => {
                    /* TODO: uncomment after fixed email validation
                    if (!isValidEmail(email)) {
                        console.log(
                            "Invalid email."
                        );
                        displayUserMenu();
                        return;
                    }
                    */

                    //save data
                    const id = uuidv4(); //generate an ID value for employee
                    const newEmployee = new Employee(id, name, age, contact, email);
                    employeeArray.push(newEmployee);
                    console.log(`New Emplyee: ${name}, ID: ${id}/n`);
                    saveEmployeeData(newEmployee);
                    displayUserMenu();
                });
            });
        });
    });
}

export default addEmployee;