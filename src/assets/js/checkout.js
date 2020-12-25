import $ from "jquery";

$(document).ready(function () {
    sdokr_billing_subdistrict_show_hide();
    sdokr_shipping_subdistrict_show_hide();

    // On change billing country
    $("#billing_country").on("change", function () {
        sdokr_billing_subdistrict_show_hide();
    });

    // On change shipping country
    $("#shipping_country").on("change", function () {
        sdokr_shipping_subdistrict_show_hide();
    });

    // Show hide billing subdistrict
    function sdokr_billing_subdistrict_show_hide() {
        if ($("#billing_country").val() == "ID") {
            $("#billing_subdistrict_field")
                .children("label")
                .html(
                    `${sdongkir_lcz.subdistrict_text}&nbsp;<abbr class="required" title="required">*</abbr>`,
                );
            $("#billing_subdistrict_field").fadeIn();
        } else {
            $("#billing_subdistrict_field").fadeOut();
        }
    }

    // Show hide shipping subdistrict
    function sdokr_shipping_subdistrict_show_hide() {
        if ($("#shipping_country").val() == "ID") {
            $("#shipping_subdistrict_field")
                .children("label")
                .html(
                    `${sdongkir_lcz.subdistrict_text}&nbsp;<abbr class="required" title="required">*</abbr>`,
                );
            $("#shipping_subdistrict_field").fadeIn();
        } else {
            $("#shipping_subdistrict_field").fadeOut();
        }
    }
});
