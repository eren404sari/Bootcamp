function viewAll(employeeArray, displayUserMenu) {
    if (employeeArray.length === 0) {
        console.log("No employees found.");
    } else {
        console.log("\nAll Employees:");
        //iterate through all employees to list all
        employeeArray.forEach((employee) => {
            console.log(
                `ID: ${employee.getId()}, Name: ${employee.getName()}, Age: ${employee.getAge()}, Contact: ${employee.getContact()}, Email: ${employee.getEmail()}`
            );
        });
    }
    displayUserMenu();
}

export default viewAll;