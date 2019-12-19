// installed everything needed 12/18/2019 @ 9:55 CST am
const inquirer = require("inquirer")
const mysql = require("mysql")
const cTable = require("console.table")

const connection = mysql.createConnection({
    host: "localhost",

    // Your port; if not 3306
    port: 8889,

    // Your username
    user: "root",

    // Your password
    password: "root",
    database: "ee_info_db"
});

connection.connect(function (err) {
    if (err) throw err;
    console.log("connected as id " + connection.threadId);

    startScreen()
    //  connection.end();//
});

/*
*/
function startScreen() {
    inquirer.prompt({
        type: "list",
        choices: ["Add department", "Add role", "Add employee", "View departments", "View roles", "View employees", "Update employee role", "Quit"],
        message: "What would you like to do?",
        name: "option"
    })
        .then(function (result) {
            console.log("You entered: " + result.option)

            switch (result.option) {
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
                    viewRoles();
                    break;
                case "View employees":
                    viewEmployees();
                    break;
                case "Update employee role":
                    viewDepartment();
                    break;
                default:
                    quit()

            }


        });

}

function addDepartment() {
    
    let query = "SELECT * FROM ee_info_db WHERE deptName=?"

    inquirer.prompt({
      
        type: "input",
        message: "What is the name of the department?",
        name: "deptName"
      
    })
    connection.query(query, function(err, res) {
        if (err) throw err;
        console.table(res)
        startScreen()


    })

}

// function purchase(stockQuantity, id, quantity, price) {
//     newQuantity = parseInt(stockQuantity) - parseInt(quantity);
//     connection.query (
//         "UPDATE bamazonBid SET ? WHERE ?",
//         [
//             {stock_quantity: newQuantity},
//             {product_id: id},
//           ],
//     )
// }

function viewDepartment() {
    // select from the db
    let query = "SELECT * FROM department"
    connection.query(query, function (err, res) {
        if (err) throw err;
        console.table(res)
        startScreen()

    })
    // show the result to the user (console.table)

}

function viewRoles() {
    // select from the db
    let query = "SELECT * FROM role"
    connection.query(query, function (err, res) {
        if (err) throw err;
        console.table(res)
        startScreen()

    })
    // show the result to the user (console.table)

}

function viewEmployees() {
    // select from the db
    let query = "SELECT * FROM employee"
    connection.query(query, function (err, res) {
        if (err) throw err;
        console.table(res)
        startScreen()

    })
    // show the result to the user (console.table)

}







function quit() {

    connection.end()
    process.exit()

}