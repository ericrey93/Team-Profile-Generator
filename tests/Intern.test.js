const Intern = require('../lib/Intern');
const newIntern = new Intern("Bob", "13", "intern@email.com", "Rice University");

describe("Intern", () => {
    test("should get values for constructors in Intern object", () => {
        expect(newIntern.name).toBe('Bob');
        expect(newIntern.id).toBe('13');
        expect(newIntern.email).toBe('intern@email.com');
        expect(newIntern.school).toBe('Rice University');
    })
    
    test("should get name from getName() method", () => {
        expect(newIntern.getName()).toBe('Bob');
    })

    test('should get id for getId() method', () => {
        expect(newIntern.getId()).toBe('13');
    })

    test('should get email from getEmail() method', () => {
        expect(newIntern.getEmail()).toBe('intern@email.com')
    })

    test('should get role for the getRole() method', () => {
        expect(newIntern.getRole()).toBe('Intern');
    })
})