class Employee {
    private name: string;
    private email: string;
    constructor(name: string, email: string) {
        this.name = name;
        this.email = email;
    }
    public getEmployee(): void {
        process.stdout.write(`Name : ${this.email}, Email : ${this.name}`)
    }
}

class Manager extends Employee {
    private department: string
    constructor(name: string, email: string, department: string) {
        super(name, email);
        this.department = department;
    }
    public getEmployee(): void {
        super.getEmployee()
        process.stdout.write(`Department : ${this.department}`)
    }
}