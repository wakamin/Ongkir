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
    $(".sdokr-form-control.select2").select2();
});
