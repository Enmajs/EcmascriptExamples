"use strict";

var personObject = function personObject(name, age, sex) {
  return {
    name: name,
    age: age,
    sex: sex,
    showDataPerson: function showDataPerson() {
      return "my name is ".concat(name, ", and ").concat(age, ", and ").concat(sex);
    }
  };
};

console.log(personObject('enma', 99, 'M').showDataPerson());
console.log(personObject('ENMA2', 222, 'M'));