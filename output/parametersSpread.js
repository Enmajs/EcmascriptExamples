"use strict";

var showData = function showData() {
  for (var _len = arguments.length, data = new Array(_len), _key = 0; _key < _len; _key++) {
    data[_key] = arguments[_key];
  }

  console.log(data);
};

var arrayData = ['enma', 'full stack engineeer'];
showData.apply(void 0, arrayData);