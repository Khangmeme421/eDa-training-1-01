$(document).ready(function () {
    // setting slide
    currentSlide = "003";
    localStorage.setItem('current-slide', currentSlide);
    disableSwipe = false;

    //animation
    const animations = {
        300: [".class1", ".hello"],
        500: [".class2"],
    };

    for (const [offset, elem] of Object.entries(animations)) {
        setTimeout(() => elem.forEach((e) => $(e).addClass("show")), offset);
    }

    // flow-slide
    var el = document.getElementById('container');
    swipedetect(el, function (swipedir) {
        if (swipedir == 'left') {
            window.goToSlide("004");
        }
        if (swipedir == 'right') {
            window.goToSlide("002");
        }
    });

    // info-box toggle
    $('.info-icon').on('tap click', function() {
        var box = $(this).closest('.info-box');
        box.toggleClass('open');
        if (box.hasClass('open')) {
            $(this).text('x');
        } else {
            $(this).text('i');
        }
    });
});