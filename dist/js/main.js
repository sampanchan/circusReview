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
var featuredStudents = document.querySelectorAll('.featured-person');
var intervalID = -1;
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
    console.log('analytics event', 'cohort_picked', pickedCohort);
    gtag('event', 'cohort_picked', {
      cohort: pickedCohort
    });
    showHideStudents();
    gsap.to(window, {
      duration: 1,
      scrollTo: 15 / 24 * window.innerWidth,
      delay: 0.5,
      ease: 'power1.inOut'
    });
    newCohortItems.forEach(function (item) {
      item.classList.add('clicked');
      setTimeout(function () {
        return item.classList.remove('clicked');
      }, 100);
      setTimeout(function () {
        return item.classList.add('clicked');
      }, 200);
      setTimeout(function () {
        return item.classList.remove('clicked');
      }, 300);
      setTimeout(function () {
        return item.classList.add('clicked');
      }, 400);
      setTimeout(function () {
        return item.classList.remove('clicked');
      }, 500);
      setTimeout(function () {
        return item.classList.add('clicked');
      }, 600);
      setTimeout(function () {
        return item.classList.remove('clicked');
      }, 700);
    });
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
    console.log('analytics event', 'program_picked', pickedProgram);
    gtag('event', 'program_picked', {
      cohort: pickedProgram
    });
    showHideStudents();
    gsap.to(window, {
      duration: 1,
      scrollTo: 15 / 24 * window.innerWidth,
      delay: 0.5,
      ease: 'power1.inOut'
    });
    newProgramItems.forEach(function (item) {
      item.classList.add('clicked');
      setTimeout(function () {
        return item.classList.remove('clicked');
      }, 100);
      setTimeout(function () {
        return item.classList.add('clicked');
      }, 200);
      setTimeout(function () {
        return item.classList.remove('clicked');
      }, 300);
      setTimeout(function () {
        return item.classList.add('clicked');
      }, 400);
      setTimeout(function () {
        return item.classList.remove('clicked');
      }, 500);
      setTimeout(function () {
        return item.classList.add('clicked');
      }, 600);
      setTimeout(function () {
        return item.classList.remove('clicked');
      }, 700);
    });
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

  if ('all' !== pickedCohort || 'creativetechnology' === pickedProgram) {
    document.querySelectorAll('.grad-dividing-element').forEach(function (el) {
      return el.style.display = 'none';
    });
  } else {
    document.querySelectorAll('.grad-dividing-element').forEach(function (el) {
      return el.style.display = '';
    });
  }
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

  var changeImage = function changeImage() {
    console.log('change image');
    currentPhotoIndex++;

    if (currentPhotoIndex === photos.length) {
      currentPhotoIndex = 0;
    }

    photos.forEach(function (photo, i) {
      photos[i].classList.add('hide');
      photos[i].classList.remove('show');

      if (i === currentPhotoIndex) {
        photos[i].classList.remove('hide');
        photos[i].classList.add('show');
      }
    });
  };

  var over = function over() {
    clearInterval(intervalID);
    changeImage();
    intervalID = setInterval(changeImage, 500);
  };

  var out = function out() {
    clearInterval(intervalID);
    currentPhotoIndex = 0;
    photos.forEach(function (photo, i) {
      photos[i].classList.remove('show');
      photos[i].classList.remove('hide');
    });
  };

  if (isTouchDevice()) {
    console.log('touch');
    student.querySelector('.student-content').addEventListener('touchstart', over);
    student.querySelector('.student-content').addEventListener('touchend', out);
  } else {
    console.log('not touch');
    student.querySelector('.student-content').addEventListener('mouseover', over);
    student.querySelector('.student-content').addEventListener('mouseout', out);
  }
});
featuredStudents.forEach(function (student, i) {
  var images = student.querySelectorAll('img');
  var tl = gsap.timeline({
    repeat: -1,
    repeatDelay: 10,
    delay: i * 0.75 + 2
  });
  tl.to(images[0], {
    x: '-150%',
    duration: 1,
    ease: 'power1.easeInOut'
  }, 'part1');
  tl.to(images[1], {
    x: '150%',
    duration: 0
  }, 'part1+=0.75');
  tl.to(images[1], {
    x: '0%',
    duration: 1,
    ease: 'power1.easeInOut'
  }, 'part1+=0.4');
  tl.to({}, {
    duration: 5
  });
  tl.to(images[1], {
    x: '-150%',
    duration: 1,
    ease: 'power1.easeInOut'
  }, 'part2');
  tl.to(images[2], {
    x: '150%',
    duration: 0
  }, 'part2+=0.4');
  tl.to(images[2], {
    x: '0%',
    duration: 1,
    ease: 'power1.easeInOut'
  }, 'part2+=0.4');
  tl.to({}, {
    duration: 5
  });
  tl.to(images[2], {
    x: '-150%',
    duration: 1,
    ease: 'power1.easeInOut'
  }, 'part3');
  tl.to(images[0], {
    x: '150%',
    duration: 0
  }, 'part3+=0.4');
  tl.to(images[0], {
    x: '0%',
    duration: 1,
    ease: 'power1.easeInOut'
  }, 'part3+=0.4');
  tl.to({}, {
    duration: 5
  });
});
document.querySelector('[href="#top"]').addEventListener('click', function (e) {
  e.preventDefault();
  gsap.to(window, {
    duration: 1,
    scrollTo: 0,
    delay: 0.15,
    ease: 'power1.inOut'
  });
});
document.querySelector('[href="#faq"]').addEventListener('click', function (e) {
  e.preventDefault();
  gsap.to(window, {
    duration: 1,
    scrollTo: '#faq',
    delay: 0.15,
    ease: 'power1.inOut'
  });
});
document.querySelectorAll("[href='#']").forEach(function (badLink) {
  console.warn('bad link', badLink);
});
document.querySelectorAll('.student').forEach(function (student) {
  var studentName = student.querySelector('h3').innerText;
  console.log(studentName);
  student.querySelectorAll('a').forEach(function (button) {
    // console.log('button');
    button.addEventListener('click', function () {
      console.log('analytics event', 'student_link_clicked', studentName, button.href);
      gtag('event', 'student_link_clicked', {
        student: studentName,
        link: button.href
      });
    });
  });
}); // stolen from Modernizr

function isTouchDevice() {
  return 'ontouchstart' in window || navigator.maxTouchPoints > 0 || navigator.msMaxTouchPoints > 0;
}
//# sourceMappingURL=main.js.map
