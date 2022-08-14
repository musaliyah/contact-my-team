const Intern = require ('../lib/intern');
const intern = new Intern('gus fring', '222222', 'gusfring@gmail.com', 'NYU');

test("Test: Can we gather values from the intern object?", () => {
    expect(intern.name).toBe('gus fring');
    expect(intern.id).toBe('222222');
    expect(intern.email).toBe('gusfring@gmail.com')
});

test("Test: Can we get the intern role from the method?", () => {
    expect(intern.getRole()).toBe('Intern');
});

test("Test: Can we get the intern's name from the method?", () => {
    expect(intern.getName()).toBe('gus fring');
});

test("Test: Can we get the intern's ID from the method?", () => {
    expect(intern.getID()).toBe('222222');
});

test("Test: Can we get the intern's email from the method?", () => {
    expect(intern.getEmail()).toBe('gusfring@gmail.com');
});

test("Test: Can we get the intern's school from the method?", () => {
    expect(intern.getSchool()).toBe('NYU');
})