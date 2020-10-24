"use strict";

var url = "https://jsonplaceholder.typicode.com/posts";

var getData = function getData() {
  fetch(url, {
    method: "GET",
    headers: {
      "Content-Type": "application/json"
    }
  }).then(function (res) {
    return res.json();
  })["catch"](function (error) {
    return console.error("ERROR:", error);
  }).then(function (response) {
    return console.log("SUCCESS", response);
  });
};

getData();