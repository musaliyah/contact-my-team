const Manager = require('../lib/manager');
const manager = new Manager('jesse pinkman', '111111', 'jessepinkman@gmail.com', '000-000-0000');

test("Test: can we gather values from the manager object?", () => {
    expect(manager.name).toBe('jesse pinkman');
    expect(manager.id).toBe('111111');
    expect(manager.email).toBe('jessepinkman@gmail.com');
    expect(manager.officeNumber).toBe('000-000-0000');
});


test("Test: Can we get the manager role from the method?", () => {
    expect(manager.getRole()).toBe('Manager');
});

test("Test: Can we get the manager's name from the method?", () => {
    expect(manager.getName()).toBe('jesse pinkman');
});

test("Test: Can we get the manager's ID from the method?", () => {
    expect(manager.getID()).toBe('111111');
});

test("Test: Can we get the manager's office number from the method?", () => {
    expect(manager.getNumber()).toBe('000-000-0000');
})