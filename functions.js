/***********************************************
//        CMSC 100 - Exercise 3               //
//                                            //
//        Name: Jonas R. Atienza              //
//        Student Number: 2020-03270          //
//        Section: UV-7L                      //
//        Date: March 17, 2023                //
//                                            //
***********************************************/

import {appendFileSync} from 'node:fs';
import {v4} from 'uuid';
import validator from 'validator';

const generateUniqueID = (firstName, lastName) => {
    // Concat $firstName$lastName$generatedUUID
    return `${firstName[0].toLowerCase()}${lastName.toLowerCase()}${v4().replace(/-/g, '').slice(0, 8)}`;
};

const addAccount = (inputAccount) => {
    const [firstName, lastName, email, age] = inputAccount; // Destructure array

    // Validate inputs
    if (firstName && lastName && email && typeof firstName === 'string' && typeof lastName === 'string' && typeof email === 'string' && validator.isEmail(email)) {
        if (typeof age === 'number' && age >= 18) { // Check age
          // Generate userdata
          const userData = `${firstName},${lastName},${email},${age},${generateUniqueID(firstName, lastName)}\n`;

          // Save data to file
          try {
            appendFileSync('users.txt', userData);
            console.log('User data saved to file');
            return true;
          } catch (err) {
            // Error handling as per nodejs docs
            console.error(err);
            return false;
          }
        }
    } return false;
};

export {generateUniqueID, addAccount};
