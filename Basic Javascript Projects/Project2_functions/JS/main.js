function my_first_function() { //defining my_first_function
    var str = "Look at me now"; //establishing string variable
    var result = str.fontsize(7); //establishing font size string variable should be printed at
    document.getElementById("largetext").innerHTML = result; //printing string variable at font size set in prior step
} 

function myFunction() { //defining myFunction
    var sentence = "I am leanring"; //establishing variable sentence
    sentence += " a lot from this book"; //adding another part to sentence above
    document.getElementById("Concatenate").innerHTML = sentence; //printing concatenated sentence variables
}

function myFunction1() {
    document.getElementById("demo").innerHTML = "Hi there"
}

function myFunction2(p1,p2) {
    return p1*p2;   
}

document.getElementById("calculation") = myFunction2(4,3);

