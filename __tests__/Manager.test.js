const Manager = require('../lib/Manager');

test('constructor returns object', () => {
    const example = new Manager();
    expect(typeof(example)).toBe('object');
})

test('getName returns manager name', () => {
    const Frank = new Manager("Frank", "1", "frank@company.com", "5A");
    expect(Frank.getName()).toBe("Frank");
})

test('getId returns manager id', () => {
    const Steve = new Manager("Steve", "2", "steve@company.com", "1B");
    expect(Steve.getId()).toBe("2");
})

test('getEmail returns returns manager email', () => {
    const Dave = new Manager("Dave", "3", "dave@company.com", "2B");
    expect(Dave.getEmail()).toBe("dave@company.com");
})

test('getRole returns Manager', () => {
    const Phil = new Manager("Phil", "4", "phil@company.com", "3B");
    expect(Phil.getRole()).toBe("Manager");
})

test('getOfficeNumber returns manager office number', () => {
    const James = new Manager("James", "5", "james@company.com", "4B");
    expect(James.getOfficeNumber()).toBe("4B");
})