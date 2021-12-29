const inquirer = require('inquirer');
const Manager = require('./lib/Manager');
const Engineer = require('./lib/Engineer');
const Intern = require('./lib/Intern');
const { writeFile, copyFile } = require('./src/generate-page');
const generateManager = require('./src/page-template');

const employeeInformation = [];


const promptUser = () => {
    return inquirer.prompt([
        {
            type: 'input',
            name: 'managerName',
            message: 'What is the name of the manager? (Required)',
            // This makes sure you enter something and not leave the question blank 
            validate: nameInput => {
                if (nameInput) {
                    return true;
                } else {
                    console.log('Please enter the name of the manager!');
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'managerEmployeeId',
            message: 'What is the Employee id? (Required)',
            // This makes sure you enter something and not leave the question blank 
            validate: employeeIdInput => {
                if (employeeIdInput) {
                    return true;
                } else {
                    console.log('Please enter the employee id!');
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'managerEmail',
            message: 'What is the email of the manager? (Required)',
            // This makes sure you enter something and not leave the question blank 
            validate: managerEmailInput => {
                if (managerEmailInput) {
                    return true;
                } else {
                    console.log('Please enter the manager email!');
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'managerofficeNum',
            message: 'What is the office number of the manager? (Required)',
            // This makes sure you enter something and not leave the question blank 
            validate: managerNumberInput => {
                if (managerNumberInput) {
                    return true;
                } else {
                    console.log('Please enter the office number!');
                    return false;
                }
            }
        },
    ]).then(managerInfo => {

        let manager = new Manager (managerInfo.managerName, managerInfo.managerEmployeeId, managerInfo.managerEmail, managerInfo.managerofficeNum)
        employeeInformation.push(manager);
    })
};


const promptMenu = () => {
    
    return inquirer.prompt([
        {
            type: 'checkbox',
            name: 'menu',
            message: 'What would you like to do next?',
            choices: ['Add an engineer', 'Add an Intern', 'Finsh building my team']
        }
    ]).then(options => {
        
        if (options.menu[0] === 'Add an engineer') {
            return promptEngineer();
        };
        
        if (options.menu[0] === 'Add an Intern') {
            return promptIntern();
        };
        if (options.menu[0] === 'Finsh building my team') {
            console.log('i made finished team')
            return promptFinishedTeam();
        };
    })

};


promptEngineer = () => {
    return inquirer.prompt([
        {
            type: 'input',
            name: 'engineerName',
            message: 'What is the name of the Engineer?',
            // This makes sure you enter something and not leave the question blank 
            validate: engineerNameInput => {
                if (engineerNameInput) {
                    return true;
                } else {
                    console.log('Please enter a name!');
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'engineerId',
            message: 'What is the id of the Engineer?',
            // This makes sure you enter something and not leave the question blank 
            validate: engineerIdInput => {
                if (engineerIdInput) {
                    return true;
                } else {
                    console.log('Please enter an id!');
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'engineerEmail',
            message: 'What is the email of the Engineer?',
            // This makes sure you enter something and not leave the question blank 
            validate: engineerEmailInput => {
                if (engineerEmailInput) {
                    return true;
                } else {
                    console.log('Please enter an email!');
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'engineerGit',
            message: 'What is the Github username of the Engineer?',
            // This makes sure you enter something and not leave the question blank 
            validate: engineerGitInput => {
                if (engineerGitInput) {
                    return true;
                } else {
                    console.log('Please enter the Github username !');
                    return false;
                }
            }
        },
    ]).then(engineerInfo => {

        let engineer = new Engineer (engineerInfo.engineerName, engineerInfo.engineerId, engineerInfo.engineerEmail, engineerInfo.engineerGit)
        employeeInformation.push(engineer);
    })
    .then(promptMenu)
};

promptIntern = () => {
    return inquirer.prompt ([
        {
            type: 'input',
            name: 'internName',
            message: 'What is the name of the Intern?',
            // This makes sure you enter something and not leave the question blank 
            validate: internNameInput => {
                if (internNameInput) {
                    return true;
                } else {
                    console.log('Please enter a name!');
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'internId',
            message: 'What is the id of the Intern?',
            // This makes sure you enter something and not leave the question blank 
            validate: internIdInput => {
                if (internIdInput) {
                    return true;
                } else {
                    console.log('Please enter an id!');
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'internEmail',
            message: 'What is the email of the Intern?',
            // This makes sure you enter something and not leave the question blank 
            validate: internEmailInput => {
                if (internEmailInput) {
                    return true;
                } else {
                    console.log('Please enter an email!');
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'internSchool',
            message: 'What is the school of the Intern?',
            // This makes sure you enter something and not leave the question blank 
            validate: internSchoolInput => {
                if (internSchoolInput) {
                    return true;
                } else {
                    console.log('Please enter an school name!');
                    return false;
                }
            }
        }
    ]).then(internInfo => {
        let intern = new Intern (internInfo.internName, internInfo.internId, internInfo.internEmail, internInfo.internSchool)
        employeeInformation.push(intern);
        console.log(intern);
    }).then(promptMenu)
};

promptFinishedTeam = () => {
 let generateHtmlPage = generateManager(employeeInformation)
 writeFile(generateHtmlPage);
};

promptUser()
    .then(promptMenu)
 