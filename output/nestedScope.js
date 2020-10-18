"use strict";

var humans = function humans(factor) {
  var ingredient = function ingredient(amount, unit, name) {
    var ingredientAmount = amount * factor;
    ingredientAmount > 1 ? unit += "s" : "";
    console.log("".concat(ingredientAmount, " ").concat(unit, " ").concat(name));
  };

  ingredient(1, "can", "lemon");
  ingredient(2, "cup", "garlic");
  ingredient(3, "clove", "cumin");
};

humans(99);