const Manager = require('../lib/Manager');
const newManager = new Manager("Aaron", "11", "manager@email.com", "832-222-3333")

describe("Manager", () => {
    test("should get values for constructors in the Manager object", () => {
        expect(newManager.name).toBe("Aaron");
        expect(newManager.id).toBe("11");
        expect(newManager.email).toBe("manager@email.com");
        expect(newManager.officeNumber).toBe("832-222-3333");
    })

    test("should get name from getName() method", () => {
        expect(newManager.getName()).toBe('Aaron');
    })

    test('should get id for getId() method', () => {
        expect(newManager.getId()).toBe('11');
    })

    test('should get email from getEmail() method', () => {
        expect(newManager.getEmail()).toBe('manager@email.com')
    })

    test("should get office number for the getOfficeNumber() method", () => {
        expect(newManager.getOfficeNumber()).toBe('832-222-3333');
    })

    test('should get role for the getRole() method', () => {
        expect(newManager.getRole()).toBe('Manager');
    })
})