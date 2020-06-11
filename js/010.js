const firstName = 'William';
const lastName = 'Johnson';
let val;

//Concatenation
val = firstName + '  ' + lastName;

//Append
val = 'Brad ';
val += 'Traversy';

//Escaping
val = "I can't wait";
val = 'I can\'t wait';

//length
val = firstName.length;

//concat
val = firstName.concat(' ', lastName);

//Change case

//

val = firstName.lastIndexOf('l');

val = firstName.charAt(2);

//substr
val = firstName.substring(0, 3);
val = firstName.slice(-2);

//split
const str = 'hello my friend';
val = str.split(' ');
val = str.includes('llo');
console.log(val);

html = `
            <ul>
                <li>${firstName}</li>
            </ul>
        `;