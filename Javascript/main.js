console.log('Hello world!');
// var let const
//primitive variable typess - string, number, boolean, null, undefined, symbol
let name = 'John';
const age = 31;
const flag = true;
//console.log(age, flag, name)
//console.log(typeof(name))

//console.log("My name is "+name)
//use ticks for followin.. can go directly to console log
const d = `my name is ${name} and I am ${age}`
//console.log(d)
//string methods - s.length(), s.toUpperCase(), s.substring()
const s = "Hello Hello!"
//console.log(s.length, s.split(''), s.substring(0,5))

/* multi line comment */
//Arrays - multiple values, they are zero based like python
const numbers = new Array(1,2,3,4,5)
//console.log(numbers)

//more common way - can assign new values even if const
const fruits = ['apples',1,true, 'oranges', 'bananas'];
fruits.push('pears');
fruits.unshift('papaya')
//console.log(fruits);
//console.log(Array.isArray(fruits))
//console.log(fruits.indexOf(true))

// Object literals - like dictionary
const person = {
    firstName: 'John',
    lastName: 'Doe',
    age: 30,
    hobbies: ['music', 'movies'],
    address: {
        street: 'lincoln av',
        city: 'Boston',
        state: 'MA'
    }
}
//console.log(person.firstName, person.lastName, 
 //   person.hobbies[1], person.address.city)
//pulling out values from object literals
const {firstName, lastName, address:{city}} = person;  
//console.log(firstName, city)  
person.email = 'john@gmail.com'

//arrays of objects
const todos = [
    {
        id:1,
        text:'Take out trash',
        isCompleted: true
    },
    {
        id:2,
        text:'Meeting',
        isCompleted: true
    },
    {
        id:3,
        text:'Appointment',
        isCompleted: false
    }
];
//console.log(todos[1].text)

//Json -- bit different from other https://www.freeformatter.com/json-formatter.html
const todoJSON = JSON.stringify(todos)
//console.log(todoJSON)

//for loop
for(let i =0;i<5;i++){
    //console.log(`For loop ${i}`)
}
//while loop
let i = 0;
while(i<5){
    //console.log(`For loop ${i}`)
    i++;
}

//loop through array
//can do using for loop
for(let i = 0;i<todos.length; i++){
  //  console.log(todos[i].text);  
}

for(let todo of todos){
//    console.log(todo.text)

}

//suggested method --array methods forEach, map, filter
todos.forEach(function(todo){
//    console.log(todo.text);
});
const todoText = todos.map(function(todo){
    return todo.text;
});
//console.log(todoText);
const todoCompleted = todos.filter(function(todo){
    return todo.isCompleted == true;
});
//console.log(todoCompleted[0]);

//chain
const todoCompletedText = todos.filter(function(todo){
    return todo.isCompleted == true;
}).map(function(todo){
    return todo.text;
}) 
//console.log(todoCompletedText)

//Conditinal =: assign, ==:check value, ===:check value and type
const x =11;

if(x === 10){
    //console.log('x is 10')
} else {
    //console.log('x is not 10')
}
//multiple conditions -- or:||, and:&&, ternary operator
//ternary operator --to assign value based on condition
const color = x > 10 ? 'yellow' : 'blue';
//console.log(color)

//switch
switch(color) {
    case 'red': 
        //console.log('color is red');
        break;
    case 'blue':
        //console.log('color is blue');
        break;
    default:
        //console.log('color is not red or blue')
        break;
}

//FUNCTIONS
function addNums(num1 = 0, num2 = 0) {
    //console.log(num1+num2)
    return num1 + num2;
}
addNums();addNums(2,3)
//console.log(addNums(3,4))

//ARROW Functions
const addNums2 = (num1= 1, num2 = 1) => num1 +num2
//console.log(addNums2(4,5))
const addNums3 = num1 => num1 +5
//console.log(addNums3(4))

//todos.forEach(todo => console.log(todo.text))

//Lexical This keyword

//OOP - constructor function
function Person(firstName, lastName, dob){
    this.firstName = firstName;
    this.lastName = lastName;
    this.dob = dob;
    this.dob_date = new Date(dob); //date method to convert string to date
    this.getBirthYear = function() {
        return this.dob_date.getFullYear();
    }
    this.getFullName = (x = this.firstName, y = this.lastName) => `${x} ${y}`;
}
// Instantiate object
const person1  = new Person('John', 'Doe', '1-1-2001', '1-1-2001')
//console.log(person1, person1.firstName, person1.dob_date.getFullYear())
//add method to object
console.log(person1.getBirthYear())
console.log(person1.getFullName())




