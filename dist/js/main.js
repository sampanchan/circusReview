"use strict";

console.log(" \nChange this message, and make sure it changes in the browser \nto verify that you're working in the right files.");
document.querySelectorAll('.big-letter').forEach(function (letter) {
  letter.addEventListener('mouseenter', function () {
    letter.classList.add('animate');
    setTimeout(function () {
      letter.classList.remove('animate');
    }, 1000);
  });
});
//# sourceMappingURL=main.js.map
