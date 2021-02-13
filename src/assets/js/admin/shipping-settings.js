import $ from "jquery";

$(function () {
    $(".sdokr_wc_shipping_enable_cb").on("click", function () {
        if ($(this).is(":checked")) {
            $(this)
                .parent("label")
                .parent(".sdongkir-card__header")
                .parent(".sdongkir-card")
                .addClass("active");
        } else {
            $(this)
                .parent("label")
                .parent(".sdongkir-card__header")
                .parent(".sdongkir-card")
                .removeClass("active");
        }
    });
});
