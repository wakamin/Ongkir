import $ from "jquery";
import "select2";

$(document).ready(function () {
    // Initialize select2
    $("select#billing_subdistrict").select2();
    $("select#shipping_subdistrict").select2();

    // Initialize address fields
    sdokr_billing_address_fields();
    sdokr_shipping_address_fields();

    // On change billing country
    $("#billing_country").on("change", function () {
        sdokr_billing_address_fields();
    });

    // On change shipping country
    $("#shipping_country").on("change", function () {
        sdokr_shipping_address_fields();
    });

    // Show hide billing subdistrict
    function sdokr_billing_address_fields() {
        if ($("#billing_country").val() == "ID") {
            // Setup subdistrict
            $("#billing_subdistrict_field")
                .children("label")
                .html(
                    `${sdongkir_lcz.subdistrict_text}&nbsp;<abbr class="required" title="required">*</abbr>`,
                );
            $("#billing_subdistrict_field").fadeIn();

            // Setup city
            const billing_city_select = `<select name="billing_city" id="billing_city" class="select" autocomplete="address-level2" data-placeholder="${sdongkir_lcz.please_select_text}"></select>`;
            $("#billing_city_field")
                .children(".woocommerce-input-wrapper")
                .html(billing_city_select);
            $("select#billing_city").select2();
        } else {
            // Setup subdistrict
            $("#billing_subdistrict_field").fadeOut();

            // Setup city
            const billing_city_input =
                '<input type="text" class="input-text " name="billing_city" id="billing_city" placeholder="" value="" autocomplete="address-level2">';
            $("#billing_city_field")
                .children(".woocommerce-input-wrapper")
                .html(billing_city_input);
        }
    }

    // Show hide shipping subdistrict
    function sdokr_shipping_address_fields() {
        if ($("#shipping_country").val() == "ID") {
            // Setup subdistrict
            $("#shipping_subdistrict_field")
                .children("label")
                .html(
                    `${sdongkir_lcz.subdistrict_text}&nbsp;<abbr class="required" title="required">*</abbr>`,
                );
            $("#shipping_subdistrict_field").fadeIn();

            // Setup city
            const shipping_city_select = `<select name="shipping_city" id="shipping_city" class="select" autocomplete="address-level2" data-placeholder="${sdongkir_lcz.please_select_text}"></select>`;
            $("#shipping_city_field")
                .children(".woocommerce-input-wrapper")
                .html(shipping_city_select);
            $("select#shipping_city").select2({
                placeholder: sdongkir_lcz.subdistrict_text,
            });
        } else {
            // Setup subdistrict
            $("#shipping_subdistrict_field").fadeOut();

            // Setup city
            const shipping_city_input =
                '<input type="text" class="input-text " name="shipping_city" id="shipping_city" placeholder="" value="" autocomplete="address-level2">';
            $("#shipping_city_field")
                .children(".woocommerce-input-wrapper")
                .html(shipping_city_input);
        }
    }
});
