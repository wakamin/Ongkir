import $ from "jquery";
import "select2";

$(document).ready(function () {
    const html = {
        city_text: `<input type="text" class="input-text" value="" placeholder="${sdongkir_lcz.city_text}" name="calc_shipping_city" id="calc_shipping_city" />`,
        city_select: `<select name="calc_shipping_city" class="state_select" id="calc_shipping_city" data-placeholder="${sdongkir_lcz.city_text}">
                <option value="">${sdongkir_lcz.please_select_text}</option>
            </select>`,
    };

    // Initialize the input field type
    if ($("#calc_shipping_country").val() == "ID") {
        $("#calc_shipping_subdistrict_field").removeClass("sdokr-hide");
    } else {
        $("#calc_shipping_subdistrict_field").addClass("sdokr-hide");
    }

    // On country change
    $(document).on("change", "#calc_shipping_country", function () {
        $("#calc_shipping_city").empty();
        $("#calc_shipping_city").val() == "";
        $("#calc_shipping_subdistrict").empty();
        $("#calc_shipping_subdistrict").val() == "";
        $("#calc_shipping_city_field").empty();

        if ($(this).val() == "ID") {
            $("#calc_shipping_city_field").append(html.city_select);
            $("#calc_shipping_city").select2();
            $("#calc_shipping_subdistrict_field").removeClass("sdokr-hide");
            $("#calc_shipping_subdistrict").select2();
        } else {
            $("#calc_shipping_city_field").append(html.city_text);
            $("#calc_shipping_subdistrict_field").addClass("sdokr-hide");
        }
    });

    // On state change
    $(document).on("change", "#calc_shipping_state", function () {
        const state = $(this).val().split("-");
        const province_id = state[1];
        if (province_id != undefined) {
            sdokr_get_city_options(province_id);
        }
    });

    // On city change
    $(document).on("change", "#calc_shipping_city", function () {
        if ($("#calc_shipping_country").val() == "ID") {
            sdokr_get_subdistrict_options($(this).val());
        }
    });

    // Get city options
    function sdokr_get_city_options(province_id) {
        return new Promise(function (resolve, reject) {
            if (province_id == "") {
                resolve();
            }

            $("#calc_shipping_city").attr("disabled", true);
            $("#calc_shipping_subdistrict").attr("disabled", true);

            $("#calc_shipping_city").empty();
            $("#calc_shipping_city").val() == "";
            $("#calc_shipping_subdistrict").empty();
            $("#calc_shipping_subdistrict").val() == "";

            $.ajax({
                url: sdongkir_lcz.ajaxurl,
                type: "POST",
                data: {
                    action: "ongkir_get_cities_by_province_id",
                    nonce_ajax: sdongkir_lcz.nonce,
                    province_id: province_id,
                },
                success: function (res) {
                    const cities = res.data.data;

                    $("#calc_shipping_city").append(
                        $("<option></option>")
                            .attr("value", "")
                            .text(sdongkir_lcz.please_select_text),
                    );
                    cities.forEach((city) => {
                        $("#calc_shipping_city").append(
                            $("<option></option>")
                                .attr("value", city.city_id)
                                .text(`${city.type} ${city.name}`),
                        );
                    });

                    $("#calc_shipping_city").attr("disabled", false);
                    $("#calc_shipping_subdistrict").attr("disabled", false);

                    resolve();
                },
                error: function (err) {
                    $("#calc_shipping_city").attr("disabled", false);
                    $("#calc_shipping_subdistrict").attr("disabled", false);
                    reject("Something went wrong");
                },
            });
        });
    }

    // Get subdistrict options
    function sdokr_get_subdistrict_options(city_id) {
        return new Promise(function (resolve, reject) {
            if (city_id == "") {
                resolve();
            }

            $("#calc_shipping_subdistrict").attr("disabled", true);

            $("#calc_shipping_subdistrict").empty();
            $("#calc_shipping_subdistrict").val() == "";

            $.ajax({
                url: sdongkir_lcz.ajaxurl,
                type: "POST",
                data: {
                    action: "ongkir_get_subdistricts_by_city_id",
                    nonce_ajax: sdongkir_lcz.nonce,
                    city_id: city_id,
                },
                success: function (res) {
                    const subdistricts = res.data.data;

                    $("#calc_shipping_subdistrict").append(
                        $("<option></option>")
                            .attr("value", "")
                            .text(sdongkir_lcz.please_select_text),
                    );
                    subdistricts.forEach((subdistrict) => {
                        $("#calc_shipping_subdistrict").append(
                            $("<option></option>")
                                .attr("value", subdistrict.subdistrict_id)
                                .text(subdistrict.name),
                        );
                    });

                    $("#calc_shipping_subdistrict").attr("disabled", false);

                    resolve();
                },
                error: function (err) {
                    $("#calc_shipping_subdistrict").attr("disabled", false);
                    reject("Something went wrong");
                },
            });
        });
    }
});
