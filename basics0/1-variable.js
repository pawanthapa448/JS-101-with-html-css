const accountId = 144553;

let accountEmail = "saugat@google.com";
var userPassword = "67890";
accountCity = "Kathmandu";
let accountState;
accountEmail = "saugat@gmail.com";
// accountId = 2; // not allowed
console.log(accountEmail);
accountEmail = "hc@hc.com";
userPassword = "98765";
accountCity = "Patan";

console.log(accountId);

/*
Prefer not to use var
because of issue in block scope and functional scope
*/

console.table([
  accountId,
  accountEmail,
  userPassword,
  accountCity,
  accountState,
]);
