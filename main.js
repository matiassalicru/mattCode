//Función SmoothScroll.
//LA función ease determina como es el movimiento del scrolling
//se puede modificar cambiando la función por cualquier de
// la página https://www.gizma.com/easing/

function smoothScroll(target, duration) {
    var target = document.querySelector(target);
    var targetPosition = target.getBoundingClientRect().top;
    var startPosition = window.pageYOffset;
    var distance = targetPosition - startPosition;
    var startTime = null;

    console.log(startPosition);


    function animation(currentTime) {
        if (startTime === null) startTime = currentTime;
        var timeElapsed = currentTime - startTime;
        var run = ease(timeElapsed, startPosition, distance, duration);
        window.scrollTo(0, run);
        if (timeElapsed < duration) requestAnimationFrame(animation);
    }

    function ease(t, b, c, d) {
        t /= d / 2;
        if (t < 1) return c / 2 * t * t + b;
        t--;
        return -c / 2 * (t * (t - 2) - 1) + b;
    }

    requestAnimationFrame(animation);
}



//Bajar al formulario de contacto SmoothScroll
var contactLink = document.querySelector('.contactLink');

contactLink.addEventListener('click', function () {

    smoothScroll("#contact-form", 1000);
});

var backToTop = document.querySelector('.toTop');

backToTop.addEventListener('click', function () {

    smoothScroll(".mains", 1000);
});


//Volver arriba SmoothScroll\

var backToTop = document.querySelector('.arrow');

window.onscroll = function () { scrollFunction() };

function scrollFunction() {
    if (document.body.scrollTop > 500 || document.documentElement.scrollTop > 500 && screen.width > 1000) {
        backToTop.style.display = "block";
    } else {
        backToTop.style.display = "none";
    }
}

function paraArriba() {

    backToTop.addEventListener('click', function () {

        smoothScroll(".mains", 1000);
    });
}


