/**
 *    FileName:  a6.js
 *
 *      Author:  Keenan Srisaeng
 *        Date:  03/21/2021
 *     Version:  File version
 *
 * Description: Describe the purpose of this JavaScript file
 *
 */

// Apply innerHTML for Webpage Heading
var header = document.getElementById("header").innerHTML = "<h1>JavaScript Programming</h1>";

// Apply innerHTML for Assignment Number
var assignment = document.getElementById("assignment").innerHTML = "<h2>A6 - Home Page</h2>";

// Apply innerHTML for the Name
var name = document.getElementById("name").innerHTML = "<h3>Keenan Srisaeng</h3>";

// Declare arrays for data
var fName = ["Keenan", 
			"Robert",
			"Kathryn",
			"Lilly",
			"Brittni"],
	
lName = ["Srisaeng",
			"Peterson",
			"Gilbertson",
			"Matz",
			"Black"],
	
email = ["keenan.srisaeng@gmail.com",
			"robert.peterson@outlook.com",
			"kathy.gilbertson@yahoo.com",
			"lilly.matz@me.com",
			"brittni.black@icloud.com"];
	
// For Loop to create JSON object using multiple arrays
const contactArray = (fName, lName, email) => {

    const contacts = [];

    for(let i = 0; i < fName.length; i++) {
        contacts.push({
            Firstname: fName[i],
            Lastname: lName[i],
            Email: email[i]
        });
    };

    return contacts;
}

const contacts = contactArray(fName, lName, email);

// Function to create data table
function createTable(table, data) {
    for (let element of data) {
      let row = table.insertRow();
      for (key in element) {
        let cell = row.insertCell();
        let text = document.createTextNode(element[key]);
        cell.appendChild(text);
      }
    }
}

// Function to create table header on contact data in JSON object
function createTableHeader(table, data) {
    let theader = table.createTHead();
    let row = theader.insertRow();

    for (let key of data) {
      let th = document.createElement("th");
      let text = document.createTextNode(key);
      th.appendChild(text);
      row.appendChild(th);
    }
}

// Declare table
let table = document.querySelector("table");
let data = Object.keys(contacts[0]);
