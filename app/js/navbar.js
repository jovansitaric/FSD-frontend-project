// const hamburger = document.querySelector(".hamburger");
// const navMenu = document.querySelector(".navigation-list");
// const navLink = document.querySelectorAll(".navigation-list__item-link");

// hamburger.addEventListener("click", mobileMenu);

// function mobileMenu() {
//     hamburger.classList.toggle("active");
//     navMenu.classList.toggle("active");
// }
$(".hamburger").click(function() {
  $(".hamburger, .navigation-list").toggleClass("active");
});

$(".navigation-list__item, .navigation-list__item-link").click(function() {
  $(".hamburger, .navigation-list").removeClass("active");
});