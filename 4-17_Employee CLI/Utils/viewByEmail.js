function viewByEmail(employeeArray, rl, displayUserMenu) {
    //get response and search for email
    rl.question("Enter employee email: ", (email) => {
        const employee = employeeArray.find(
            //revert response to lowercase to simplify user input
            (employeeEmail) => employeeEmail.getEmail().toLowerCase() === email.toLowerCase()
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

export default viewByEmail;