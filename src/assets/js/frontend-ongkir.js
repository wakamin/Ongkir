import $ from "jquery";
import "select2";

$(document).ready(function () {
    "use strict";

    // Ongkir form
    $(".sdokr-form__tab a").on("click", function (e) {
        e.preventDefault();
        let target = $(this).data("target");

        $(".sdokr-form__tab").removeClass("sdokr-form__tab--active");
        $(this).parent(".sdokr-form__tab").addClass("sdokr-form__tab--active");

        $(".sdokr-form__content").removeClass("sdokr-form__content--active");
        $(target).addClass("sdokr-form__content--active");
    });

    // Select2
    $(".sdokr-select2").select2();

    $(".sdokr-location-select2").select2({
        minimumInputLength: 3,
        ajax: {
            url: sdongkir_lcz.ajaxurl,
            delay: 250,
            dataType: "json",
            cache: true,
            method: "POST",
            data: function (params) {
                return {
                    q: params.term, // search query
                    action: "ongkir_get_location", // AJAX action for admin-ajax.php,
                    nonce_ajax: sdongkir_lcz.nonce,
                };
            },
            processResults: function (data) {
                return {
                    results: data.data.data,
                };
            },
        },
    });
});
