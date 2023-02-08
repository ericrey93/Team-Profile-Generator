const Employee = require('./Employee');

class Intern extends Employee {
    constructor(name, id, email, school) {
        this.school = school;
    }
    getSchool() {

    }
    getRole() {
        return "Intern"
    }
}

module.exports = Intern;