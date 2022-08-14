const Engineer = require ('../lib/engineer');
const engineer = new Engineer('saul goodman', '333333', 'sgoodman@gmail.com', 'sgoodman');

test("Test: Can we gather values from the engineer object?", () => {
    expect(engineer.name).toBe('saul goodman');
    expect(engineer.id).toBe('333333');
    expect(engineer.email).toBe('sgoodman@gmail.com')
});

test("Test: Can we get the engineer role from the method?", () => {
    expect(engineer.getRole()).toBe('Engineer');
});

test("Test: Can we get the engineer's name from the method?", () => {
    expect(engineer.getName()).toBe('saul goodman');
});

test("Test: Can we get the engineer's ID from the method?", () => {
    expect(engineer.getID().toBe('333333'));
});

test("Test: Can we get the engineer's email from the method?", () => {
    expect(engineer.getEmail()).toBe('sgoodman@gmail.com');
});

test("Test: Can we get the engineer's GitHub from the method?", () => {
    expect(engineer.getGithub().toBe('sgoodman'));
})