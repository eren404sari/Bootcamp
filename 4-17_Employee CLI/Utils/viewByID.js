function viewById(employeeArray, rl, displayUserMenu) {
    //get response and search for ID
    rl.question("Enter employee ID: ", (id) => {
        const employee = employeeArray.find((employeeID) => employeeID.getId() === id);
        if (employee) {
            console.log(
                //output employee
                `ID: ${employee.getId()}, Name: ${employee.getName()}, Age: ${employee.getAge()}, Contact: ${employee.getContact()}, Email: ${employee.getEmail()}`
            );
        } else {
                //output for invalid entry
            console.log("Employee Data Undefined.");
        }
        displayUserMenu();
    });
}

module.exports = viewById;