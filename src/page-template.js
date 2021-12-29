const Employee = require("../lib/Employee");
const Engineer = require("../lib/Engineer");

const generateTeam = employeeInformation => {

    return `
    ${employeeInformation.filter(Employee => Employee.getRole() === "Manager").map(manager => {

        return `
                <div class="col">
                    <div class="card text-center mx-auto" style="width: 18rem;">
                            <div class="card-body bg-primary text-white">
                                <h5 class="card-title">${manager.name}</h5>
                                <p class="card-text">${manager.getRole()}</p>
                            </div>
                                <ul class="list-group list-group-flush">
                                    <li class="list-group-item">Id: ${manager.id}</li>
                                    <li class="list-group-item">Email: <a href = "mailto: ${manager.email}">${manager.email}</a></li>
                                    <li class="list-group-item">Office#: ${manager.officeNum}</li>
                                </ul>
                            </div>
                        </div>
        `
    })

            .join('')}
    ${employeeInformation.filter(Employee => Employee.getRole() === "Engineer").map(engineer => {

                return `
                <div class="col">
                    <div class="card text-center mx-auto" style="width: 18rem;">
                        <div class="card-body bg-primary text-white">
                            <h5 class="card-title">${engineer.name}</h5>
                            <p class="card-text">${engineer.getRole()}</p>
                        </div>
                            <ul class="list-group list-group-flush">
                                <li class="list-group-item">Id: ${engineer.id}</li>
                                <li class="list-group-item">Email: <a href = "mailto: ${engineer.email}">${engineer.email}</a></li>
                                <li class="list-group-item">Github: <a href="https://github.com/${engineer.github}">${engineer.github}</a></li>
                            </ul>
                        </div>
                     </div>
        `
            })

            .join('')}
    ${employeeInformation.filter(Employee => Employee.getRole() === "Intern").map(intern => {

                return `
                <div class="col">
                    <div class="card text-center mx-auto" style="width: 18rem;">
                        <div class="card-body bg-primary text-white">
                            <h5 class="card-title">${intern.name}</h5>
                            <p class="card-text">${intern.getRole()}</p>
                        </div>
                            <ul class="list-group list-group-flush">
                                <li class="list-group-item">Id: ${intern.id}</li>
                                <li class="list-group-item">Email: <a href = "mailto: ${intern.email}">${intern.email}</a></li>
                                <li class="list-group-item">School: ${intern.school}</li>
                            </ul>
                        </div>
                 </div>
        `
            })}
    `

}




module.exports = employeeInformation => {

    return `
    <!DOCTYPE html>
    <html lang="en">
    
    <head>
        <meta charset="UTF-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.1.3/css/bootstrap.min.css"
            integrity="sha384-MCw98/SFnGE8fJT3GXwEOngsV7Zt27NXFoaoApmYm81iuXoPkFOJwJ8ERdknLPMO" crossorigin="anonymous">
        <title>Document</title>
    </head>
    
    <body>
        <div class="jumbotron text-center bg-danger text-white">
            <h1 class="display-4">My Team</h1>
        </div>  

        <div class="container">
            <div class="row">
                ${generateTeam(employeeInformation)}
            </div>
        </div>
    </body>
    
    </html>
  `;
};