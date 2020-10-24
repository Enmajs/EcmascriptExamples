"use strict";

var getData = function getData() {
  return new Promise(function (resolve, reject) {
    var request = new XMLHttpRequest();
    request.open("GET", "https://jsonplaceholder.typicode.com/posts");

    request.onload = function () {
      if (request.status == 200) {
        resolve(JSON.parse(request.response));
      } else {
        reject();
      }
    };

    request.send();
  });
};

getData().then(function (r) {
  console.log(r);
})["catch"](function () {
  console.log("Error...............");
});