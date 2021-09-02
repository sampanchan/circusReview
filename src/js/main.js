
// Navigation
let pickedCohort = 'all'
let pickedProgram = 'all'
let allStudents = document.querySelectorAll('.student')
let cohortPickerItems = document.querySelectorAll('.cohort-picker li')
let programPickerItems = document.querySelectorAll('.program-picker li')
cohortPickerItems.forEach(item => {
	item.addEventListener('click', function() {
		let currentCohortItem = document.querySelector('.cohort-picker .active')
		if (currentCohortItem === this) return
		currentCohortItem.classList.remove('active')
		this.classList.add('active')
		console.log('pickedCohort',pickedCohort)
		pickedCohort = this.dataset.cohort
		showHideStudents()
	})
})
programPickerItems.forEach(item => {
	item.addEventListener('click', function() {
		let currentProgramItem = document.querySelector('.program-picker .active')
		if (currentProgramItem === this) return
		currentProgramItem.classList.remove('active')
		this.classList.add('active')
		console.log('pickedProgram',pickedProgram)
		pickedProgram = this.dataset.program
		showHideStudents()
	})
})
let showHideStudents = () => {
	allStudents.forEach(student => {
		if ((student.dataset.program === pickedProgram || 'all' === pickedProgram) && (student.dataset.cohort === pickedCohort || 'all' === pickedCohort) ) {
			// show!
			student.style.display = 'flex'
		} else {
			// hide!
			student.style.display = 'none'
		}
	})
}


// Silly animations up top
let bigLetters = document.querySelectorAll('.big-letter')

bigLetters.forEach(letter => {
	letter.addEventListener('mouseenter', () => {
		if (letter.classList.contains('animate')) return
		letter.classList.add('animate')
		setTimeout(() => {
			letter.classList.remove('animate')
		}, 1000)
	})
})

setInterval(() => {
	let letter = bigLetters[Math.floor(Math.random() * bigLetters.length)]
	if (letter.classList.contains('animate')) return
	letter.classList.add('animate')
	setTimeout(() => {
		letter.classList.remove('animate')
	}, 1000)
}, 3000)