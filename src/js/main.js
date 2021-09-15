// Navigation
let pickedCohort = 'all';
let pickedProgram = 'all';
let allStudents = document.querySelectorAll('.student');
let allStudentSpacers = document.querySelectorAll('.student-spacer');
let cohortPickerItems = document.querySelectorAll('.cohort-picker li');
let programPickerItems = document.querySelectorAll('.program-picker li');
cohortPickerItems.forEach((item) => {
	item.addEventListener('click', function () {
		if (pickedCohort === this.dataset.cohort) return;
		pickedCohort = this.dataset.cohort;
		let currentCohortItems = document.querySelectorAll('.cohort-picker .active');
		currentCohortItems.forEach((item) => item.classList.remove('active'));
		let newCohortItems = document.querySelectorAll(`.cohort-picker li[data-cohort=${pickedCohort}]`);
		newCohortItems.forEach((item) => item.classList.add('active'));
		console.log('pickedCohort', pickedCohort);

		showHideStudents();
	});
});
programPickerItems.forEach((item) => {
	item.addEventListener('click', function () {
		if (pickedProgram === this.dataset.program) return;
		pickedProgram = this.dataset.program;
		let currentProgramItems = document.querySelectorAll('.program-picker .active');
		currentProgramItems.forEach((item) => item.classList.remove('active'));
		let newProgramItems = document.querySelectorAll(`.program-picker li[data-program=${pickedProgram}]`);
		newProgramItems.forEach((item) => item.classList.add('active'));
		console.log('pickedProgram', pickedProgram);

		showHideStudents();
	});
});
let showHideStudents = () => {
	[...allStudents, ...allStudentSpacers].forEach((item) => {
		if ((item.dataset.program === pickedProgram || 'all' === pickedProgram) && (item.dataset.cohort === pickedCohort || 'all' === pickedCohort)) {
			// show!
			item.style.display = 'flex';
		} else {
			// hide!
			item.style.display = 'none';
		}
	});
};

// Silly animations up top
let bigLetters = document.querySelectorAll('.big-letter');

bigLetters.forEach((letter) => {
	letter.addEventListener('mouseenter', () => {
		if (letter.classList.contains('animate')) return;
		letter.classList.add('animate');
		setTimeout(() => {
			letter.classList.remove('animate');
		}, 1000);
	});
});

setInterval(() => {
	let letter = bigLetters[Math.floor(Math.random() * bigLetters.length)];
	if (letter.classList.contains('animate')) return;
	letter.classList.add('animate');
	setTimeout(() => {
		letter.classList.remove('animate');
	}, 1000);
}, 3000);

// student photo animations
allStudents.forEach((student) => {
	let photos = student.querySelectorAll('figure img');
	let currentPhotoIndex = 0;
	let intervalID = -1;

	let changeImage = () => {
		currentPhotoIndex++;
		if (currentPhotoIndex === photos.length) {
			currentPhotoIndex = 0;
		}
		console.log('hit');
		photos.forEach((photo, i) => {
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

	student.querySelector('.student-content').addEventListener('mouseenter', () => {
		changeImage();
		intervalID = setInterval(changeImage, 500);
	});
	student.querySelector('.student-content').addEventListener('mouseleave', () => {
		clearInterval(intervalID);
		currentPhotoIndex = 0;
		photos.forEach((photo, i) => {
			photos[i].classList.remove('show');
			photos[i].classList.remove('hide');
		});
	});
});
