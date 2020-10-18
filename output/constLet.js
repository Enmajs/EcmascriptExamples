"use strict";

var arrayFrontend = ["c#", "reactjs", "angular"];
var arrayBackend = ["c#", "java", "python"];
var valueSearch = "js";
var functionHello;
var multiplyFunction;
arrayFrontend.forEach(function (element) {
  var foundItemFront = arrayFrontend.find(function (element) {
    return element.includes("js");
  });
  console.log(foundItemFront);
  console.log(names());
});

function names() {
  var materials = ["hidrogen", "helium"];
  var mapping = materials.map(function (m) {
    return m.toString();
  });
  mapping.push("simple", "easy");
  return mapping;
}

functionHello = function functionHello() {
  console.log("function arrow");
};

functionHello();

var multiplyES6 = function multiplyES6(x, y) {
  return x * y;
};

document.getElementById("buttonMultiply").addEventListener("click", function () {
  var result = multiplyES6(30, 30);
  alert(result);
});