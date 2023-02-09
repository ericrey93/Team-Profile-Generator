const Engineer = require('../lib/Engineer');
const newEngineer = new Engineer("Paul", "12", "engineer@email.com", "engineer123");

describe("Engineer", () => {
    test("should get values for constructors in the Engineer object", () => {
        expect(newEngineer.name).toBe("Paul");
        expect(newEngineer.id).toBe("12");
        expect(newEngineer.email).toBe("engineer@email.com");
        expect(newEngineer.github).toBe("engineer123");
    })

    test("should get name from getName() method", () => {
        expect(newEngineer.getName()).toBe('Paul');
    })

    test('should get id for getId() method', () => {
        expect(newEngineer.getId()).toBe('12');
    })

    test('should get email from getEmail() method', () => {
        expect(newEngineer.getEmail()).toBe('engineer@email.com')
    })

    test("should get office number for the getGithub() method", () => {
        expect(newEngineer.getGithub()).toBe('engineer123');
    })

    test('should get role for the getRole() method', () => {
        expect(newEngineer.getRole()).toBe('Engineer');
    })
})