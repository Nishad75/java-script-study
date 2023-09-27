const accountId = 144553
let accountEmail = "mohammadnishad@123.gmail.accountEmail"
var accountPassword ="12345"
accountCity ="nathdwara"
 let accountState;
// accountId = 2 // not allowed

accountEmail = "nishad@gmail.com"
accountPassword ="123"
accountCity ="udaipur"

console.log(accountId);


/*
prefer not to use var 
because of issue in block scope and function scope
*/

console.table([accountId, accountEmail, accountPassword, accountCity , accountState] )
