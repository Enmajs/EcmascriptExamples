const personObject = (name, age, sex) => {
    return {
        name,
        age,
        sex,
        showDataPerson(){
            return `my name is ${name}, and ${age}, and ${sex}`
        }
    }
};
console.log(personObject('enma', 99, 'M').showDataPerson());
console.log(personObject('ENMA2', 222,'M'));