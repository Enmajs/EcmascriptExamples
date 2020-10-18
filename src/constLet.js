const arrayFrontend = ["c#", "reactjs", "angular"];

const arrayBackend = ["c#", "java", "python"];

const valueSearch = "js";

let functionHello;
let multiplyFunction;

arrayFrontend.forEach((element) => {
  const foundItemFront = arrayFrontend.find((element) =>
    element.includes("js")
  );
  console.log(foundItemFront);
  console.log(names());
});

function names() {
  const materials = ["hidrogen", "helium"];

  let mapping = materials.map((m) => m.toString());

  mapping.push("simple", "easy");
  return mapping;
}

functionHello = () => {
  console.log("function arrow");
};

functionHello();

const multiplyES6 = (x, y) => {
  return x * y;
};

document
  .getElementById("buttonMultiply")
  .addEventListener("click", function () {
    const result = multiplyES6(30, 30);
    alert(result);
  });

  