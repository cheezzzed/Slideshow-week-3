// new rule: no unintended consequences.
// don't fuck with anything else on the page.
// if we have more than one slideshow, they should run independently.
// that means SCOPE! both in variables and in finding elements
// for the variable scope we're actually going to learn a whole new technique, called Functional Prototypes
// this is where you write a function that builds a nice, self contained thing for you.
// everything it needs is inside the function, and nothing is left outside, lying around, for other devs to metaphorically step on
// if something is needed from outside, you can write your function to selectively expose certain things.


let slides = document.querySelectorAll('.slideshow img')
console.log(slides)

slides[0].classList.add('show')

let slideIndex = 0
setInterval(function() {

	slides[slideIndex].classList.remove('show')
	slideIndex++
	if (slideIndex === slides.length) {
		slideIndex = 0
	}
	slides[slideIndex].classList.add('show')




}, 3000)