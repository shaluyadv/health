console.log("My name is Anthony Gonsalves.")

// Declaring variables using var
var a = 5
var b = 10
var c = a + b
console.log(c);


// Declaring variables using let
let e = 5
let f = 10
let g = e + f
console.log(g);


// let variable can be updated but can not be redeclared
e = 8
f = 11
g = e + f 
console.log(g);

// Declaring constant varibale once a value is assigned it can not be changed.
const my_firstname = "Shalu ";
const my_sirname = "Yadav";
const my_fullname = my_firstname + my_sirname;
console.log(my_fullname);

/* Throws an error when try to change the value of a constant variable.
my_firstname = "Sanju";
console.log(my_firstname);*/