import $ from "jquery";

$(document).ready(function () {
    const els = {
        country: $("select[name='woocommerce_default_country']"),
        subdistrict: $("#sdongkir_shipping_origin_subdistrict_id"),
    };

    els.country.on("change", function () {
        const countryVal = els.country.val().split(":");
        const country = countryVal[0];

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

            const provinceArr = countryVal[1].split("-");
            const province_id = provinceArr[1];
            sdokr_get_shipping_city_options(province_id);
        } else {
            if (!cityEl.parent("td").hasClass("forminp-text")) {
                const inputText = `<td class="forminp forminp-text">
                    <input name="woocommerce_store_city" id="woocommerce_store_city" type="text" style="" value="" class="" placeholder="">
                </td>`;
                cityEl.parent("td").remove();
                cityOptWrapper.append(inputText);
            }
        }
    });

    // Get shipping city options
    function sdokr_get_shipping_city_options(province_id) {
        return new Promise(function (resolve, reject) {
            if (province_id == "") {
                resolve();
            }

            $("#woocommerce_store_city").attr("disabled", true);
            els.subdistrict.attr("disabled", true);
            $("#woocommerce_store_city").empty();
            $("#woocommerce_store_city").val() == "";
            els.subdistrict.empty();
            els.subdistrict.val() == "";

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
                                .text(`${city.type} ${city.name}`),
                        );
                    });

                    els.subdistrict.append(
                        $("<option></option>")
                            .attr("value", "")
                            .text(sdongkir_lcz.please_select_text),
                    );

                    $("#woocommerce_store_city").attr("disabled", false);
                    els.subdistrict.attr("disabled", false);

                    resolve();
                },
                error: function (err) {
                    $("#woocommerce_store_city").attr("disabled", false);
                    els.subdistrict.attr("disabled", false);
                    reject("Something went wrong");
                },
            });
        });
    }
});
