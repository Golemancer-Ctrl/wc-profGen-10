const Employee = require('../lib/Employee');

test('example', () => {
    const example = new Employee();
    expect(typeof(example)).toBe('object');
})