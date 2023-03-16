/***********************************************
//        CMSC 100 - Exercise 3               //
//                                            //
//        Name: Jonas R. Atienza              //
//        Student Number: 2020-03270          //
//        Section: UV-7L                      //
//        Date: March 17, 2023                //
//                                            //
***********************************************/

import {generateUniqueID, addAccount} from "./functions.js";

console.log(generateUniqueID("Alan", "Turing"));
console.log(generateUniqueID("Ted", "Nelson"));

console.log(addAccount(['Alan', 'Turing', 'aturing@w3c.com', 58]));
console.log(addAccount(['Ted', 'Nelson', 'ted@w3c.com', 43]));