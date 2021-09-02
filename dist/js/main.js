"use strict";

// Navigation
var pickedCohort = 'all';
var pickedProgram = 'all';
var allStudents = document.querySelectorAll('.student');
var cohortPickerItems = document.querySelectorAll('.cohort-picker li');
var programPickerItems = document.querySelectorAll('.program-picker li');
cohortPickerItems.forEach(function (item) {
  item.addEventListener('click', function () {
    var currentCohortItem = document.querySelector('.cohort-picker .active');
    if (currentCohortItem === this) return;
    currentCohortItem.classList.remove('active');
    this.classList.add('active');
    console.log('pickedCohort', pickedCohort);
    pickedCohort = this.dataset.cohort;
    showHideStudents();
  });
});
programPickerItems.forEach(function (item) {
  item.addEventListener('click', function () {
    var currentProgramItem = document.querySelector('.program-picker .active');
    if (currentProgramItem === this) return;
    currentProgramItem.classList.remove('active');
    this.classList.add('active');
    console.log('pickedProgram', pickedProgram);
    pickedProgram = this.dataset.program;
    showHideStudents();
  });
});

var showHideStudents = function showHideStudents() {
  allStudents.forEach(function (student) {
    if ((student.dataset.program === pickedProgram || 'all' === pickedProgram) && (student.dataset.cohort === pickedCohort || 'all' === pickedCohort)) {
      // show!
      student.style.display = 'flex';
    } else {
      // hide!
      student.style.display = 'none';
    }
  });
}; // Silly animations up top


var bigLetters = document.querySelectorAll('.big-letter');
bigLetters.forEach(function (letter) {
  letter.addEventListener('mouseenter', function () {
    if (letter.classList.contains('animate')) return;
    letter.classList.add('animate');
    setTimeout(function () {
      letter.classList.remove('animate');
    }, 1000);
  });
});
setInterval(function () {
  var letter = bigLetters[Math.floor(Math.random() * bigLetters.length)];
  if (letter.classList.contains('animate')) return;
  letter.classList.add('animate');
  setTimeout(function () {
    letter.classList.remove('animate');
  }, 1000);
}, 3000);
//# sourceMappingURL=main.js.map
