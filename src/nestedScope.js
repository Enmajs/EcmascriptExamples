const humans = (factor) => {
  const ingredient = (amount, unit, name) => {
    let ingredientAmount = amount * factor;
    ingredientAmount > 1 ? (unit += "s") : "";
    console.log(`${ingredientAmount} ${unit} ${name}`);
  };
  ingredient(1, "can", "lemon");
  ingredient(2, "cup", "garlic");
  ingredient(3, "clove", "cumin");
};

humans(99);