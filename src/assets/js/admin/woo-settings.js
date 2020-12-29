import $ from "jquery";

$(document).ready(function () {
    const els = {
        country: $("select[name='woocommerce_default_country']"),
        subdistrict: $("#sdongkir_shipping_origin_subdistrict_id"),
        subdistrict_tr: $("#sdongkir_shipping_origin_subdistrict_id")
            .parent("td")
            .parent("tr"),
    };
    const subdistrict_exists = els.subdistrict.length > 0 ? true : false;

    // Hide the subdistrict if store country is not Indonesia
    if (sdokr_country_province().country != "ID") {
        if (subdistrict_exists) {
            els.subdistrict_tr.hide();
        }
    }

    // On change country
    els.country.on("change", function () {
        /**
         * Immediatelly update the store country option
         * So we can get updated allowed values to be store to the store city
         */
        sdokr_update_store_country($(this).val()).then(function () {
            const ctryProv = sdokr_country_province();
            const country = ctryProv.country;

            const cityEl = $("#mainform .form-table #woocommerce_store_city");
            const cityOptWrapper = cityEl.parent("td").parent("tr");

            if (country == "ID") {
                if (!cityEl.parent("td").hasClass("forminp-select")) {
                    const inputText = `<td class="forminp forminp-select">
                        <select name="woocommerce_store_city" id="woocommerce_store_city" style="" class="">
                            <option value="" selected="selected">Please select</option>
                        </select>
                    </td>`;
                    cityEl.parent("td").remove();
                    cityOptWrapper.append(inputText);
                }

                sdokr_shipping_city_options(ctryProv.province);
                // Show the subdistrict
                if (subdistrict_exists) {
                    els.subdistrict_tr.show();
                }
            } else {
                if (!cityEl.parent("td").hasClass("forminp-text")) {
                    const inputText = `<td class="forminp forminp-text">
                        <input name="woocommerce_store_city" id="woocommerce_store_city" type="text" style="" value="" class="" placeholder="">
                    </td>`;
                    cityEl.parent("td").remove();
                    cityOptWrapper.append(inputText);
                }

                // Hide the subdistrict
                if (subdistrict_exists) {
                    els.subdistrict_tr.hide();
                }
            }
        });
    });

    // On change city
    $("#mainform").on("change", "#woocommerce_store_city", function () {
        const city = $(this).val();

        /**
         * Immediatelly update the store city option
         * So we can get updated allowed values to be store to the store subdistrict
         */
        sdokr_update_store_city(city).then(function () {
            const ctryProv = sdokr_country_province();
            const country = ctryProv.country;

            if (country != "ID") {
                return;
            }

            if (subdistrict_exists) {
                sdokr_shipping_subdistrict_options(city);
            }
        });
    });

    // Get country and province value
    function sdokr_country_province() {
        const countryVal = els.country.val().split(":");
        let province_id = "";

        if (countryVal[0] == "ID") {
            const provinceArr = countryVal[1].split("-");
            province_id = provinceArr[1];
        } else {
            province_id = countryVal.length == 2 ? countryVal[1] : "";
        }

        return {
            country: countryVal[0],
            province: province_id,
        };
    }

    // Update store country
    function sdokr_update_store_country(country) {
        return new Promise(function (resolve, reject) {
            $("#woocommerce_store_city").attr("disabled", true);
            $("#woocommerce_store_city").empty();

            if (subdistrict_exists) {
                els.subdistrict.attr("disabled", true);
                els.subdistrict.empty();
            }

            $.ajax({
                url: sdongkir_lcz.ajaxurl,
                type: "POST",
                data: {
                    action: "ongkir_update_store_country",
                    nonce_ajax: sdongkir_lcz.nonce,
                    country: country,
                },
                success: function (res) {
                    $("#woocommerce_store_city").attr("disabled", false);
                    els.subdistrict.attr("disabled", false);
                    resolve();
                },
            });
        });
    }

    // Update store city
    function sdokr_update_store_city(city) {
        return new Promise(function (resolve, reject) {
            if (subdistrict_exists) {
                els.subdistrict.attr("disabled", true);
                els.subdistrict.empty();
            }

            $.ajax({
                url: sdongkir_lcz.ajaxurl,
                type: "POST",
                data: {
                    action: "ongkir_update_store_city",
                    nonce_ajax: sdongkir_lcz.nonce,
                    city: city,
                },
                success: function (res) {
                    if (subdistrict_exists) {
                        els.subdistrict.attr("disabled", false);
                    }
                    resolve();
                },
            });
        });
    }

    // Get shipping city options
    function sdokr_shipping_city_options(province_id, selected_id = "") {
        return new Promise(function (resolve, reject) {
            if (province_id == "") {
                resolve();
            }

            $("#woocommerce_store_city").attr("disabled", true);
            $("#woocommerce_store_city").empty();
            if (subdistrict_exists) {
                els.subdistrict.attr("disabled", true);
                els.subdistrict.empty();
            }

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

                    $("#woocommerce_store_city").append(
                        $("<option></option>")
                            .attr("value", "")
                            .text(sdongkir_lcz.please_select_text),
                    );
                    cities.forEach((city) => {
                        $("#woocommerce_store_city").append(
                            $("<option></option>")
                                .attr("value", city.city_id)
                                .attr(
                                    "selected",
                                    selected_id == city.city_id
                                        ? "selected"
                                        : false,
                                )
                                .text(`${city.type} ${city.name}`),
                        );
                    });

                    if (subdistrict_exists) {
                        els.subdistrict.append(
                            $("<option></option>")
                                .attr("value", "")
                                .text(sdongkir_lcz.please_select_text),
                        );
                        els.subdistrict.attr("disabled", false);
                    }

                    $("#woocommerce_store_city").attr("disabled", false);

                    resolve();
                },
                error: function (err) {
                    $("#woocommerce_store_city").attr("disabled", false);
                    if (subdistrict_exists) {
                        els.subdistrict.attr("disabled", false);
                    }
                    reject("Something went wrong");
                },
            });
        });
    }

    // Get shipping subdistrict options
    function sdokr_shipping_subdistrict_options(city_id, selected_id = "") {
        return new Promise(function (resolve, reject) {
            if (city_id == "") {
                resolve();
            }

            els.subdistrict.attr("disabled", true);
            els.subdistrict.empty();

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

                    els.subdistrict.append(
                        $("<option></option>")
                            .attr("value", "")
                            .text(sdongkir_lcz.please_select_text),
                    );
                    subdistricts.forEach((subdistrict) => {
                        els.subdistrict.append(
                            $("<option></option>")
                                .attr("value", subdistrict.subdistrict_id)
                                .attr(
                                    "selected",
                                    selected_id == subdistrict.subdistrict_id
                                        ? "selected"
                                        : false,
                                )
                                .text(subdistrict.name),
                        );
                    });

                    els.subdistrict.attr("disabled", false);

                    resolve();
                },
                error: function (err) {
                    els.subdistrict.attr("disabled", false);
                    reject("Something went wrong");
                },
            });
        });
    }
});
