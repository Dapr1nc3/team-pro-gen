
const Employee = require('./Employee');

class Manager extends Employee {
    constructor(name = '', id, email, officeNum) {
        super(name, id, email, officeNum);

        this.officeNum = officeNum;
    }
    getRole() {
        return `Manager`;
    };


}

module.exports = Manager;
