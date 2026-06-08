$(document).ready(function () {

    currentSlide = "002";
    localStorage.setItem("current-slide", currentSlide);
    disableSwipe = false;

    const animations = {
        100: [".main-title"],
        200: [".sub-title"],
        300: [".vertical-text", ".bar-chart-container"],
        400: [".para"]
    };

    for (const [delay, elements] of Object.entries(animations)) {
        setTimeout(() => {
            elements.forEach(selector => {
                $(selector).addClass("show");
            });
        }, delay);
    }

    columnAnimation();

    const el = document.getElementById("container");

    swipedetect(el, function (swipedir) {

        if (swipedir === "left") {
            window.goToSlide("003");
        }

        if (swipedir === "right") {
            window.goToSlide("001");
        }

    });

});

function columnAnimation() {

    const columns = document.querySelectorAll(
        ".chart-column-container span"
    );

    columns.forEach((column, index) => {

        setTimeout(() => {

            column.classList.add("show");

            requestAnimationFrame(() => {
                column.classList.add("expand");
            });

        }, 500 + (index * 100));

    });

}