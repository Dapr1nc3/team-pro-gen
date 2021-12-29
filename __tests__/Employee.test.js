
const Employee = require('../lib/Employee');

test('creates a new employee', () => {
    const employee = new Employee('name', 'id', 'email',);

    expect(employee.name).toBe('name');
    expect(employee.id).toBe('id');
    expect(employee.email).toBe('email');
});