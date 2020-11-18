import $ from "jquery";
import "select2";
import tingle from "tingle.js";

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
                    action: "ongkir_search_location", // AJAX action for admin-ajax.php,
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

    // Error modal
    var error_modal = new tingle.modal({
        footer: true,
        stickyFooter: true,
        closeMethods: ["overlay", "button", "escape"],
        closeLabel: sdongkir_lcz.close_label,
    });
    error_modal.addFooterBtn(
        "Ok",
        "tingle-btn tingle-btn--primary tingle-btn--pull-right",
        function () {
            error_modal.close();
        },
    );

    // Courier selection type
    let courier_selection_type = "single";
    $(".sdokr-selection-type").on("click", function () {
        courier_selection_type =
            courier_selection_type == "single" ? "multiple" : "single";
        if (courier_selection_type == "single") {
            $(".sdokr-single-courier-selection").removeClass("sdokr-hide");
            $(".sdokr-couriers-wrapper").addClass("sdokr-hide");
            $(".sdokr-select-all").addClass("sdokr-hide");
            $(".sdokr-unselect-all").addClass("sdokr-hide");
            $(this).html(sdongkir_lcz.multiple_selection);
        } else {
            $(".sdokr-single-courier-selection").addClass("sdokr-hide");
            $(".sdokr-couriers-wrapper").removeClass("sdokr-hide");
            $(".sdokr-select-all").removeClass("sdokr-hide");
            $(".sdokr-unselect-all").removeClass("sdokr-hide");
            $(this).html(sdongkir_lcz.single_selection);
        }
    });

    // Get shipping cost
    $("#sdokr-shipping-cost-form").submit(function (e) {
        e.preventDefault();

        // instanciate new modal
        var modal = new tingle.modal({
            footer: true,
            stickyFooter: true,
            closeMethods: ["overlay", "button", "escape"],
            closeLabel: sdongkir_lcz.close_label,
        });

        // add a button
        modal.addFooterBtn(
            "Ok",
            "tingle-btn tingle-btn--primary tingle-btn--pull-right",
            function () {
                modal.close();
            },
        );

        var couriers = [];

        if (courier_selection_type == "single") {
            couriers.push($("#sdokr-cost-courier").val());
        } else {
            $(".sdokr-couriers-cb:checked").each(function () {
                couriers.push($(this).attr("value"));
            });
        }

        $.ajax({
            url: sdongkir_lcz.ajaxurl,
            type: "POST",
            data: {
                action: "ongkir_shipping_cost",
                nonce_ajax: sdongkir_lcz.nonce,
                origin: $("#sdokr-origin").val(),
                dest: $("#sdokr-destination").val(),
                weight: $("#sdokr-weight").val(),
                couriers: couriers,
            },
            success: function (res) {
                console.log(res);
                let html = res.data.data.html;
                // set content
                modal.setContent(html);

                // // open modal
                modal.open();
            },
            error: function (err) {
                console.log(err);
                error_modal.setContent(err.responseJSON.data.message);
                error_modal.open();
            },
        });
    });

    // Shipping cost
    $("#sdokr-shipping-tracking-form").submit(function (e) {
        e.preventDefault();

        // instanciate new modal
        var modal = new tingle.modal({
            footer: true,
            stickyFooter: true,
            closeMethods: ["overlay", "button", "escape"],
            closeLabel: sdongkir_lcz.close_label,
        });

        // set content
        modal.setContent("<h1>Shipping track</h1>");

        // add a button
        modal.addFooterBtn(
            "Ok",
            "tingle-btn tingle-btn--primary tingle-btn--pull-right",
            function () {
                modal.close();
            },
        );

        // open modal
        modal.open();
    });

    $("body").on("click", ".sdokr-red", function () {
        alert("test");
    });

    $(".sdokr-select-all").on("click", function () {
        $($(this).data("target")).prop("checked", true);
    });

    $(".sdokr-unselect-all").on("click", function () {
        $($(this).data("target")).prop("checked", false);
    });
});
