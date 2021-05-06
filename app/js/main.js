$(document).ready(function () {
    /**
     * Placeholder asteriks logic 
    */ 

    let formElements = $(
        ".contact-section__form-content-elements, .contact-section__form-content-message"
    );
    // console.log(formElements);

    let asteriks = $(".contact-section__form-placeholder");

    // console.log(asteriks);

    formElements.each(function () {
        // console.log($(this));
        formElements.on("input", function () {
            if ($(this).val() !== "") {
                asteriks.hide();
            } else {
                asteriks.show();
            }
        });
    });
});
