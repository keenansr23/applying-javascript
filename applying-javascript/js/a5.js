/**
 *    FileName:  a5.js
 *
 *      Author:  Keenan Srisaeng
 *        Date:  03/12/21
 *     Version:  File version
 *
 * Description: This file is using JavaScript to create the header for
 *				A4.html using targeting by ID inside the header attribute.
 *
 */

// Apply innerHTML for Webpage Heading
var header = document.getElementById("header").innerHTML = "<h1>JavaScript Programming</h1>";

// Apply innerHTML for Assignment Number
var assignment = document.getElementById("assignment").innerHTML = "<h2>A5 - Home Page</h2>";

// Apply innerHTML for the Name
var name = document.getElementById("name").innerHTML = "<h3>Keenan Srisaeng</h3>";

// Declare variables
var outputMiles = document.getElementById("resultMiles");
var convertCard = document.getElementById("kmConvert");

// Placeholders
var km = 0;
var miles = 0;

// Event listener for converting Centimeters to Miles
convertCard.addEventListener("input", function() {
    km = document.querySelector("#kmConvert").value;
    if (isNaN(km)) {
        outputMiles.innerHTML = "Not a valid number.";
    } else {
        miles = kmConvert(km);
        updateKilometer(km, miles);
    }
})

// Kilometers convert to miles
function kmConvert(km) {
    miles = km / 1.609;
    return miles;
}

// Update
function updateKilometer(km, miles) {
    outputMiles.innerHTML = km + "km(s) = " + miles.toFixed(2) + " mile(s)";
}


// JSON Object 5.14 Listing
var favoriteSandwiches = {

    "breakfast" : [
        {
            "name": "Egg, Sausage and Cheese",
            "bread": "English Muffin"
        },
        {
            "name": "Egg Whites on Flatbread",
            "bread": "Flatbread"
        }
    ],

    "lunch": [
        {
            "name": "Turkey Club",
            "bread": "Wheat Bread"
        },
        {
            "name": "Grilled Cheese",
            "bread": "White Bread"
        }
    ],

    "dinner": [
        {
            "name": "Meatball",
            "bread": "Kaiser Roll"
        },
        {
            "name": "Hamburger",
            "bread": "Hamburger Roll"
        }
    ],
};

/* Go to dinner and get the name of the first item */
alert(favoriteSandwiches); // Call [object Object]

/* Stringify the JSON object first */
var stringObject = JSON.stringify(favoriteSandwiches);

/* Add the string object to localStorage */
localStorage.setItem("favoriteSandwiches", stringObject);

/* Alert view [object Object] again */
alert(stringObject);

var storedItems = localStorage.getItem("favoriteSandwiches");
alert(storedItems);

var convertObject = JSON.parse(storedItems);
alert(convertObject);