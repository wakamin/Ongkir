import $ from "jquery";

$(function () {
    "use strict";

    // Setting page
    let sdokr_setting_els = {
        setting_form: $("#sdokr_setting_form"),
        account_type: $("#sdokr_rajaongkir_account_type"),
        get_location_btn: $("#sdokr-get-location"),
        loading_block: $(".sdokr-loading"),
        loading_text: $(".sdokr-loading__text"),
        get_location_msg: $(".sdokr-get-location-msg"),
        get_location_spinner: $("#sdokr-get-location").children(".spinner"),
    };

    let sdokr_setting_func = {
        get_location: function () {
            sdokr_setting_els.get_location_btn.attr("disabled", true);
            sdokr_setting_els.loading_block.removeClass("sdokr-hide");
            sdokr_setting_els.get_location_spinner.removeClass("sdokr-hide");
            sdokr_setting_els.get_location_msg.addClass("sdokr-hide");
            sdokr_setting_func
                .get_province()
                .then((res) => {
                    return sdokr_setting_func.get_city();
                })
                .then((res) => {
                    return sdokr_setting_func.get_intl_origin();
                })
                .then((res) => {
                    return sdokr_setting_func.get_intl_destination();
                })
                .then((res) => {
                    sdokr_setting_func.get_all_subdistricts();
                })
                .catch((err) => {
                    console.log(err);
                });
        },
        get_province: function () {
            sdokr_setting_els.loading_text.html(sdongkir_lcz.get_province_text);
            return new Promise(function (resolve, reject) {
                $.ajax({
                    url: sdongkir_lcz.ajaxurl,
                    type: "POST",
                    data: {
                        action: "ongkir_get_province",
                        nonce_ajax: sdongkir_lcz.nonce,
                    },
                    success: function (res) {
                        // console.log(res);
                        let data = res.data;
                        resolve(data);
                    },
                    error: function (err) {
                        console.log(err);
                        alert(err.responseJSON.data.message);
                        reject(err.responseJSON.data.message);
                    },
                });
            });
        },
        get_city: function () {
            sdokr_setting_els.loading_text.html(sdongkir_lcz.get_city_text);
            return new Promise(function (resolve, reject) {
                $.ajax({
                    url: sdongkir_lcz.ajaxurl,
                    type: "POST",
                    data: {
                        action: "ongkir_get_city",
                        nonce_ajax: sdongkir_lcz.nonce,
                    },
                    success: function (res) {
                        // console.log(res);
                        let data = res.data;
                        resolve(data);
                    },
                    error: function (err) {
                        console.log(err);
                        alert(err.responseJSON.data.message);
                        reject(err.responseJSON.data.message);
                    },
                });
            });
        },
        get_subdistrict: function (last_city_id = 0) {
            return new Promise(function (resolve, reject) {
                $.ajax({
                    url: sdongkir_lcz.ajaxurl,
                    type: "POST",
                    data: {
                        action: "ongkir_get_subdistrict",
                        nonce_ajax: sdongkir_lcz.nonce,
                        last_city_id: last_city_id,
                    },
                    success: function (res) {
                        // console.log(res);
                        let data = res.data;
                        sdokr_setting_els.loading_text.html(data.message);
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

                    if (!data.done) {
                        sdokr_setting_func.get_all_subdistricts(data.city_id);
                    } else {
                        sdokr_setting_els.get_location_btn.attr(
                            "disabled",
                            false,
                        );
                        sdokr_setting_els.get_location_spinner.addClass(
                            "sdokr-hide",
                        );
                        sdokr_setting_els.get_location_msg.removeClass(
                            "sdokr-hide",
                        );
                        sdokr_setting_els.loading_block.addClass("sdokr-hide");
                        window.location.reload();
                    }
                })
                .catch((err) => {
                    console.log(err);
                });
        },
        get_intl_origin: function () {
            sdokr_setting_els.loading_text.html(
                sdongkir_lcz.get_intl_origin_text,
            );
            return new Promise(function (resolve, reject) {
                $.ajax({
                    url: sdongkir_lcz.ajaxurl,
                    type: "POST",
                    data: {
                        action: "ongkir_get_intl_origin",
                        nonce_ajax: sdongkir_lcz.nonce,
                    },
                    success: function (res) {
                        // console.log(res);
                        let data = res.data;
                        resolve(data);
                    },
                    error: function (err) {
                        console.log(err);
                        alert(err.responseJSON.data.message);
                        reject(err.responseJSON.data.message);
                    },
                });
            });
        },
        get_intl_destination: function () {
            sdokr_setting_els.loading_text.html(
                sdongkir_lcz.get_intl_destination_text,
            );
            return new Promise(function (resolve, reject) {
                $.ajax({
                    url: sdongkir_lcz.ajaxurl,
                    type: "POST",
                    data: {
                        action: "ongkir_get_intl_destination",
                        nonce_ajax: sdongkir_lcz.nonce,
                    },
                    success: function (res) {
                        // console.log(res);
                        let data = res.data;
                        resolve(data);
                    },
                    error: function (err) {
                        console.log(err);
                        alert(err.responseJSON.data.message);
                        reject(err.responseJSON.data.message);
                    },
                });
            });
        },
    };

    // On click get location button
    sdokr_setting_els.get_location_btn.on("click", function () {
        sdokr_setting_func.get_location();
    });
});
