var mysql = require("mysql");
var inquirer = require("inquirer");
var choicesarr = []
var queryres = []
var choice1
var choice2
var quantity
var item
var updatedQuantity
var price
var cost

var connection = mysql.createConnection({
  host: "localhost",

  // Your port; if not 3306
  port: 3306,

  // Your username
  user: "root",

  // Your password
  password: "",
  database: "bamazon"
});

connection.connect(function(err) {
  if (err) throw err;
  console.log("connected as id " + connection.threadId);
  afterConnection();
});

function afterConnection(){
connection.query("SELECT * FROM products", function(err, res) {
  if (err) throw err;
  for (i in res){
    // queryres.push(res)
    choicesarr.push(res[i].item_id + " " + res[i].product_name)
  }
  queryUser()
})}


function queryUser() {

// Create a "Prompt" with a series of questions.
inquirer
  .prompt(
    [
    // Here we create a basic text prompt.
    {
      type: "list",
      message: "Which item would you like to purchase?",
      name: "product_id",
      choices: choicesarr
    },
    {
      type: "input",
      message: "How many would you like to purchase?",
      name: "quantity",
    },
  ]
)
  .then(function(inquirerResponse) {

    
    // console.log()

    // If the inquirerResponse confirms, we displays the inquirerResponse's username and pokemon from the answers.
      // console.log("Your " + inquirerResponse.product_id.slice(2) + " is available, and you've ordered " + inquirerResponse.quantity);
      choice1 = inquirerResponse.product_id.slice(0,1)
      choice2 = parseInt(inquirerResponse.quantity)
      item = inquirerResponse.product_id.slice(2)

      queryAvailability()
    }); 
}
function queryAvailability(){
connection.query(
  "SELECT * FROM products WHERE ?",    
    {
    item_id: choice1
    },
    function(err, res) {
      quantity = (res[0].stock_quantity);
      updatedQuantity = (quantity - choice2)
      price = res[0].price
      // console.log(price)
      if (choice2 > quantity){console.log("Not enough available"); queryUser();}
      else {console.log("Your " + item + " is available, and you've ordered " + choice2)
      cost = (choice2 * price)
      updateProduct(updatedQuantity, cost)

      }


    }
  );

}

function test(){
  console.log(updatedQuantity)
}

function updateProduct() {

  console.log(updatedQuantity + " of this item remaining")
  // console.log(cost)
  var query = connection.query(
    "UPDATE products SET ? WHERE ?",
    [
      {
        stock_quantity: updatedQuantity
      },
      {
        item_id: choice1
      }
    ],
    function(err, res) {
      console.log(res.affectedRows + " products updated!\n");
      console.log("Your total is " + cost)
      // Call deleteProduct AFTER the UPDATE completes
    }
  );
  // logs the actual query being run
  // console.log(query.sql);
}