const dogs = ["Mabel", "Rosie", "Lucy", "Charlie"]; //create a list to use in the loop function

function Call_Loop() { //create a loop function
    var X = 0; //variable X represents the list order
    var text = ""; //variable text will print the dog names
    while (dogs[X]) { //while loop to cycle through the dog list
        text += dogs[X] + "<br>"; //cycle progressively through the array starting at X=0
        X++; //increment operator
    }
    document.getElementById("Loop").innerHTML = text; //print the dog names
}

function stringlength() { //function for finding length of string variable
    var sentence = "Hi! My name is Amanda."; //create string variable
    var length = sentence.length; //create variable for finding string length
    document.getElementById("sentencelength").innerHTML = length; //print string length
}

var Instruments = ["Guitar", "Drums", "Bass", "Banjo", "Keyboard", "Saxophone"] //create array called instruments
var Content = ""; //create variable as placeholder for each individual instrument name
var Y; //create variable Y to represent array order
function for_Loop() { //create for loop function
    for(Y = 0; Y < Instruments.length; Y++) { //for statement, starting at Y= 0 and with increment operator 
        Content += Instruments[Y] + "<br>"; //addition assignment operator
    }
    document.getElementById("List_of_instruments").innerHTML = Content; //print instrument names
}

function array_Function() { //create array function
    var Dog_Action = []; //name array- Dog_Action
    Dog_Action[0] = "sleeping"; //item 0 of array
    Dog_Action[1] = "eating"; //item 1 ""
    Dog_Action[2] = "barking"; //item 2 ""
    Dog_Action[3] = "running"; //item 3 ""
    Dog_Action[4] = "fetching"; //item 4 ""
    document.getElementById("Array").innerHTML = "Dogs do a variety of things on a daily basis including:" +
    Dog_Action[0] + " and " + Dog_Action[1] + "."; //print sentence including items from array
}

const names = ["Amanda", "Pj", "Mary", "Peter"] //constant variable
function constant_function() { //constant function
    document.getElementById("Constant").innerHTML = names; //print constant variable
}

// const names = ["Mindy", "Pj", "Mary", "Peter", "Jennifer"];
// document.getElementById("Constant");

var M = 20; //define a global variable
document.write("<br>" + M); //write variable M
{
    let M = 40; //use let to change variable m within this block
    document.write("<br>" + M); //write new value of M
}


function r_Function(name) { //define return function
    return "Hello there " + name + "!"; //return this statement
}
document.getElementById("greet").innerHTML = r_Function("Sally"); //write above statement with the name "Sally"

let cat =  { //define object name
    type: "Maine Coon", //object properties
    age: "16", 
    name: "Pip",
    hair: "long",
    description: function() { //method to provide description of the above cat with specified properties
        return "This cat is " + this.name + ", a " + this.age + " year-old " + this.type + " with " + this.hair + " hair.";
    }
};
document.getElementById("Cat_object").innerHTML = cat.description(); //write description

let text1 = ""; 
for (let i = 0; i < 10; i++) { //define when the function will run 
    if (i === 3) { break; } //stop the loop when i = 3 using 'break'
    text1 += "The number is " + i + "<br>"; //this is the loop- write out this statement when i < 3
}
document.getElementById("numbers").innerHTML = text1; //print statement 

let text2 = ""; 
for (let j = 0; j < 10; j++) { //define when the function will run 
    if (j === 3) { continue; } //breaks the iteration in the loop at 3 but then continues the function until the 'for' condition is met
    text2 += "The number is " + j + "<br>"; //this is the loop
}
document.getElementById("numbers1").innerHTML = text2; //print statement