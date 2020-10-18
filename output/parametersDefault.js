"use strict";

var parameters;

parameters = function parameters(name) {
  var country = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 'no value defined';
  var email = arguments.length > 2 ? arguments[2] : undefined;
  var phone = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : 'no value defined';
  return "the name ".concat(name, ", ").concat(country, ", the email is ").concat(email, " and phone, ").concat(phone);
};

console.log(parameters("name", undefined, "email@gmail.com", undefined));