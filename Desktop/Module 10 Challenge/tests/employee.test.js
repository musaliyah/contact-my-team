const Employee = require ('../lib/employee');
const employee = new Employee('walter white', '246812', 'walterwhite@gmail.com');

test ("Test: Can we gather values from the employee object?", () => {
    expect(employee.name).toBe('walter white');
    expect(employee.id).toBe('246812');
    expect(employee.email).toBe('walterwhite@gmail.com')
});

test("Test: Can we get the employee role from the method?", () => {
    expect(employee.getRole()).toBe('Employee');
});

test("Test: Can we get the employee's name from the method?", () => {
    expect(employee.getName()).toBe('walter white');
});

test("Test: Can we get the employee's ID from the method?", () => {
    expect(employee.getID().toBe('246812'))
});

test("Test: Can we get the employee's email from the method?", () => {
    expect(employee.getEmail()).toBe('walterwhite@gmail.com');
});