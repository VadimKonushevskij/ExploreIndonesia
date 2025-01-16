$(document).ready(function () {
  $(".owl-carousel").owlCarousel({
    margin: 31,
    nav: true,
    navText: ["", ""],
    responsive: {
      0: {
        items: 1,
      },
      800: {
        items: 2,
      },
      1400: {
        items: 3,
      },
    },
  });
});
