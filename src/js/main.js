// Navigation
let pickedCohort = 'all';
let pickedProgram = 'all';
let allStudents = document.querySelectorAll('.student');
let allStudentSpacers = document.querySelectorAll('.student-spacer');
let cohortPickerItems = document.querySelectorAll('.cohort-picker li');
let programPickerItems = document.querySelectorAll('.program-picker li');
let featuredStudents = document.querySelectorAll('.featured-person');
let intervalID = -1;

cohortPickerItems.forEach((item) => {
	item.addEventListener('click', function () {
		if (pickedCohort === this.dataset.cohort) return;
		pickedCohort = this.dataset.cohort;
		let currentCohortItems = document.querySelectorAll('.cohort-picker .active');
		currentCohortItems.forEach((item) => item.classList.remove('active'));
		let newCohortItems = document.querySelectorAll(`.cohort-picker li[data-cohort=${pickedCohort}]`);
		newCohortItems.forEach((item) => item.classList.add('active'));
		console.log('pickedCohort', pickedCohort);

		console.log('analytics event', 'cohort_picked', pickedCohort);
		gtag('event', 'cohort_picked', {
			cohort: pickedCohort,
		});

		showHideStudents();

		gsap.to(window, { duration: 1, scrollTo: (15 / 24) * window.innerWidth, delay: 0.5, ease: 'power1.inOut' });
		newCohortItems.forEach((item) => {
			item.classList.add('clicked');
			setTimeout(() => item.classList.remove('clicked'), 100);
			setTimeout(() => item.classList.add('clicked'), 200);
			setTimeout(() => item.classList.remove('clicked'), 300);
			setTimeout(() => item.classList.add('clicked'), 400);
			setTimeout(() => item.classList.remove('clicked'), 500);
			setTimeout(() => item.classList.add('clicked'), 600);
			setTimeout(() => item.classList.remove('clicked'), 700);
		});
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

		console.log('analytics event', 'program_picked', pickedProgram);
		gtag('event', 'program_picked', {
			cohort: pickedProgram,
		});

		showHideStudents();

		gsap.to(window, { duration: 1, scrollTo: (15 / 24) * window.innerWidth, delay: 0.5, ease: 'power1.inOut' });
		newProgramItems.forEach((item) => {
			item.classList.add('clicked');
			setTimeout(() => item.classList.remove('clicked'), 100);
			setTimeout(() => item.classList.add('clicked'), 200);
			setTimeout(() => item.classList.remove('clicked'), 300);
			setTimeout(() => item.classList.add('clicked'), 400);
			setTimeout(() => item.classList.remove('clicked'), 500);
			setTimeout(() => item.classList.add('clicked'), 600);
			setTimeout(() => item.classList.remove('clicked'), 700);
		});
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
	if ('all' !== pickedCohort || 'creativetechnology' === pickedProgram) {
		document.querySelectorAll('.grad-dividing-element').forEach((el) => (el.style.display = 'none'));
	} else {
		document.querySelectorAll('.grad-dividing-element').forEach((el) => (el.style.display = ''));
	}
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

	let changeImage = () => {
		console.log('change image');
		currentPhotoIndex++;
		if (currentPhotoIndex === photos.length) {
			currentPhotoIndex = 0;
		}
		photos.forEach((photo, i) => {
			photos[i].classList.add('hide');
			photos[i].classList.remove('show');
			if (i === currentPhotoIndex) {
				photos[i].classList.remove('hide');
				photos[i].classList.add('show');
			}
		});
	};

	let over = () => {
		clearInterval(intervalID);
		changeImage();
		intervalID = setInterval(changeImage, 500);
	};
	let out = () => {
		clearInterval(intervalID);
		currentPhotoIndex = 0;
		photos.forEach((photo, i) => {
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

featuredStudents.forEach((student, i) => {
	let images = student.querySelectorAll('img');
	let tl = gsap.timeline({ repeat: -1, repeatDelay: 10, delay: i * 0.75 + 2 });
	tl.to(images[0], { x: '-150%', duration: 1, ease: 'power1.easeInOut' }, 'part1');
	tl.to(images[1], { x: '150%', duration: 0 }, 'part1+=0.75');
	tl.to(images[1], { x: '0%', duration: 1, ease: 'power1.easeInOut' }, 'part1+=0.4');
	tl.to({}, { duration: 5 });
	tl.to(images[1], { x: '-150%', duration: 1, ease: 'power1.easeInOut' }, 'part2');
	tl.to(images[2], { x: '150%', duration: 0 }, 'part2+=0.4');
	tl.to(images[2], { x: '0%', duration: 1, ease: 'power1.easeInOut' }, 'part2+=0.4');
	tl.to({}, { duration: 5 });
	tl.to(images[2], { x: '-150%', duration: 1, ease: 'power1.easeInOut' }, 'part3');
	tl.to(images[0], { x: '150%', duration: 0 }, 'part3+=0.4');
	tl.to(images[0], { x: '0%', duration: 1, ease: 'power1.easeInOut' }, 'part3+=0.4');
	tl.to({}, { duration: 5 });
});

document.querySelector('[href="#top"]').addEventListener('click', (e) => {
	e.preventDefault();
	gsap.to(window, { duration: 1, scrollTo: 0, delay: 0.15, ease: 'power1.inOut' });
});

document.querySelector('[href="#faq"]').addEventListener('click', (e) => {
	e.preventDefault();
	gsap.to(window, { duration: 1, scrollTo: '#faq', delay: 0.15, ease: 'power1.inOut' });
});

document.querySelectorAll("[href='#']").forEach((badLink) => {
	console.warn('bad link', badLink);
});

document.querySelectorAll('.student').forEach((student) => {
	let studentName = student.querySelector('h3').innerText;
	console.log(studentName);
	student.querySelectorAll('a').forEach((button) => {
		// console.log('button');
		button.addEventListener('click', () => {
			console.log('analytics event', 'student_link_clicked', studentName, button.href);
			gtag('event', 'student_link_clicked', {
				student: studentName,
				link: button.href,
			});
		});
	});
});

// stolen from Modernizr
function isTouchDevice() {
	return 'ontouchstart' in window || navigator.maxTouchPoints > 0 || navigator.msMaxTouchPoints > 0;
}
