let names = "  Andrew Mead ";

// Length property
console.log(names.length);

// Convert to upper case
console.log(names.toUpperCase());

// Convert to lower case
console.log(names.toLowerCase());

// Includes method
let password = "abc123asdf098";
console.log(password.includes("password"));

// Trim
console.log(names.trim());

// Challenge area

// isValidPassword
let isValidPassword = function (password) {
  return password.length > 8 && !password.includes("password");
};

console.log(isValidPassword("asdfp"));
console.log(isValidPassword("abc123!@#$%^&"));
console.log(isValidPassword("asdfpasdfpoijpassword"));
