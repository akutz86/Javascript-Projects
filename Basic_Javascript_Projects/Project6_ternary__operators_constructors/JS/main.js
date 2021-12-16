function Ride_Function() { //define ride function
    var Height, Can_Ride; //set variables: height and can-ride
    Height = document.getElementById("Height").value; //use value from HTML file for height
    Can_ride = (Height<52) ? "You are too short":"You are tall enough"; //can-ride is conditional operator based on height
    document.getElementById("Ride").innerHTML = Can_ride + " to ride."; //concentuating and print output from above with "to ride"
}

function Vote_Function() { //define vote function
    var Age, Can_Vote; //set variables: age and can-vote
    Age = document.getElementById("Age").value; //use age value from HTML file
    Can_Vote = (Age<18) ? "You are not old enough to vote":"You can vote!"; //can-vote is conditional operator based on age
    document.getElementById("Vote").innerHTML = Can_Vote; //print output from above 
}

function Vehicle(Make, Model, Year, Color) { //define vehicle variable
    this.Vehicle_Make = Make; //define keyword make
    this.Vehicle_Model = Model; //define keyword model
    this.Vehicle_Year = Year; //define keyword year
    this.Vehicle_Color = Color; //define keyword color
}

var Jack = new Vehicle("Dodge", "Viper", 2020, "Red"); //use keywords for variable Jack('s vehicle)
var Emily = new Vehicle("Jeep", "Trail Hawk", 2019, "White and Black"); //use keyword for variable Emily
var Erik = new  Vehicle("Ford", "Pinto", 1971, "Mustard"); //use keywords for variable Erik
function myFunction() { //definy my-function
    document.getElementById("Keywords_and_Constructors").innerHTML = "Erik drives a " + Erik.Vehicle_Color + "-colored " + Erik.Vehicle_Model +
    " manufactured in " + Erik.Vehicle_Year; //print details about Erik's car using keywords from above and concentuating 
}

function Dog(Breed, Age, Activity) { //define function dog
    this.Dog_Breed = Breed; //define keyword breed
    this.Dog_Age = Age; //define keyword age
    this.Dog_Activity = Activity; //define keyword activity
}

var Mabel = new Dog("Griffon", 3, "high"); //use keywords for variable Mabel
var Rosie = new Dog("Spaniel", 1.5, "medium"); //use keyword for variable Rosie

function dogFunction() { //define dogfunction
    document.getElementById("New_and_This").innerHTML = "Mabel is a " + Mabel.Dog_Breed + " and she is " + Mabel.Dog_Age + " years old. Her activity level is "
    + Mabel.Dog_Activity; //print details about Mabel using keywords
}

function Book(genre, length) { //define function book - this was where I used restricted word but program will not run using restricted word so I changed it
    this.Book_genre = genre; //define keyword genre
    this.Book_length = length; //define keyword length
}

var HarryPotter = new Book("fantasy", "long"); //use keywords for variable Harrypotter
var AnimalFarm = new Book("satire", "short"); //use keywords for variable AnimalFarm

function reserveFunction() { //define reservefunction
    document.getElementById("Reserved").innerHTML = "Harry Potter is a " + HarryPotter.Book_genre + " and it is " + HarryPotter.Book_length + " a long story "; 
    //print info about HarryPotter using keywords
}

function count_Function() { //define countfunction
    document.getElementById("Nested_Function").innerHTML = Count(); //print nested function below
    function Count() { //define nested function count
        var Starting_point = 10; //identifying starting point
        function Multiply_two() {Starting_point *=2;} //define function that multiplies starting point by 2
        Multiply_two(); //multipies starting point by 2
        return Starting_point; //print starting point multiplied by 2
    }
}