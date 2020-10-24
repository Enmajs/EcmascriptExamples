const getData = () => {
  return new Promise((resolve, reject) => {
    const request = new XMLHttpRequest();
    request.open("GET", "https://jsonplaceholder.typicode.com/posts");

    request.onload = () => {
      if (request.status == 200) {
        resolve(JSON.parse(request.response));
      } else {
        reject();
      }
    };
    request.send();
  });
};

getData()
  .then((r) => {
    console.log(r);
  })
  .catch(() => {
    console.log("Error...............");
  });
