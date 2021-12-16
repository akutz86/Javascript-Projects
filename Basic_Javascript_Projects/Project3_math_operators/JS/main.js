function myFunction() { //define addition function
    var addition = 2+2; //define addition variable, which adds 2 numbers
    document.getElementById("Math").innerHTML = "2+2 = " + addition; //display results of addition
}

function subtraction_function() { //define subtraction function
    var subtraction = 8-3;  //define subtraction variable, which subtracts 2 numbers
    document.getElementById("Math2").innerHTML= "8-3 = " + subtraction; //display subtraction result
}

function multiplication() { //define multiplication function
    var multiply = 10*4; //define multiply variable, which multiplies 2 numbers
    document.getElementById("Math3").innerHTML = "10 x 4 = " + multiply; //display multiply result
}

function division() { //define division function
    var divide = 12/3; //define divide variable, which divides 2 numbers
    document.getElementById("Math4").innerHTML = "12/3 = " + divide; //display result of division
}

function moremath() { //define more math function- multiple operations
    var operation = (5+10)*10/2-5; //define operations variable containing multiple operations
    document.getElementById("Math5").innerHTML = "5 plus 10, multipled by 10, divded in half and then subtracted by 5 = " + operation; //display operation variable
}

function modulus_operator() { //define modulus operator
    var simple_math = 28%5; //define variable simple_math which include a modulus operator
    document.getElementById("Math6").innerHTML= "when you divide 25 by 6 you have a remainder of: " + simple_math; //display simple math variable
}

function negation_Operator() { //define negation operator
    var x = 10; //define variable x
    document.getElementById("Math7").innerHTML = -x; //display negative value of x
}

var m = 15; //create variable M
m++; //increment m
var y = 5.75; //create variable y
y--; //decrement y
document.write(m, y); //Print variables m and y. How do I add a space????

window.alert(Math.random() * 10); //print a random number between 0 and 10

document.write(Math.PI); //print PI- still no spaces