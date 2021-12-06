/**
 *    FileName:  menu.js 
 *
 *      Author:  Keenan Srisaeng
 *        Date:  03/12/2021
 *     Version:  File version
 *
 * Description: This JavaScript file holds the functions for
 *              populating the menu used in the pages on the
 *              web site.
 */

 /**
 * Function: Creates html to display a menu and displays it.
 * @precondition: the exement "navbarMenu" exists in the webpage
 * @param no parameters
 * @return no data is returned. Document is updated with nav menu
 */
 function showMenu() {
   "use strict";

   // Completed: This code will generate an html string that
   //           will render a menu system and write it to 
   //           the document.

  var menuItem = [  "A1.html",
                    "A2.html", 
                    "A3.html", 
                    "A4.html", 
                    "A5.html",
                    "A6.html",
                    "A7.html"];

  var pageName = [  " A1 ",
                    " A2 ", 
                    " A3 ", 
                    " A4 ", 
                    " A5 ",
                    " A6 ",
                    " A7 "];

    for (let i = 0; i < pageName.length; i++) {
      var navLink = document.createElement("a");
      var navMenu = document.createElement("li");

      navLink.textContent = pageName[i];
      navLink.setAttribute("href", menuItem[i]);

      navMenu.appendChild(navLink);

      document.getElementById("navbarMenu").appendChild(navMenu);
    }
    
}
