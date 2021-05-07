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
    // When the user clicks on the button, open the unique modal
    modal = $(".products-section__modal").eq(button);
    modal.show();
});

// When the user clicks on <span> (x), close the modal
span.on("click", function () {
    // When the user clicks on the button, close the modal
    modal.hide();
});

/**
 * Checkbox modal calculations
 */

var totalPrice = 0;
var newPrice = 0;
var value = 0;
var checkboxes = $(".products-section__modal-info-checkbox");
var currentModal = null;
var priceArray = [];

// Get total price based on unique modal
btn.click(function () {
    currentModal = $(".products-section__modal-button-price").eq(button);
    console.log(currentModal);
    totalPrice = $(".products-section__modal-button-price")
        .eq(button)
        .attr("data-price");
    console.log(totalPrice);
    console.log(typeof totalPrice);
    // Current modal
    console.log(modal);
    $(modal)
        .find(".products-section__modal-info-checkbox:checked")
        .each(function () {
            // Creating an array of string values
            priceArray.push($(this).attr("value"));
            console.log(priceArray);
        });

    // Sum array of values
    var sum = 0;
    console.log(typeof sum);
    for (var i = 0; i < priceArray.length; i++) {
        sum += Math.round((priceArray[i] * 100) / 100);
    }

    newPrice = +totalPrice + sum;
    newPrice += "";

    console.log(sum);
    console.log(typeof sum);

    console.log(totalPrice);
    console.log(typeof totalPrice);

    console.log(newPrice);
    console.log(typeof newPrice);

    currentModal.html((newPrice + "&#8364;"));
});

// Get checkbox value if clicked
$(checkboxes).click(function () {
    if ($(this).is(":checked")) {
        value = $(this).attr("value");        
        // Calculations...
        console.log(currentModal.html((newPrice = value + "&#8364;")));
        console.log(value);
    } else {
        console.log(currentModal.html(totalPrice + "&#8364;"));
    }
});
