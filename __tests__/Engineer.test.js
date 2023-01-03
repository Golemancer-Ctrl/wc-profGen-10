const Engineer = require('../lib/Engineer');

test('constructor returns object', () => {
    const example = new Engineer();
    expect(typeof(example)).toBe('object');
})

test('getName returns employee name', () => {
    const Frank = new Engineer("Frank", "1", "frank@company.com", "https://github.com/franklyfrank");
    expect(Frank.getName()).toBe("Frank");
})

test('getId returns employee id', () => {
    const Steve = new Engineer("Steve", "2", "steve@company.com", "https://github.com/stevestrange");
    expect(Steve.getId()).toBe("2");
})

test('getEmail returns employee email', () => {
    const Dave = new Engineer("Dave", "3", "dave@company.com", "https://github.com/dangerdave");
    expect(Dave.getEmail()).toBe("dave@company.com");
})

test('getRole returns Employee', () => {
    const Phil = new Engineer("Phil", "4", "phil@company.com", "https://github.com/phillyphil");
    expect(Phil.getRole()).toBe("Engineer");
})

test('getGithub returns employee github link', () => {
    const James = new Engineer("James", "5", "james@company.com", "https://github.com/justjames");
    expect(James.getGithub()).toBe("https://github.com/justjames");
})