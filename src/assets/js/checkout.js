import $ from "jquery";
import "select2";

$(document).ready(function () {
    // elements
    const els = {
        billing_country: $("#billing_country"),
        billing_state: $("#billing_state"),
        billing_city: $("#billing_city"),
        billing_city_field: $("#billing_city_field"),
        billing_subdistrict: $("#billing_subdistrict"),
        billing_subdistrict_field: $("#billing_subdistrict_field"),

        shipping_country: $("#shipping_country"),
        shipping_state: $("#shipping_state"),
        shipping_city: $("#shipping_city"),
        shipping_city_field: $("#shipping_city_field"),
        shipping_subdistrict: $("#shipping_subdistrict"),
        shipping_subdistrict_field: $("#shipping_subdistrict_field"),
    };

    // Initialize select2
    els.billing_subdistrict.select2();
    els.shipping_subdistrict.select2();

    // Initialize address fields
    sdokr_billing_address_fields();
    sdokr_shipping_address_fields();

    // Initialize billing city options
    if (els.billing_country.val() == "ID") {
        sdokr_get_billing_city_options();
        sdokr_get_billing_subdistrict_options();
    }

    // Initialize shipping city options
    if (els.shipping_country.val() == "ID") {
        sdokr_get_shipping_city_options();
        sdokr_get_shipping_subdistrict_options();
    }

    // On change billing country
    els.billing_country.on("change", function () {
        sdokr_billing_address_fields();
    });

    // On change billing state
    els.billing_state.on("change", function () {
        sdokr_get_billing_city_options();
    });

    // On change billing state
    $("#billing_city_field").on("change", "#billing_city", function () {
        sdokr_get_billing_subdistrict_options();
    });

    // On change shipping country
    els.shipping_country.on("change", function () {
        sdokr_shipping_address_fields();
    });

    // On change shipping state
    els.shipping_state.on("change", function () {
        sdokr_get_shipping_city_options();
    });

    // On change shipping state
    $("#shipping_city_field").on("change", "#shipping_city", function () {
        sdokr_get_shipping_subdistrict_options();
    });

    // Show hide billing subdistrict
    function sdokr_billing_address_fields() {
        if (els.billing_country.val() == "ID") {
            // Setup subdistrict
            els.billing_subdistrict_field
                .children("label")
                .html(
                    `${sdongkir_lcz.subdistrict_text}&nbsp;<abbr class="required" title="required">*</abbr>`,
                );
            els.billing_subdistrict_field.fadeIn();

            // Setup city
            const billing_city_select = `<select name="billing_city" id="billing_city" class="select" autocomplete="address-level2" data-placeholder="${sdongkir_lcz.please_select_text}"></select>`;
            els.billing_city_field
                .children(".woocommerce-input-wrapper")
                .html(billing_city_select);
            $("#billing_city").select2();
        } else {
            // Setup subdistrict
            els.billing_subdistrict_field.fadeOut();

            // Setup city
            const billing_city_input =
                '<input type="text" class="input-text " name="billing_city" id="billing_city" placeholder="" value="" autocomplete="address-level2">';
            els.billing_city_field
                .children(".woocommerce-input-wrapper")
                .html(billing_city_input);
        }
    }

    // Show hide shipping subdistrict
    function sdokr_shipping_address_fields() {
        if (els.shipping_country.val() == "ID") {
            // Setup subdistrict
            els.shipping_subdistrict_field
                .children("label")
                .html(
                    `${sdongkir_lcz.subdistrict_text}&nbsp;<abbr class="required" title="required">*</abbr>`,
                );
            els.shipping_subdistrict_field.fadeIn();

            // Setup city
            const shipping_city_select = `<select name="shipping_city" id="shipping_city" class="select" autocomplete="address-level2" data-placeholder="${sdongkir_lcz.please_select_text}"></select>`;
            els.shipping_city_field
                .children(".woocommerce-input-wrapper")
                .html(shipping_city_select);
            $("#shipping_city").select2();
        } else {
            // Setup subdistrict
            els.shipping_subdistrict_field.fadeOut();

            // Setup city
            const shipping_city_input =
                '<input type="text" class="input-text " name="shipping_city" id="shipping_city" placeholder="" value="" autocomplete="address-level2">';
            els.shipping_city_field
                .children(".woocommerce-input-wrapper")
                .html(shipping_city_input);
        }
    }

    // Get billing city options
    function sdokr_get_billing_city_options() {
        if (els.billing_state.val() == "") {
            return;
        }

        $("#billing_city").attr("disabled", true);
        els.billing_subdistrict.attr("disabled", true);

        $.ajax({
            url: sdongkir_lcz.ajaxurl,
            type: "POST",
            data: {
                action: "ongkir_get_cities_by_province_id",
                nonce_ajax: sdongkir_lcz.nonce,
                province_id: els.billing_state.val(),
            },
            success: function (res) {
                const cities = res.data.data;

                $("#billing_city").empty();
                $("#billing_city").val() == "";
                els.billing_subdistrict.empty();
                els.billing_subdistrict.val() == "";

                cities.forEach((city) => {
                    $("#billing_city").append(
                        $("<option></option>")
                            .attr("value", "")
                            .text(sdongkir_lcz.please_select_text),
                    );
                    $("#billing_city").append(
                        $("<option></option>")
                            .attr("value", city.city_id)
                            .text(`${city.type} ${city.name}`),
                    );
                });

                $("#billing_city").attr("disabled", false);
                els.billing_subdistrict.attr("disabled", false);
            },
            error: function (err) {
                $("#billing_city").attr("disabled", false);
                els.billing_subdistrict.attr("disabled", false);
            },
        });
    }

    // Get shipping city options
    function sdokr_get_shipping_city_options() {
        if (els.shipping_state.val() == "") {
            return;
        }

        $("#shipping_city").attr("disabled", true);
        els.shipping_subdistrict.attr("disabled", true);

        $.ajax({
            url: sdongkir_lcz.ajaxurl,
            type: "POST",
            data: {
                action: "ongkir_get_cities_by_province_id",
                nonce_ajax: sdongkir_lcz.nonce,
                province_id: els.shipping_state.val(),
            },
            success: function (res) {
                const cities = res.data.data;

                $("#shipping_city").empty();
                $("#shipping_city").val() == "";
                els.shipping_subdistrict.empty();
                els.shipping_subdistrict.val() == "";

                cities.forEach((city) => {
                    $("#shipping_city").append(
                        $("<option></option>")
                            .attr("value", "")
                            .text(sdongkir_lcz.please_select_text),
                    );
                    $("#shipping_city").append(
                        $("<option></option>")
                            .attr("value", city.city_id)
                            .text(`${city.type} ${city.name}`),
                    );
                });

                $("#shipping_city").attr("disabled", false);
                els.shipping_subdistrict.attr("disabled", false);
            },
            error: function (err) {
                $("#shipping_city").attr("disabled", false);
                els.shipping_subdistrict.attr("disabled", false);
            },
        });
    }

    // Get billing subdistrict options
    function sdokr_get_billing_subdistrict_options() {
        if ($("#billing_city").val() == "") {
            return;
        }

        $("#billing_subdistrict").attr("disabled", true);

        $.ajax({
            url: sdongkir_lcz.ajaxurl,
            type: "POST",
            data: {
                action: "ongkir_get_subdistricts_by_city_id",
                nonce_ajax: sdongkir_lcz.nonce,
                city_id: $("#billing_city").val(),
            },
            success: function (res) {
                const subdistricts = res.data.data;

                $("#billing_subdistrict").empty();
                $("#billing_subdistrict").val() == "";

                subdistricts.forEach((subdistrict) => {
                    $("#billing_subdistrict").append(
                        $("<option></option>")
                            .attr("value", "")
                            .text(sdongkir_lcz.please_select_text),
                    );
                    $("#billing_subdistrict").append(
                        $("<option></option>")
                            .attr("value", subdistrict.subdistrict_id)
                            .text(subdistrict.name),
                    );
                });

                $("#billing_subdistrict").attr("disabled", false);
            },
            error: function (err) {
                $("#billing_subdistrict").attr("disabled", false);
            },
        });
    }

    // Get shipping subdistrict options
    function sdokr_get_shipping_subdistrict_options() {
        if ($("#shipping_city").val() == "") {
            return;
        }

        $("#shipping_subdistrict").attr("disabled", true);

        $.ajax({
            url: sdongkir_lcz.ajaxurl,
            type: "POST",
            data: {
                action: "ongkir_get_subdistricts_by_city_id",
                nonce_ajax: sdongkir_lcz.nonce,
                city_id: $("#shipping_city").val(),
            },
            success: function (res) {
                const subdistricts = res.data.data;

                $("#shipping_subdistrict").empty();
                $("#shipping_subdistrict").val() == "";

                subdistricts.forEach((subdistrict) => {
                    $("#shipping_subdistrict").append(
                        $("<option></option>")
                            .attr("value", "")
                            .text(sdongkir_lcz.please_select_text),
                    );
                    $("#shipping_subdistrict").append(
                        $("<option></option>")
                            .attr("value", subdistrict.subdistrict_id)
                            .text(subdistrict.name),
                    );
                });

                $("#shipping_subdistrict").attr("disabled", false);
            },
            error: function (err) {
                $("#shipping_subdistrict").attr("disabled", false);
            },
        });
    }
});
