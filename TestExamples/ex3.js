var items = new Array();
var now = new Date();
var error = new Error("Something bad happend!");
var func = new Function("console.log('Hi')");
var object = new Object();
var re = new RegExp("\\d+");

var book = new Object();
book.name = "The principles of object-oriented Javascript";
book.year = 2004;

var colors = ["red", "blue", "yellow"];
console.log(book);
console.log(colors[0])

var colors1 = new Array("red", "blue", "yellow")
console.log(colors1[0])