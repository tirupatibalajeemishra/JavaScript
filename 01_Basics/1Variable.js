const accountId = 14453;//declaring a constant
//to declare variable there are two ways,,,let and var..
// prefer  to use let instead of var ,,becoz in var the concept of scope is not clear thus use Let ..

let accountEmail = "tirupati@google.com";
var accountPasswod = "45799";

//also in js ,variable can either be created wihtout using let,,,but it is considered as false or bad practice

accountCity = "mirzapur";
let accountState;

//accountId = 2;  can't be changed as it is constant

console.log(accountId);
accountEmail = "balaji@ms.com";
accountPasswod = "23124";
accountCity = "Varanasi";

//Using console , table can represent the data in form of tables
console.table([accountId, accountEmail, accountPasswod, accountCity, accountState]); 