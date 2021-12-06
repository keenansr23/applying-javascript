/**
 *    FileName:  a2.js
 *
 *      Author:  Keenan Srisaeng
 *        Date:  02/12/2021
 *
 * Description: contains Show and Hide functions to reveal and hide targeted biography description.
 *
 */

/* Show Function */
var button = document.getElementById("show"),
    target = document.getElementById("target");

/* define what we want to do in a function */ 
function show() {
    target.setAttribute("class", "show");
}
/* add to the CSS class when the button is clicked */ 
button.addEventListener("click", show, false);


/* Hide Function */
var button = document.getElementById("hide"),
    target = document.getElementById("target");

/* Hide target */ 
function hide() {
    target.setAttribute("class", "hide");
}
/* add to the CSS class when the button is clicked */ 
button.addEventListener("click", hide, false);

