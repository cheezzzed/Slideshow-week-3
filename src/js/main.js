

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
        slideIndex--;
        if (slideIndex < 0){
            slideIndex = slides.length - 1
        }
        slides[slideIndex].classList.add('show')
    }

    let next = document.querySelector('.next')

    next.addEventListener('click' , function(){
        doSlideTransition()
    })

    let prev = document.querySelector('.prev')

    prev.addEventListener('click' , function(){
        doSlideTransitionBack()
    })

   document.onkeydown = checkKey;

    function checkKey(e) {

        e = e || window.event;

        if (e.keyCode == '38') {
            // up arrow
        }
        else if (e.keyCode == '40') {
            // down arrow
        }
        else if (e.keyCode == '37') {
           doSlideTransitionBack()
        }
        else if (e.keyCode == '39') {
           doSlideTransition()
        }

    }

    document.addEventListener('touchstart', handleTouchStart, false);        
    document.addEventListener('touchmove', handleTouchMove, false);

    var xDown = null;                                                        
    var yDown = null;

    function getTouches(evt) {
      return evt.touches ||             // browser API
             evt.originalEvent.touches; // jQuery
    }                                                     

    function handleTouchStart(evt) {
        const firstTouch = getTouches(evt)[0];                                      
        xDown = firstTouch.clientX;                                      
        yDown = firstTouch.clientY;                                      
    };                                                

    function handleTouchMove(evt) {
        if ( ! xDown || ! yDown ) {
            return;
        }

        var xUp = evt.touches[0].clientX;                                    
        var yUp = evt.touches[0].clientY;

        var xDiff = xDown - xUp;
        var yDiff = yDown - yUp;

        if ( Math.abs( xDiff ) > Math.abs( yDiff ) ) {/*most significant*/
            if ( xDiff > 0 ) {
                doSlideTransition()
            } else {
                doSlideTransitionBack()
            }                       
        } else {
            if ( yDiff > 0 ) {
                /* up swipe */ 
            } else { 
                /* down swipe */
            }                                                                 
        }
        /* reset values */
        xDown = null;
        yDown = null;                                             
    };

}

makeSlideshow(".slideshow")