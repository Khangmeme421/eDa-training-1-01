$(document).ready(function () {
    // setting slide
    currentSlide = "001";
    localStorage.setItem('current-slide', currentSlide);
    disableSwipe = false;

    //animation, if have serveral class with the same time appear, delcare in an array
    const animations = {
        500: [".main-title", ".hello"],
        700: [".hero-text", ".hero-img"],
    };

    for (const [offset, elem] of Object.entries(animations)) {
        setTimeout((e) => elem.forEach((e) => $(e).addClass("show")), offset);
    }

    // flow-slide
    var el = document.getElementById('container');
    swipedetect(el, function (swipedir) {
        if (swipedir == 'left' && currentSlide != "006") {
            window.goToSlide("002");
        }
        if (swipedir == 'right' && currentSlide != "001") {
            //window.goToSlide("001");
        }
    });
});
