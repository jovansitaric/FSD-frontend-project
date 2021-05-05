$(".hamburger").click(function() {
  $(".hamburger, .navigation-list").toggleClass("active");
});

$(".navigation-list__item, .navigation-list__item-link").click(function() {
  $(".hamburger, .navigation-list").removeClass("active");
});