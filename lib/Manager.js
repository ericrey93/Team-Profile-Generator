
const Employee = require('./Employee');

class Manager extends Employee {
    constructor(name, id, email, officeNumber) {
        // the super method pulls these from the employee.js file to use here as well 
        super(name, id, email);

        this.officeNumber = officeNumber;
    }

    getOfficeNumber() {
        return this.officeNumber;
    }

    getRole() {
        return "Manager"
    }
}


module.exports = Manager;