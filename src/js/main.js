console.log(` 
Change this message, and make sure it changes in the browser 
to verify that you're working in the right files.`)


document.querySelectorAll('.big-letter').forEach(letter => {
	letter.addEventListener('mouseenter', () => {
		letter.classList.add('animate')
		setTimeout(() => {
			letter.classList.remove('animate')
		}, 1000)
	})
})