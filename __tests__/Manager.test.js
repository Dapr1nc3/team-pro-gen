const Employee = require('../lib/Employee');
const Manager = require('../lib/Manager');

test('creats a manager for the team', () => {
    const manager = new Manager('name', 'id', 'email', 'officeNum');

    expect(manager.name).toBe('name');
    expect(manager.id).toBe('id');
    expect(manager.email).toBe('email');
    expect(manager.officeNum).toBe('officeNum');
});