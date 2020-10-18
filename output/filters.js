"use strict";

var numbers = [3, 4, 5, 7, 9, 12, 15, 200];
var multiplyNumber;
var removeNumber;
var selectNumber = numbers.filter(function (n) {
  return n % 3 === 0;
});

multiplyNumber = function multiplyNumber() {
  console.log(selectNumber);
  selectNumber.forEach(function (element) {
    console.log(element * 3);
  });
};

multiplyNumber();