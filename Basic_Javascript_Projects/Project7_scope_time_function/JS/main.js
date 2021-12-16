var Y = 20 //define global variable Y
function Multiply_Numbers() { //define first function using Y
    document.write(2*Y + "<br>"); //use global variable Y in equation and write output
}

function Add_Numbers() { //define second function using Y
    document.write(2 + Y + "<br>"); //use global variable Y in another equation and write output
}
Multiply_Numbers(); //execute first function
Add_Numbers(); //execute second function





function get_month() { //define function for conditional statement
    if(new Date().getMonth() > 5) { //conditional statement 
        document.getElementById("Greeting").innerHTML = "It is later in the year than May"; //print this if conditional statement is true
    }
}

if (8<12) { //conditional "if" statement
    document.write("The right number is larger than the left number. <br>"); //if above is true output this
}

function Height_Function() { //define height function
    Height = document.getElementById("Height").value; //define height as the variable input by user
    if(Height >= 48) { //conditional statement 
        Height = "You are tall enought to ride!"; //output if conditional statement is true
    }
    else { //else statement for when conditional statement is false
        Height = "You are not tall enough to ride!"; //output if conditional statement is false
    }
    document.getElementById("How_tall_are_you?").innerHTML = Height; //output one of the above statements 
}

function Time_Function() { //define time function
    var Time = new Date() .getHours(); //define variable time
    var Reply; //define variable reply
    if (Time < 12 == Time > 0) { //conditional statement if time is morning
        Reply = "It is morning time!";  //output if time is morning
    }
    else if (Time >= 12 == Time < 18) { //middle conditional statement (else if) if time is afternoon
        Reply = "It is afternoon"; //output if time is afternoon
    }
    else { //final conditional (else) if time is evening
        Reply = "It is evening time."; //output if time is evening
    }
    document.getElementById("Time_of_day").innerHTML = Reply; //print relevant reply based on which conditional statement is fulfilled
}

//had to move this section because it stops the rest of the code. 
function Multiply_Numbers_1() { //define first function using X
    var X = 12; //define local variable X
    document.write(2*X + "<br>"); //use local variable X in equation and write output
}
function Add_Numbers_1() { //define second function using x
    document.write(8 + X + "<br>"); //use local variable X in another equation, which will not work w this function because it is a local variable associated with the function above
}
Multiply_Numbers_1();//execute first function
Add_Numbers_1();//execute second function (which will not run)

function Multiply_Numbers_2() { //define first function using Z- note to get this to run 
    var Z = 4; //define local variable Z
    console.log(6*Z); //show output in console
}
function Add_Numbers_2() { //define second function using Z
    console.log(Z + 6); //show output (error in this case) in console 
}
Multiply_Numbers_2(); //exceute first function
Add_Numbers_2(); //execute second function
