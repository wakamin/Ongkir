import $ from "jquery";

$(document).ready(function () {
    "use strict";

    // Setting page
    let sdokr_setting_els = {
        get_location_btn: $("#sdokr-get-location"),
        loading_block: $(".sdokr-loading"),
        loading_text: $(".sdokr-loading__text"),
    };

    let sdokr_setting_func = {
        get_location: function () {
            sdokr_setting_func
                .get_province()
                .then((res) => {
                    console.log(res);
                    return sdokr_setting_func.get_city();
                })
                .then((res) => {
                    console.log(res);
                    sdokr_setting_func.get_all_subdistricts();
                })
                .catch((err) => {
                    console.log(err);
                });
        },
        get_province: function () {
            sdokr_setting_els.loading_text.html(ongkir_lcz.get_province_text);
            return new Promise(function (resolve, reject) {
                $.ajax({
                    url: ongkir_lcz.ajaxurl,
                    type: "POST",
                    data: {
                        action: "ongkir_get_province",
                        nonce_ajax: ongkir_lcz.nonce,
                    },
                    success: function (res) {
                        // console.log(res);
                        resolve("Getting provinces success");
                    },
                    error: function (err) {
                        console.log(err);
                        alert(err.responseJSON.data.message);
                        reject("Getting provinces error");
                    },
                });
            });
        },
        get_city: function () {
            sdokr_setting_els.loading_text.html(ongkir_lcz.get_city_text);
            return new Promise(function (resolve, reject) {
                $.ajax({
                    url: ongkir_lcz.ajaxurl,
                    type: "POST",
                    data: {
                        action: "ongkir_get_city",
                        nonce_ajax: ongkir_lcz.nonce,
                    },
                    success: function (res) {
                        // console.log(res);
                        let data = res.data;
                        resolve(data);
                    },
                    error: function (err) {
                        console.log(err);
                        alert(err.responseJSON.data.message);
                        reject("Getting cities error");
                    },
                });
            });
        },
        get_subdistrict: function (last_city_id = 0) {
            sdokr_setting_els.loading_text.html(
                ongkir_lcz.get_subdistrict_text,
            );
            return new Promise(function (resolve, reject) {
                $.ajax({
                    url: ongkir_lcz.ajaxurl,
                    type: "POST",
                    data: {
                        action: "ongkir_get_subdistrict",
                        nonce_ajax: ongkir_lcz.nonce,
                        last_city_id: last_city_id,
                    },
                    success: function (res) {
                        // console.log(res);
                        let data = res.data;
                        resolve(data);
                    },
                    error: function (err) {
                        console.log(err);
                        alert(err.responseJSON.data.message);
                        reject("Getting subdistricts error");
                    },
                });
            });
        },
        get_all_subdistricts: function (last_city_id = 0) {
            sdokr_setting_func
                .get_subdistrict(last_city_id)
                .then((res) => {
                    let data = res.data;
                    let message = res.message;

                    if (!data.done) {
                        sdokr_setting_func.get_all_subdistricts(data.city_id);
                    }
                })
                .catch((err) => {
                    console.log(err);
                });
        },
    };

    sdokr_setting_els.get_location_btn.on("click", function () {
        sdokr_setting_els.loading_block.removeClass("sdokr-hide");
        sdokr_setting_func.get_location();
    });
});
