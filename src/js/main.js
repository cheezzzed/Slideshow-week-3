

let makeSlideshow = function(slideshowParentSelector){
    let slides = document.querySelectorAll(slideshowParentSelector + ' img')

    slides[0].classList.add('show')

    let slideIndex = 0

    let doSlideTransition = function() {
        slides[slideIndex].classList.remove('show')
        slideIndex++
        if (slideIndex === slides.length){
            slideIndex = 0
        }
        slides[slideIndex].classList.add('show')
    }

    let doSlideTransitionBack = function() {
        slides[slideIndex].classList.remove('show')
        slideIndex -= 1
        if (slideIndex === slides.length){
            slideIndex = 0
        }
        slides[slideIndex].classList.add('show')
    }

    let next = document.querySelector('.next')

    next.addEventListener('click' , function(){
        doSlideTransition()
    }

    let prev = document.querySelector('.previous')

    prev.addEventListener('click' , function(){
        doSlideTransitionBack()
    }

}

makeSlideshow(".slideshow")