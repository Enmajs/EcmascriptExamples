const arrayPersons = ["person1", "person2", "person3"];

const [namePerson1, namePerson2, namePerson3] = arrayPersons;

console.log(namePerson2);

const showInfo = ([namePerson1, namePerson2]) => {
  console.log(namePerson1, namePerson2);
};

showInfo(arrayPersons);
