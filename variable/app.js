let val;

//Number to String
val = String(3 + 4);

//Boolean to String 
val = String(true);

//Date to String
val = String(new Date());

//Array to String
val = String([1, 2, 3]);

val = (5).toString();

//String to number

val = Number('5');

val = parseInt('4');
val = parseFloat('4.25');

//Output
console.log(val);
console.log(typeof val);
//only works for string
//console.log(val.length);

//only works for number
console.log(val.toFixed());