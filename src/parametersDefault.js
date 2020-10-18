let parameters;

parameters = (name, country = 'no value defined', email, phone = 'no value defined') => {
  return `the name ${name}, ${country}, the email is ${email} and phone, ${phone}`;
};

console.log(parameters("name", undefined, "email@gmail.com", undefined));
