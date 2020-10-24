const url = "https://jsonplaceholder.typicode.com/posts";

const getData = () => {
  fetch(url, {
    method: "GET",
    headers: { "Content-Type": "application/json" },
  })
    .then((res) => res.json())
    .catch((error) => console.error("ERROR:", error))
    .then((response) => console.log("SUCCESS", response));
};

getData();