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

    // click on image and jump to a page
    $(".thuoc").on("touchend click", function () {
        window.goToSlide("001");
      });
    $(".bieu-do-1").on("touchend click", function () {
        window.goToSlide("002");
    });
    $(".dau-lung").on("touchend click", function () {
        window.goToSlide("003");
      });
    $(".bieu-do-2").on("touchend click", function () {
        window.goToSlide("004");
    });
    $(".elders").on("touchend click", function () {
        window.goToSlide("005");
    });
});
