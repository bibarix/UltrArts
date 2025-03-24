/*
 * Student Name: Badr Eddine Amatoch
 * Student ID: 041180238
 * Course: CST8117 - Cross-Platform Web Design
 * Semester: 1
 * Assignment: Online Store Part 3
 * Date Submitted: 3/24/2025
 */

/**
 * I created this function to check if a given string is a valid email address.
 * The function follows specific rules to determine validity.
 *
 * @param {string} email The string to validate.
 * @returns {boolean} True if the email is valid, false otherwise.
 */
function isValidEmail(email) {
  // First, I check if the input is actually a string
  if (typeof email !== 'string') {
      return false;
  }

  const atSymbolIndex = email.indexOf('@');
  const lastDotIndex = email.lastIndexOf('.');

  // I make sure the email has exactly one '@' and that it's placed correctly
  if (atSymbolIndex < 2 || atSymbolIndex !== email.lastIndexOf('@') || atSymbolIndex > email.length - 6) {
      return false;
  }

  // I ensure that there's at least one '.' after the '@'
  if (lastDotIndex <= atSymbolIndex) {
      return false;
  }

  // The last '.' must be at least two characters before the end
  if (lastDotIndex >= email.length - 2) {
      return false;
  }

  // I use a regular expression to check that the email contains only allowed characters
  if (!/^[a-zA-Z][a-zA-Z0-9._-]*@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(email)) {
      return false;
  }

  return true;
}

/*
* Sources:
* - I used MDN Web Docs to learn about regular expressions: 
*   https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Regular_expressions
* - I also referred to JavaScript string methods documentation:
*   https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/indexOf
*/

// Here, I test my isValidEmail function with different cases to make sure it works correctly
console.log(isValidEmail("myEmail1@email.com")); // true
console.log(isValidEmail("my.Email1@e-mail.com")); // true
console.log(isValidEmail("myEmail1@email.c")); // false
console.log(isValidEmail("m@email1.com")); // false
console.log(isValidEmail(1)); // false
console.log(isValidEmail(true)); // false
console.log(isValidEmail("myEmail1@com")); // false
console.log(isValidEmail("my_Email1@e.com")); // true
console.log(isValidEmail("1m@email.com")); // false
console.log(isValidEmail("my!Email@email.com")); // false

/**
* I created this function to determine if a person is of legal age (18 or older)
* based on their birth date.
*
* @param {number} birthYear The year of birth (YYYY).
* @param {number} birthMonth The month of birth (1-12).
* @param {number} birthDay The day of birth (1-31).
* @returns {boolean} True if the person is 18 or older, false otherwise.
*/
function isAgeOfMajority(birthYear, birthMonth, birthDay) {
  // First, I validate the input parameters to make sure they are numbers and within the correct ranges
  if (typeof birthYear !== 'number' || birthYear < 1920 || birthYear > 2010) {
      return false;
  }
  if (typeof birthMonth !== 'number' || birthMonth < 1 || birthMonth > 12) {
      return false;
  }
  if (typeof birthDay !== 'number' || birthDay < 1 || birthDay > 31) {
      return false;
  }

  // I create a Date object for today
  const TODAY = new Date();

  // I create a birthdate object using the Date constructor
  // The month is 0-based, so I subtract 1 from birthMonth
  const birthdate = new Date(birthYear, birthMonth - 1, birthDay);

  // I check if the birthdate is valid
  if (isNaN(birthdate.getTime())) {
      return false;
  }

  // Now, I calculate the age
  let age = TODAY.getFullYear() - birthdate.getFullYear();
  const hasHadBirthdayThisYear =
      TODAY.getMonth() > birthdate.getMonth() ||
      (TODAY.getMonth() === birthdate.getMonth() && TODAY.getDate() >= birthdate.getDate());

  // If the person hasn't had their birthday yet this year, I subtract one year from the age
  if (!hasHadBirthdayThisYear) {
      age--;
  }

  return age >= 18;
}

/*
* Sources:
* - I used MDN Web Docs to understand how Date objects work: 
*   https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date
* - I used getTime() to calculate the difference in time:
*   https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date/getTime
*/

// Here, I test my isAgeOfMajority function with different cases to ensure it works correctly
console.log(isAgeOfMajority(2005, 2, 25)); // true – just old enough
console.log(isAgeOfMajority(1997, 2, 29)); // false – not a leap year
console.log(isAgeOfMajority(2008, 5, 1)); // false
console.log(isAgeOfMajority(2000, 1, 1)); // true
console.log(isAgeOfMajority(1980, 12, 31)); // true
console.log(isAgeOfMajority("1980", "12", 31)); // false – wrong data type in parameter

// hamburger menu

document.addEventListener('DOMContentLoaded', function() {
  const hamburgerIcon = document.querySelector('.hamburger-icon');
  const navMenu = document.querySelector('header nav'); 

  if (hamburgerIcon && navMenu) {
      hamburgerIcon.addEventListener('click', () => {
          navMenu.classList.toggle('open');
          hamburgerIcon.classList.toggle('open'); 
      });
  } else {
      console.log("Hamburger icon or navigation menu not found!");
  }
});

