const objectPerson = {
  name: "person1",
  age: 23,
  profession: "software engineeer",
  country: "colombia",
};

const { name, age, profession, country } = objectPerson;

const showInfo = ({ name, age, profession, country }) => {
  console.log(
    `my names is ${name}, my age ${age} from ${country}, i am ${profession}`
  );
};

showInfo(objectPerson);
