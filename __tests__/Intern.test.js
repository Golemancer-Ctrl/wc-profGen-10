const Intern = require('../lib/Intern');

test('constructor returns object', () => {
    const example = new Intern();
    expect(typeof(example)).toBe('object');
})

test('getName returns intern name', () => {
    const Frank = new Intern("Frank", "1", "frank@company.com", "Loyola UMD");
    expect(Frank.getName()).toBe("Frank");
})

test('getId returns intern id', () => {
    const Steve = new Intern("Steve", "2", "steve@company.com", "Yale");
    expect(Steve.getId()).toBe("2");
})

test('getEmail returns intern email', () => {
    const Dave = new Intern("Dave", "3", "dave@company.com", "Princeton");
    expect(Dave.getEmail()).toBe("dave@company.com");
})

test('getRole returns Intern', () => {
    const Phil = new Intern("Phil", "4", "phil@company.com", "Rutgers Coding Bootcamp FSF");
    expect(Phil.getRole()).toBe("Intern");
})

test('getSchool returns intern school', () => {
    const James = new Intern("James", "5", "james@company.com", "University of Delaware");
    expect(James.getSchool()).toBe("University of Delaware");
})