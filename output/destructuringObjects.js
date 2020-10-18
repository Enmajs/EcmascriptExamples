"use strict";

var objectPerson = {
  name: "person1",
  age: 23,
  profession: "software engineeer",
  country: "colombia"
};
var name = objectPerson.name,
    age = objectPerson.age,
    profession = objectPerson.profession,
    country = objectPerson.country;

var showInfo = function showInfo(_ref) {
  var name = _ref.name,
      age = _ref.age,
      profession = _ref.profession,
      country = _ref.country;
  console.log("my names is ".concat(name, ", my age ").concat(age, " from ").concat(country, ", i am ").concat(profession));
};

showInfo(objectPerson);