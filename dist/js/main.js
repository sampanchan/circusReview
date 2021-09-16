"use strict";

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && Symbol.iterator in Object(iter)) return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

// Navigation
var pickedCohort = 'all';
var pickedProgram = 'all';
var allStudents = document.querySelectorAll('.student');
var allStudentSpacers = document.querySelectorAll('.student-spacer');
var cohortPickerItems = document.querySelectorAll('.cohort-picker li');
var programPickerItems = document.querySelectorAll('.program-picker li');
cohortPickerItems.forEach(function (item) {
  item.addEventListener('click', function () {
    if (pickedCohort === this.dataset.cohort) return;
    pickedCohort = this.dataset.cohort;
    var currentCohortItems = document.querySelectorAll('.cohort-picker .active');
    currentCohortItems.forEach(function (item) {
      return item.classList.remove('active');
    });
    var newCohortItems = document.querySelectorAll(".cohort-picker li[data-cohort=".concat(pickedCohort, "]"));
    newCohortItems.forEach(function (item) {
      return item.classList.add('active');
    });
    console.log('pickedCohort', pickedCohort);
    showHideStudents();
  });
});
programPickerItems.forEach(function (item) {
  item.addEventListener('click', function () {
    if (pickedProgram === this.dataset.program) return;
    pickedProgram = this.dataset.program;
    var currentProgramItems = document.querySelectorAll('.program-picker .active');
    currentProgramItems.forEach(function (item) {
      return item.classList.remove('active');
    });
    var newProgramItems = document.querySelectorAll(".program-picker li[data-program=".concat(pickedProgram, "]"));
    newProgramItems.forEach(function (item) {
      return item.classList.add('active');
    });
    console.log('pickedProgram', pickedProgram);
    showHideStudents();
  });
});

var showHideStudents = function showHideStudents() {
  [].concat(_toConsumableArray(allStudents), _toConsumableArray(allStudentSpacers)).forEach(function (item) {
    if ((item.dataset.program === pickedProgram || 'all' === pickedProgram) && (item.dataset.cohort === pickedCohort || 'all' === pickedCohort)) {
      // show!
      item.style.display = 'flex';
    } else {
      // hide!
      item.style.display = 'none';
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
}, 3000); // student photo animations

allStudents.forEach(function (student) {
  var photos = student.querySelectorAll('figure img');
  var currentPhotoIndex = 0;
  var intervalID = -1;

  var changeImage = function changeImage() {
    currentPhotoIndex++;

    if (currentPhotoIndex === photos.length) {
      currentPhotoIndex = 0;
    }

    console.log('hit');
    photos.forEach(function (photo, i) {
      console.log('hit', i);
      photos[i].classList.add('hide');
      photos[i].classList.remove('show');

      if (i === currentPhotoIndex) {
        console.log('match', i);
        photos[i].classList.remove('hide');
        photos[i].classList.add('show');
      }
    });
  };

  student.querySelector('.student-content').addEventListener('mouseenter', function () {
    changeImage();
    intervalID = setInterval(changeImage, 500);
  });
  student.querySelector('.student-content').addEventListener('mouseleave', function () {
    clearInterval(intervalID);
    currentPhotoIndex = 0;
    photos.forEach(function (photo, i) {
      photos[i].classList.remove('show');
      photos[i].classList.remove('hide');
    });
  });
});
//# sourceMappingURL=main.js.map
