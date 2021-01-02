import $ from "jquery";

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
            $("#calc_shipping_subdistrict_field").removeClass("sdokr-hide");
        } else {
            $("#calc_shipping_city_field").append(html.city_text);
            $("#calc_shipping_subdistrict_field").addClass("sdokr-hide");
        }
    });

    // On state change
    $(document).on("change", "#calc_shipping_state", function () {
        const province = $(this).val();
        if (province != undefined) {
            sdokr_get_city_options(province);
        }
    });

    // On city change
    $(document).on("change", "#calc_shipping_city", function () {
        if ($("#calc_shipping_country").val() == "ID") {
            sdokr_get_subdistrict_options($(this).val());
        }
    });

    // On change subdistrict
    $(document).on("change", "#calc_shipping_subdistrict", function () {
        sdokr_set_session_subdistrict($(this).val());
    });

    // Get city options
    function sdokr_get_city_options(province) {
        return new Promise(function (resolve, reject) {
            if (province == "") {
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
                    action: "ongkir_get_cities_by_province",
                    nonce_ajax: sdongkir_lcz.nonce,
                    province: province,
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
                                .attr("value", `${city.type} ${city.name}`)
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
    function sdokr_get_subdistrict_options(city) {
        return new Promise(function (resolve, reject) {
            if (city == "") {
                resolve();
            }

            $("#calc_shipping_subdistrict").attr("disabled", true);

            $("#calc_shipping_subdistrict").empty();
            $("#calc_shipping_subdistrict").val() == "";

            $.ajax({
                url: sdongkir_lcz.ajaxurl,
                type: "POST",
                data: {
                    action: "ongkir_get_subdistricts_by_city",
                    nonce_ajax: sdongkir_lcz.nonce,
                    city: city,
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
                                .attr("value", subdistrict.name)
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

    // Set session subdistrict
    function sdokr_set_session_subdistrict(subdistrict_id) {
        return new Promise(function (resolve, reject) {
            $('button[name="calc_shipping"]').attr("disabled", true);
            $.ajax({
                url: sdongkir_lcz.ajaxurl,
                type: "POST",
                data: {
                    action: "ongkir_set_session_subdistrict",
                    nonce_ajax: sdongkir_lcz.nonce,
                    subdistrict_id: subdistrict_id,
                },
                success: function (res) {
                    $('button[name="calc_shipping"]').attr("disabled", false);
                    resolve(res);
                },
                error: function (err) {
                    $('button[name="calc_shipping"]').attr("disabled", false);
                    reject(err);
                },
            });
        });
    }
});
