$(document).ready(function () {
  $("#backButton").click(function () {
    $(this).addClass("animation slide-in-left");
    setTimeout(function () {
      $("#backButton").removeClass("animation slide-in-left");
    }, 1000);
    window.location.href = "../About.html";
  });
});
