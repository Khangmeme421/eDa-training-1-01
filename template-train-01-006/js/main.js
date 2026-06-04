$(document).ready(function () {
    // setting slide
    currentSlide = "006";
    localStorage.setItem('current-slide', currentSlide);
    disableSwipe = false;

    //animation, if have serveral class with the same time appear, delcare in an array
    const animations = {
        300: [".thuoc"],
        500: [".bieu-do-1"],
        700: [".dau-lung"],
        900: [".bieu-do-2"],
        1100: [".elders"],
    };

    for (const [offset, elem] of Object.entries(animations)) {
        setTimeout(() => elem.forEach((e) => $(e).addClass("show")), offset);
    }

    // flow-slide
    var el = document.getElementById('container');
    swipedetect(el, function (swipedir) {
        if (swipedir == 'left') {
            //window.goToSlide("003");
        }
        if (swipedir == 'right') {
            window.goToSlide("005");
        }
    });
});
