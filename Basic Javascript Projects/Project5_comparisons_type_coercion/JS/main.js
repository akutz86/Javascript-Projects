document.write(typeof "Hello world"); //print a string value 
document.write (typeof 100); //print a numeric value

document.write("100" + 0); //concentuate 100 and 0

function my_Function() { //define my_Function
    document.getElementById("Test").innerHTML = 0/0; //will output NaN
    document.getElementById("Test1").innerHTML = isNaN("this is a string"); //will return 'string' b/c that is the variable type
    document.getElementById("Test2").innerHTML = isNaN('9'); //will return 'number' b/c that is the variable type here
}

document.write(3E355); //will print 'infinity'
document.write(-10E1000); //will print 'negative infinity'

document.write(10000 > 1); //will print 'true' as this statement is true
document.write(5 > 6); //will print 'false' as this statement is false

console.log(8*10); //will print '80' in the console log
console.log(5>6); //will print 'false' in the console log

document.write(10==10); //will print 'true' as this statement is true
document.write(1==10); //will print 'false' as this statement is false

X= 10; //define variable x
Y = 10;//define variable y
document.write(X===Y); //will print 'true' as the data type and values match

A=11; //define variable A
B= "Cats are cute"; //define variable B
document.write(A===B); //will print 'false' as both data type and value do not match

C = 2000; //define variable C
D = "2000"; //define variable D
document.write(C===D); //will print 'false' as data type differs even though data is same

E = 50; //define variable E
F = 5; //define variable F
document.write(E===F); //will print 'false' as data values differ even though data type is the same

document.write(8>4 && 12>8); //AND function which returns 'true'
document.write(4>8 && 12>8); //AND function which returns 'false

document.write(4>8 || 12>8); //OR function which returns 'true'
document.write(4>8 || 8>12); //OR function which returns 'false'

function not_Function() { //defining first NOT function
    document.getElementById("Not").innerHTML = !(12>8); //NOT fucntion which returns 'false'
}

function not_Function1() { //defining second NOT function
    document.getElementById("Not1").innerHTML = !(8>12); //NOT function which returns 'true'
}