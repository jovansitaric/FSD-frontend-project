// Get the current button that opens the modal
var btn = $(".products-section__button");
console.log(btn);

// Get clicked button number
var button = 0;
$(".products-section__button").click(function () {
    button = $(this).attr("data-button");
    // JS is null based array, hence -1;
    button -= 1;
    console.log(button);
});

var span = $(".products-section__modal-close");

var modal = null;

btn.on("click", function () {
    // Get the current modal
    // When the user clicks on the button, open the modal
    modal = $(".products-section__modal").eq(button);
    modal.show();
});

// When the user clicks on <span> (x), close the modal
span.on("click", function () {
    // When the user clicks on the button, close the modal
    modal.hide();
});
