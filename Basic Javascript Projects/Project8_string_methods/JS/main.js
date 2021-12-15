function full_Sentence() { //define function full sentence
    var string_1 = "Mary"; //string var 1
    var string_2 = " had"; //string var 2
    var string_3 = " a little"; //string var 3
    var string_4 = " lamb"; //string var 4
    var sentence = string_1.concat(string_2,string_3,string_4); //concatenate string variables 1-4
    document.getElementById("Concatenate").innerHTML = sentence; //print full sentence from concatenated string variables
}

function slice_Method() { //define slice function
    var Sentence = "Mary had a little lamb whose fleece was white as snow."; //define sentence variable
    var Section = Sentence.slice(18,22); //identify section of sentence to utilize
    document.getElementById("Slice").innerHTML = Section; //print section of string
}

function uc_Method() { //define uppercase function
    let text = "Good Evening"; //define text variable
    let result = text.toUpperCase(); //use toUpperCase to make above text present in upper case
    document.getElementById("UC").innerHTML = result; //print text in upper case
}

function search_Method() { //define search function
    let text = "Mary had a little lamb whose fleece was white as snow."; //define text variable 
    let position = text.search("lamb"); //use text.search to provide position of the word 'lamb' in the above sentence
    document.getElementById("search").innerHTML = position; //print position of word 'lamb'
}

function string_Method() { //define string method function
    var A = 86; //define variable A, a number
    document.getElementById("Number_to_string").innerHTML = A.toString(); //convert variable A from a number to a string variable 
}

function preciscion_Method() { //define precision method
    var B = 1204.23948329847239; //define variable B a number with many decimal places
    document.getElementById("Precision").innerHTML = B.toPrecision(5); //format variable B to show only the length of 5
}
function roundnumber() { //define function roundnumber
    let num = 8.928937987; //define variable "num"
    let n = num.toFixed(2); //use toFixed to round variable above to 2 digits
    document.getElementById("round").innerHTML = n; //print rounded variable
}

function stringfunction() { //define function stringfunction
    let text = "Good evening"; //define variable text
    let result = text.valueOf(); //use valueof to get primitive value of a string object
    document.getElementById("value").innerHTML = result; //print primitive value of string
}