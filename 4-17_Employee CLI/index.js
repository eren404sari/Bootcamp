import Employee from "./Module/Employee.js";
//import readLineAsync, { isValidString }  from "./Utils/ReadUtils.js"
import readline from "readline";
import addEmployee from "./Utils/addEmployee.js";
import viewById from "./Utils/viewById.js";
import viewByName from "./Utils/viewByName.js";
import viewByEmail from "./Utils/viewByEmail.js";
import viewAll from "./Utils/viewAll.js";

// import {uuidv4} from "uuid"
//import { v4 as uuidv4 } from 'uuid';

const employeeArray = [];

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});


/*
let userOpt = await readLineAsync('Please enter the choice from above menu !')
// here we will perfrom the check that the value should pe proper and validated 
while (isValidString(userOpt)) {
    switch (userOpt) {
    }
}
*/

function displayUserMenu() {
    console.log("========================Main Menu=========================");
    console.log("1- Add Employee");
    console.log("2- View Employee by ID");
    console.log("3- View Employee by Name");
    console.log("4- View Employee by Email");
    console.log("5- View All Employees");
    console.log("6- quit");

    rl.question("Please enter your choice from above menu !", (userOpt) => {
        switch (userOpt) {
            case "1":
                addEmployee(employeeArray, rl, displayUserMenu);
                break;
            case "2":
                viewById(employeeArray, rl, displayUserMenu);
                break;
            case "3":
                viewByName(employeeArray, rl, displayUserMenu);
                break;
            case "4":
                viewByEmail(employeeArray, rl, displayUserMenu);
                break;
            case "5":
                viewAll(employeeArray, displayUserMenu);
                break;
            case "6":
                console.log("Goodbye.");
                rl.close();
                break;
            default:
                console.log("Invalid response");
                displayUserMenu();
        }
    });
}

displayUserMenu();