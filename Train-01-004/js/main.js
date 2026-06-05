$(document).ready(function () {
  currentSlide = "004";
  localStorage.setItem("current-slide", currentSlide);
  disableSwipe = false;

  const animations = {
    300: [".main-title"],
    500: [".chart-wrapper"],
  };

  for (const [offset, elems] of Object.entries(animations)) {
    setTimeout(
      () => elems.forEach((e) => $(e).addClass("show")),
      Number(offset),
    );
  }

  var el = document.getElementById("container");
  var startX = 0;
  var handled = false;

  el.addEventListener("touchstart", function (e) {
    startX = e.changedTouches[0].screenX;
    handled = false;
  });

  el.addEventListener("touchend", function (e) {
    if (disableSwipe || handled) return;
    var diffX = e.changedTouches[0].screenX - startX;
    if (Math.abs(diffX) > 50) {
      handled = true;
      disableSwipe = true;
      if (diffX < 0) window.goToSlide("005");
      else window.goToSlide("003");
    }
  });

  swipedetect(el, function (swipedir) {
    if (disableSwipe || handled) return;
    if (swipedir == "left" || swipedir == "right") {
      handled = true;
      disableSwipe = true;
      if (swipedir == "left") window.goToSlide("005");
      if (swipedir == "right") window.goToSlide("003");
    }
  });
});
