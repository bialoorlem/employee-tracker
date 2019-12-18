//Importing dependencies

const inquirer = require("inquirer");
const mysql = require("mysql");
const cTable = require("console.table");

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
        type: "input",
        message: "What is your name?",
        name: "name"
      },
      {
        type: "input",
        message: "What is your ID?",
        name: "id"
      },
      {
        type: "input",
        message: "what is your email",
        name: "email"
      },
      {
        type: "list",
        message: "What type of employee are you?",
        name: "employeeType",
        choices: ["Intern", "Engineer", "Manager"]
      }
    ])
    .then(function(response) {
      console.log(response);
      console.log(response.name);
      console.log(response.id);
      console.log(response.email);

      // const newEE = new Employee(response.name, response.id, response.email);

      // console.log(newEE);
      switch (response.employeeType) {
        case "Intern":
          internQuestion(response);
          return;
        case "Engineer":
          engineerQuestion(response);
          return;
        case "Manager":
          managerQuestion(response);
          return;
        default:
          return;
      }
    });
}

function internQuestion(input) {
  inquirer
    .prompt([
      {
        type: "input",
        message: "Where did you go to school?",
        name: "school"
      }
    ])
    .then(function(response) {
      console.log("response", response);
      console.log("input", input);

      const newIntern = new Intern(
        input.name,
        input.id,
        input.email,
        response.school
      );

      console.log(newIntern);

        let html = `<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>Document</title>
    <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.4.1/css/bootstrap.min.css" integrity="sha384-Vkoo8x4CGsO3+Hhxv8T/Q5PaXtkKtu6ug5TOeNV6gBiFeWPGFN9MuhOf23Q9Ifjh" crossorigin="anonymous">
</head>
<body>
<div class="container h-100">
  <div class="row h-100 justify-content-center align-items-center">
    <div class="card"  style="width: 18rem;">
      <div class="card-body">
        <h5 class="card-title">Manager</h5>
        <p class="card-text">Name: ${newIntern.name}</p>
        <p class="card-text">ID: ${newIntern.id}</p>
        <p class="card-text">Email: ${newIntern.email}</p>
        <p class="card-text">Office Number: ${newIntern.school}</p>
      </div>
    </div>
</div>
<script src="https://code.jquery.com/jquery-3.4.1.slim.min.js" integrity="sha384-J6qa4849blE2+poT4WnyKhv5vZF5SrPo0iEjwBvKU7imGFAV0wwj1yYfoRSJoZ+n" crossorigin="anonymous"></script>
<script src="https://cdn.jsdelivr.net/npm/popper.js@1.16.0/dist/umd/popper.min.js" integrity="sha384-Q6E9RHvbIyZFJoft+2mJbHaEWldlvI9IOYy5n3zV9zzTtmI3UksdQRVvoxMfooAo" crossorigin="anonymous"></script>
<script src="https://stackpath.bootstrapcdn.com/bootstrap/4.4.1/js/bootstrap.min.js" integrity="sha384-wfSDF2E50Y2D1uUdj0O3uMBJnjuUD4Ih7YwaYd1iqfktj0Uod8GCExl3Og8ifwB6" crossorigin="anonymous"></script>   
</body>
</html>`

console.log(html);

fs.writeFile('index.html', html, (err) => {

    if (err) throw err;

    console.log("Success! Here is your info.");

})

    });
}

function engineerQuestion(input) {
  inquirer
    .prompt([
      {
        type: "input",
        message: "What is your github username?",
        name: "username"
      }
    ])
    .then(function(response) {
      console.log("response", response);
      console.log("input", input);

      const newEngineer = new Engineer(
        input.name,
        input.id,
        input.email,
        response.username
      );

      console.log(newEngineer);

        let html = `<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>Document</title>
    <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.4.1/css/bootstrap.min.css" integrity="sha384-Vkoo8x4CGsO3+Hhxv8T/Q5PaXtkKtu6ug5TOeNV6gBiFeWPGFN9MuhOf23Q9Ifjh" crossorigin="anonymous">
</head>
<body>
<div class="container h-100">
  <div class="row h-100 justify-content-center align-items-center">
    <div class="card"  style="width: 18rem;">
      <div class="card-body">
        <h5 class="card-title">Manager</h5>
        <p class="card-text">Name: ${newEngineer.name}</p>
        <p class="card-text">ID: ${newEngineer.id}</p>
        <p class="card-text">Email: ${newEngineer.email}</p>
        <p class="card-text">Office Number: ${newEngineer.github}</p>
      </div>
    </div>
</div>
<script src="https://code.jquery.com/jquery-3.4.1.slim.min.js" integrity="sha384-J6qa4849blE2+poT4WnyKhv5vZF5SrPo0iEjwBvKU7imGFAV0wwj1yYfoRSJoZ+n" crossorigin="anonymous"></script>
<script src="https://cdn.jsdelivr.net/npm/popper.js@1.16.0/dist/umd/popper.min.js" integrity="sha384-Q6E9RHvbIyZFJoft+2mJbHaEWldlvI9IOYy5n3zV9zzTtmI3UksdQRVvoxMfooAo" crossorigin="anonymous"></script>
<script src="https://stackpath.bootstrapcdn.com/bootstrap/4.4.1/js/bootstrap.min.js" integrity="sha384-wfSDF2E50Y2D1uUdj0O3uMBJnjuUD4Ih7YwaYd1iqfktj0Uod8GCExl3Og8ifwB6" crossorigin="anonymous"></script>   
</body>
</html>`

console.log(html);

fs.writeFile('index.html', html, (err) => {

    if (err) throw err;

    console.log("Success! Here is your info.");

})

    });
}

function managerQuestion(input) {
  inquirer
    .prompt([
      {
        type: "input",
        message: "What is your office number?",
        name: "officeNumber"
      }
    ])
    .then(function(response) {
      console.log("response", response);
      console.log("input", input);

      const newManager = new Manager(
        input.name,
        input.id,
        input.email,
        response.officeNumber
      );

      console.log(newManager);

      let html = `<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>Document</title>
    <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.4.1/css/bootstrap.min.css" integrity="sha384-Vkoo8x4CGsO3+Hhxv8T/Q5PaXtkKtu6ug5TOeNV6gBiFeWPGFN9MuhOf23Q9Ifjh" crossorigin="anonymous">
</head>
<body>
<div class="container h-100">
  <div class="row h-100 justify-content-center align-items-center">
    <div class="card"  style="width: 18rem;">
      <div class="card-body">
        <h5 class="card-title">Manager</h5>
        <p class="card-text">Name: ${newManager.name}</p>
        <p class="card-text">ID: ${newManager.id}</p>
        <p class="card-text">Email: ${newManager.email}</p>
        <p class="card-text">Office Number: ${newManager.officeNumber}</p>
      </div>
    </div>
</div>
<script src="https://code.jquery.com/jquery-3.4.1.slim.min.js" integrity="sha384-J6qa4849blE2+poT4WnyKhv5vZF5SrPo0iEjwBvKU7imGFAV0wwj1yYfoRSJoZ+n" crossorigin="anonymous"></script>
<script src="https://cdn.jsdelivr.net/npm/popper.js@1.16.0/dist/umd/popper.min.js" integrity="sha384-Q6E9RHvbIyZFJoft+2mJbHaEWldlvI9IOYy5n3zV9zzTtmI3UksdQRVvoxMfooAo" crossorigin="anonymous"></script>
<script src="https://stackpath.bootstrapcdn.com/bootstrap/4.4.1/js/bootstrap.min.js" integrity="sha384-wfSDF2E50Y2D1uUdj0O3uMBJnjuUD4Ih7YwaYd1iqfktj0Uod8GCExl3Og8ifwB6" crossorigin="anonymous"></script>   
</body>
</html>`

console.log(html);

fs.writeFile('index.html', html, (err) => {

    if (err) throw err;

    console.log("Success! Here is your info.");

})

      makeHtml(newManager)
    });
}


function makeHtml(input){
  console.log(input)
  // make html based on input and save to variable
  // write the html to a new file
}
askQuestion();
