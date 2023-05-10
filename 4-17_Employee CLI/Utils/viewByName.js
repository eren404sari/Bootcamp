function viewByName(employeeArray, rl, displayUserMenu) {
    //get response and search for Name
    rl.question("Enter employee name: ", (name) => {
        const employee = employeeArray.find(
            //revert response to lowercase to simplify user input
            (employeeName) => employeeName.getName().toLowerCase() === name.toLowerCase()
        );
        if (employee) {
            //output employee
            console.log(
                `ID: ${employee.getId()}, Name: ${employee.getName()}, Age: ${employee.getAge()}, Contact: ${employee.getContact()}, Email: ${employee.getEmail()}`
            );
        } else {
            //output for invalid entry
            console.log("Employee Data Undefined.");
        }
        displayUserMenu();
    });
}

module.exports = viewByName;