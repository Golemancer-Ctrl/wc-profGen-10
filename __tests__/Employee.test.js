const Employee = require('../lib/Employee');

test('constructor returns object', () => {
    const example = new Employee();
    expect(typeof(example)).toBe('object');
})

test('getName returns employee name', () => {
    const Frank = new Employee("Frank", "1", "frank@company.com");
    expect(Frank.getName()).toBe("Frank");
})

test('getId returns employee id', () => {
    const Steve = new Employee("Steve", "2", "steve@company.com");
    expect(Steve.getId()).toBe("2");
})

test('getEmail returns employee email', () => {
    const Dave = new Employee("Dave", "3", "dave@company.com");
    expect(Dave.getEmail()).toBe("dave@company.com");
})

test('getRole returns Employee', () => {
    const Phil = new Employee("Phil", "4", "phil@company.com");
    expect(Phil.getRole()).toBe("Employee");
})