// creating the Employee object and will be used in the other js sheets
class Employee {
    constructor(name, id, email) {
        this.name = name;
        this.id = id;
        this.email = email;
    }
    getName() {
        return this.name;
    }
    getId() {
        return this.id;
    }

    getEmail() {
        return this.email;
    }
    getRole() {
        return "Employee"
    }
}

module.exports = Employee;