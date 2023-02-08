const Employee = require('../lib/Employee')
const newEmployee = new Employee('Eric', '10', 'employee@email.com');

describe('Employee', () => {
    test("should get values for constructors in Employee object", () => {
        expect(newEmployee.name).toBe('Eric');
        expect(newEmployee.id).toBe('10');
        expect(newEmployee.email);
    })
    
    test("should get name from getName() method", () => {
        expect(newEmployee.getName()).toBe('Eric');
    })

    test('should get id for getId() method', () => {
        expect(newEmployee.getId()).toBe('10');
    })

    test('should get email from getEmail() method', () => {
        expect(newEmployee.getEmail()).toBe('employee@email.com')
    })

    test('should get role for the getRole() method', () => {
        expect(newEmployee.getRole()).toBe('Employee');
    })
})


