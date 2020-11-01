import $ from "jquery";

$(document).ready(function () {
    $(".sdokr-select-all").on("click", function () {
        $($(this).data("target")).prop("checked", true);
    });

    $(".sdokr-unselect-all").on("click", function () {
        $($(this).data("target")).prop("checked", false);
    });
});
