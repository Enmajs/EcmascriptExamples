const numbers = [3, 4, 5, 7, 9, 12, 15, 200];

let multiplyNumber;
let removeNumber;
let selectNumber = numbers.filter((n) => n % 3 === 0);

multiplyNumber = () => {
  console.log(selectNumber);
  selectNumber.forEach((element) => {
    console.log(element * 3);
  });
};

multiplyNumber();
