/**
 *    FileName:  a7.js
 *
 *      Author:  Keenan Srisaeng
 *        Date:  03/27/2021
 *     Version:  File version
 *
 * Description: Describe the purpose of this JavaScript file
 *
 */

// Apply innerHTML for Webpage Heading
var header = document.getElementById("header").innerHTML = "<h1>JavaScript Programming</h1>";

// Apply innerHTML for Assignment Number
var assignment = document.getElementById("assignment").innerHTML = "<h2>A7 - Home Page</h2>";

// Apply innerHTML for the Name
var name = document.getElementById("name").innerHTML = "<h3>Keenan Srisaeng</h3>";

// Anonymous function containing variables
(function () {

    // Define variables
    var contacts = {
        "addressBook": [
            {
                "fname": "Ken",
                "lname": "Stan",
                "email": "ken.stan@gmail.com",
            },
            {
                "fname": "John",
                "lname": "Gates",
                "email": "john.gates@outlook.com",
            },
            {
                "fname": "Jonathan",
                "lname": "Connor",
                "email": "j.connor@icloud.com",
            },
            {
                "fname": "Justin",
                "lname": "Traveler",
                "email": "justin.traveler@me.com",
            }
        ]
    };

    // DOM Elements with corresponding variables
    var searchForm = document.getElementById("search-form"),
        searchField = document.getElementById("search-field"),
        showAllButton = document.getElementById("show-all"),
        count = contacts.addressBook.length,
        target = document.getElementById("output");

    // Define address book methods
    var addr = {
    
    	// Search method for searching through address book when event occurs
        search: function (event) {

            var searchValue = searchField.value;	// Copy input value
            event.preventDefault();		// prevent default behavior
            target.innerHTML = "";		// empty target area if there is input
            
            if (count > 0 && searchValue !== "") {
            
            	// Loop to search for contact
                for (var i = 0; i < count; i++) {

                    var obj = contacts.addressBook[i],
                        isItFound = obj.fname.indexOf(searchValue);
                        
                    // If value is less than 1, then search for contact is found    
                    if (isItFound !== -1) {
                        target.innerHTML += '<tr><td>' + obj.fname + 
                        					'</td><td>' + obj.lname + 
                        					'</td><td><a href="mailto:' + 
                        					obj.email + '">' + obj.email + 
                        					'</a></td></tr>';
                    }
                }
            }
        },
        
        // Show all contacts method to show entire address book when event occurs
        showAllContacts: function () {
        
            target.innerHTML = "";		// empty target area if there is input
            
            if (count > 0) {
                for (var i = 0; i < count; i++) {
                    var obj = contacts.addressBook[i];
                    target.innerHTML += '<tr><td>' + obj.fname + 
                    					'</td><td>' + obj.lname + 
                    					'</td><td><a href="mailto:' + 
                    					obj.email + '">' + obj.email + 
                    					'</a></td></tr>';
                }
            }
        }
    } // end of object

    /* Call event listeners */
    searchField.addEventListener("keyup", addr.search, false);
    showAllButton.addEventListener("click", addr.showAllContacts, false);
    searchForm.addEventListener("submit", addr.search, false);
})

();