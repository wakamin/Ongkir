import $ from "jquery";
import "select2";
import tingle from "tingle.js";

$(document).ready(function () {
    "use strict";

    // Ongkir form
    $(".sdokr-form__tab-nav").on("click", function (e) {
        e.preventDefault();
        let target = $(this).data("target");

        $(this)
            .parent(".sdokr-form__tab")
            .parent(".sdokr-form__tabs")
            .find(".sdokr-form__tab")
            .removeClass("sdokr-form__tab--active");
        $(this).parent(".sdokr-form__tab").addClass("sdokr-form__tab--active");

        $(this)
            .parent(".sdokr-form__tab")
            .parent(".sdokr-form__tabs")
            .parent(".sdokr-form")
            .find(".sdokr-form__content")
            .removeClass("sdokr-form__content--active");
        $(target).addClass("sdokr-form__content--active");
    });

    // Select2
    $(".sdokr-select2").select2();
    $("#billing_subdistrict").select2();
    $("#shipping_subdistrict").select2();

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
            $(this)
                .siblings(".sdokr-single-courier-selection")
                .removeClass("sdokr-hide");
            $(this).siblings(".sdokr-couriers-wrapper").addClass("sdokr-hide");
            $(this).siblings(".sdokr-select-all").addClass("sdokr-hide");
            $(this).siblings(".sdokr-unselect-all").addClass("sdokr-hide");
            $(this).html(sdongkir_lcz.multiple_selection);
        } else {
            $(this)
                .siblings(".sdokr-single-courier-selection")
                .addClass("sdokr-hide");
            $(this)
                .siblings(".sdokr-couriers-wrapper")
                .removeClass("sdokr-hide");
            $(this).siblings(".sdokr-select-all").removeClass("sdokr-hide");
            $(this).siblings(".sdokr-unselect-all").removeClass("sdokr-hide");
            $(this).html(sdongkir_lcz.single_selection);
        }
    });

    // Get shipping cost
    $(".sdokr-shipping-cost-form").submit(function (e) {
        e.preventDefault();

        $(".sdokr-scost-btn").attr("disabled", true);
        $(".sdokr-scost-btn").html(sdongkir_lcz.processing_text);

        // instanciate new modal
        var modal = new tingle.modal({
            // footer: true,
            // stickyFooter: true,
            closeMethods: ["overlay", "button", "escape"],
            closeLabel: sdongkir_lcz.close_label,
        });

        // // add a button
        // modal.addFooterBtn(
        //     "Ok",
        //     "tingle-btn tingle-btn--primary tingle-btn--pull-right",
        //     function () {
        //         modal.close();
        //     },
        // );

        var couriers = [];

        if (courier_selection_type == "single") {
            couriers.push($(this).find(".sdokr-cost-courier").val());
        } else {
            $(this)
                .find(".sdokr-couriers-cb:checked")
                .each(function () {
                    couriers.push($(this).attr("value"));
                });
        }

        $.ajax({
            url: sdongkir_lcz.ajaxurl,
            type: "POST",
            data: {
                action: "ongkir_shipping_cost",
                nonce_ajax: sdongkir_lcz.nonce,
                origin: $(this).find(".sdokr-origin-input").val(),
                dest: $(this).find(".sdokr-destination-input").val(),
                weight: $(this).find(".sdokr-weight-input").val(),
                couriers: couriers,
            },
            success: function (res) {
                let html = res.data.data.html;
                // set content
                modal.setContent(html);

                // open modal
                modal.open();

                $(".sdokr-scost-btn").attr("disabled", false);
                $(".sdokr-scost-btn").html(sdongkir_lcz.get_shipping_cost_text);
            },
            error: function (err) {
                console.log(err);
                error_modal.setContent(err.responseJSON.data.message);
                error_modal.open();
                $(".sdokr-scost-btn").attr("disabled", false);
                $(".sdokr-scost-btn").html(sdongkir_lcz.get_shipping_cost_text);
            },
        });
    });

    // Shipping tracking
    $(".sdokr-shipping-tracking-form").submit(function (e) {
        e.preventDefault();

        $(".sdokr-strack-btn").attr("disabled", true);
        $(".sdokr-strack-btn").html(sdongkir_lcz.processing_text);

        // instanciate new modal
        var modal = new tingle.modal({
            // footer: true,
            // stickyFooter: true,
            closeMethods: ["overlay", "button", "escape"],
            closeLabel: sdongkir_lcz.close_label,
            cssClass: ["sdokr-tingle-ship-tracking"],
        });

        // // add a button
        // modal.addFooterBtn(
        //     "Ok",
        //     "tingle-btn tingle-btn--primary tingle-btn--pull-right",
        //     function () {
        //         modal.close();
        //     },
        // );

        $.ajax({
            url: sdongkir_lcz.ajaxurl,
            type: "POST",
            data: {
                action: "ongkir_shipping_track",
                nonce_ajax: sdongkir_lcz.nonce,
                tracking_number: $(this)
                    .find(".sdokr-tracking-number-input")
                    .val(),
                courier: $(this).find(".sdokr-track-courier-input").val(),
            },
            success: function (res) {
                let html = res.data.data.html;
                // set content
                modal.setContent(html);

                // open modal
                modal.open();

                $(".sdokr-strack-btn").attr("disabled", false);
                $(".sdokr-strack-btn").html(
                    sdongkir_lcz.get_shipping_cost_text,
                );
            },
            error: function (err) {
                console.log(err);
                error_modal.setContent(err.responseJSON.data.message);
                error_modal.open();
                $(".sdokr-strack-btn").attr("disabled", false);
                $(".sdokr-strack-btn").html(
                    sdongkir_lcz.get_shipping_track_text,
                );
            },
        });
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
