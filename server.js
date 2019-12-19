// # Unit 12 MySQL Homework: Employee Tracker

// Developers are often tasked with creating interfaces that make it easy for non-developers to view and interact with information stored in databases. Often these interfaces are known as **C**ontent **M**anagement **S**ystems. In this homework assignment, your challenge is to architect and build a solution for managing a company's employees using node, inquirer, and MySQL.

// ## Instructions

// Design the following database schema containing three tables:

// ![Database Schema](Assets/schema.png)

// * **department**:

//   * **id** - INT PRIMARY KEY
//   * **name** - VARCHAR(30) to hold department name

// * **role**:

//   * **id** - INT PRIMARY KEY
//   * **title** -  VARCHAR(30) to hold role title
//   * **salary** -  DECIMAL to hold role salary
//   * **department_id** -  INT to hold reference to department role belongs to

// * **employee**:

//   * **id** - INT PRIMARY KEY
//   * **first_name** - VARCHAR(30) to hold employee first name
//   * **last_name** - VARCHAR(30) to hold employee last name
//   * **role_id** - INT to hold reference to role employee has
//   * **manager_id** - INT to hold reference to another employee that manager of the current employee. This field may be null if the employee has no manager
  
// Build a command-line application that at a minimum allows the user to:

//   * Add departments, roles, employees

//   * View departments, roles, employees

//   * Update employee roles

// Bonus points if you're able to:

//   * Update employee managers

//   * View employees by manager

//   * Delete departments, roles, and employees

//   * View the total utilized budget of a department -- ie the combined salaries of all employees in that department

// We can frame this challenge as follows:

// ```
// As a business owner
// I want to be able to view and manage the departments, roles, and employees in my company
// So that I can organize and plan my business
// ```

// How do you deliver this? Here are some guidelines:

// * Use the [MySQL](https://www.npmjs.com/package/mysql) NPM package to connect to your MySQL database and perform queries.

// * Use [InquirerJs](https://www.npmjs.com/package/inquirer/v/0.2.3) NPM package to interact with the user via the command-line.

// * Use [console.table](https://www.npmjs.com/package/console.table) to print MySQL rows to the console. There is a built-in version of `console.table`, but the NPM package formats the data a little better for our purposes.

// * You may wish to have a separate file containing functions for performing specific SQL queries you'll need to use. Could a constructor function or a class be helpful for organizing these?

// * You will need to perform a variety of SQL JOINS to complete this assignment, and it's recommended you review the week's activities if you need a refresher on this.

// ![Employee Tracker](Assets/employee-tracker.gif)

// ### Hints

// * You may wish to include a `seed.sql` file to pre-populate your database. This will make development of individual features much easier.

// * Focus on getting the basic functionality completed before working on more advanced features.

// * Review the week's activities for a refresher on MySQL.

// * Check out [SQL Bolt](https://sqlbolt.com/) for some extra MySQL help.

// ## Minimum Requirements

// * Functional application.

// * GitHub repository with a unique name and a README describing the project.

// * The command-line application should allow users to:

//   * Add departments, roles, employees

//   * View departments, roles, employees

//   * Update employee roles

// ## Bonus

// * The command-line application should allow users to:

//   * Update employee managers

//   * View employees by manager

//   * Delete departments, roles, and employees

//   * View the total utilized budget of a department -- ie the combined salaries of all employees in that department

// ## Commit Early and Often

// One of the most important skills to master as a web developer is version control. Building the habit of committing via Git is important for two reasons:

// * Your commit history is a signal to employers that you are actively working on projects and learning new skills.

// * Your commit history allows you to revert your codebase in the event that you need to return to a previous state.

// Follow these guidelines for committing:

// * Make single-purpose commits for related changes to ensure a clean, manageable history. If you are fixing two issues, make two commits.

// * Write descriptive, meaningful commit messages so that you and anyone else looking at your repository can easily understand its history.

// * Don't commit half-done work, for the sake of your collaborators (and your future self!).

// * Test your application before you commit to ensure functionality at every step in the development process.

// We would like you to have well over 200 commits by graduation, so commit early and often!


// ## Submission on BCS

// You are required to submit the following:

// * The URL of the GitHub repository

// - - -
// © 2019 Trilogy Education Services, a 2U, Inc. brand. All Rights Reserved.


//Importing dependencies

const inquirer = require("inquirer");
const mysql = require("mysql");
const cTable = require("console.table");

const connection = mysql.createConnection({
    host: "localhost",
    // Your port; if not 3306
    port: 8080,
    // Your username
    user: "root",
    // Your password
    password: "root",
    database: "ee_info_db"
});
connection.connect(function(err) {
    if (err) throw err;
    console.log("connected as id " + connection.threadId);
    console.log('\n')
    firstPrompt()
});


// // Starts the server to begin listening
// // =============================================================
// mysql.listen(PORT, function() {
//   console.log("App listening on PORT " + PORT);
// });

//Code taken from previous homework and modified

// console.table([
//   {
//     name: 'foo',
//     age: 10
//   }, {
//     name: 'bar',
//     age: 20
//   }
// ]);

function askQuestion() {
  inquirer
    .prompt([
      {
        type: "list",
        message: "What would you like to do?",
        name: "firstChoice",
        choices: ["Add department", "Add role", "Add employee", "View departments", "View roles", "View employees", "Update employee role", "Quit"]
      }
    ])

 .then(function (result) {
            console.log("You entered: " + result.firstChoice)

            switch (result.firstChoice) {
                case "Add department":
                    addDepartment();
                    break;
                case "Add role":
                    viewDepartment();
                    break;
                case "Add employee":
                    viewDepartment();
                    break;
                case "View departments":
                    viewDepartment();
                    break;
                case "View roles":
                    viewDepartment();
                    break;
                case "View employees":
                    viewDepartment();
                    break;
                case "Update employee role":
                    viewDepartment();
                    break;
                default:
                    quit()

            }


        });

}


function viewDepartment() {
    // select from the db
    var query = "SELECT * FROM department"
    connection.query(query, function (err, res) {
        if (err) throw err;
        console.table(res)
        menu()

    })
    // show the result to the user (console.table)

}

// function internQuestion(input) {
//   inquirer
//     .prompt([
//       {
//         type: "input",
//         message: "Where did you go to school?",
//         name: "school"
//       }
//     ])
//     .then(function(response) {
//       console.log("response", response);
//       console.log("input", input);

//       const newIntern = new Intern(
//         input.name,
//         input.id,
//         input.email,
//         response.school
//       );

//       console.log(newIntern);


// fs.writeFile('index.html', html, (err) => {

//     if (err) throw err;

//     console.log("Success! Here is your info.");

// })

//     });
// }

// function engineerQuestion(input) {
//   inquirer
//     .prompt([
//       {
//         type: "input",
//         message: "What is your github username?",
//         name: "username"
//       }
//     ])
//     .then(function(response) {
//       console.log("response", response);
//       console.log("input", input);

//       const newEngineer = new Engineer(
//         input.name,
//         input.id,
//         input.email,
//         response.username
//       );

//       console.log(newEngineer);

//         let html = `<!DOCTYPE html>
// <html lang="en">
// <head>
//     <meta charset="UTF-8">
//     <title>Document</title>
//     <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.4.1/css/bootstrap.min.css" integrity="sha384-Vkoo8x4CGsO3+Hhxv8T/Q5PaXtkKtu6ug5TOeNV6gBiFeWPGFN9MuhOf23Q9Ifjh" crossorigin="anonymous">
// </head>
// <body>
// <div class="container h-100">
//   <div class="row h-100 justify-content-center align-items-center">
//     <div class="card"  style="width: 18rem;">
//       <div class="card-body">
//         <h5 class="card-title">Manager</h5>
//         <p class="card-text">Name: ${newEngineer.name}</p>
//         <p class="card-text">ID: ${newEngineer.id}</p>
//         <p class="card-text">Email: ${newEngineer.email}</p>
//         <p class="card-text">Office Number: ${newEngineer.github}</p>
//       </div>
//     </div>
// </div>
// <script src="https://code.jquery.com/jquery-3.4.1.slim.min.js" integrity="sha384-J6qa4849blE2+poT4WnyKhv5vZF5SrPo0iEjwBvKU7imGFAV0wwj1yYfoRSJoZ+n" crossorigin="anonymous"></script>
// <script src="https://cdn.jsdelivr.net/npm/popper.js@1.16.0/dist/umd/popper.min.js" integrity="sha384-Q6E9RHvbIyZFJoft+2mJbHaEWldlvI9IOYy5n3zV9zzTtmI3UksdQRVvoxMfooAo" crossorigin="anonymous"></script>
// <script src="https://stackpath.bootstrapcdn.com/bootstrap/4.4.1/js/bootstrap.min.js" integrity="sha384-wfSDF2E50Y2D1uUdj0O3uMBJnjuUD4Ih7YwaYd1iqfktj0Uod8GCExl3Og8ifwB6" crossorigin="anonymous"></script>   
// </body>
// </html>`

// console.log(html);

// fs.writeFile('index.html', html, (err) => {

//     if (err) throw err;

//     console.log("Success! Here is your info.");

// })

//     });
// }

// function managerQuestion(input) {
//   inquirer
//     .prompt([
//       {
//         type: "input",
//         message: "What is your office number?",
//         name: "officeNumber"
//       }
//     ])
//     .then(function(response) {
//       console.log("response", response);
//       console.log("input", input);

//       const newManager = new Manager(
//         input.name,
//         input.id,
//         input.email,
//         response.officeNumber
//       );

//       console.log(newManager);

//       let html = `<!DOCTYPE html>
// <html lang="en">
// <head>
//     <meta charset="UTF-8">
//     <title>Document</title>
//     <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.4.1/css/bootstrap.min.css" integrity="sha384-Vkoo8x4CGsO3+Hhxv8T/Q5PaXtkKtu6ug5TOeNV6gBiFeWPGFN9MuhOf23Q9Ifjh" crossorigin="anonymous">
// </head>
// <body>
// <div class="container h-100">
//   <div class="row h-100 justify-content-center align-items-center">
//     <div class="card"  style="width: 18rem;">
//       <div class="card-body">
//         <h5 class="card-title">Manager</h5>
//         <p class="card-text">Name: ${newManager.name}</p>
//         <p class="card-text">ID: ${newManager.id}</p>
//         <p class="card-text">Email: ${newManager.email}</p>
//         <p class="card-text">Office Number: ${newManager.officeNumber}</p>
//       </div>
//     </div>
// </div>
// <script src="https://code.jquery.com/jquery-3.4.1.slim.min.js" integrity="sha384-J6qa4849blE2+poT4WnyKhv5vZF5SrPo0iEjwBvKU7imGFAV0wwj1yYfoRSJoZ+n" crossorigin="anonymous"></script>
// <script src="https://cdn.jsdelivr.net/npm/popper.js@1.16.0/dist/umd/popper.min.js" integrity="sha384-Q6E9RHvbIyZFJoft+2mJbHaEWldlvI9IOYy5n3zV9zzTtmI3UksdQRVvoxMfooAo" crossorigin="anonymous"></script>
// <script src="https://stackpath.bootstrapcdn.com/bootstrap/4.4.1/js/bootstrap.min.js" integrity="sha384-wfSDF2E50Y2D1uUdj0O3uMBJnjuUD4Ih7YwaYd1iqfktj0Uod8GCExl3Og8ifwB6" crossorigin="anonymous"></script>   
// </body>
// </html>`

// console.log(html);

// fs.writeFile('index.html', html, (err) => {

//     if (err) throw err;

//     console.log("Success! Here is your info.");

// })

//       makeHtml(newManager)
//     });
// }


// function makeHtml(input){
//   console.log(input)
//   // make html based on input and save to variable
//   // write the html to a new file
// }
// askQuestion();
