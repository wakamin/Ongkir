<?php

// Exit if accessed directly
if (!defined('ABSPATH')) {
    exit();
}

if (!function_exists('sdongkir_shipping_cost_icon')) {
    /**
     * Get shipping cost icon
     *
     * @return String
     */
    function sdongkir_shipping_cost_icon()
    {
        return apply_filters('sdongkir_shipping_cost_icon', '<span class="dashicons dashicons-money-alt"></span>');
    }
}

if (!function_exists('sdongkir_shipping_track_icon')) {
    /**
     * Get shipping track icon
     *
     * @return String
     */
    function sdongkir_shipping_track_icon()
    {
        return apply_filters('sdongkir_shipping_track_icon', '<span class="dashicons dashicons-location"></span>');
    }
}

if (!function_exists('sdongkir_close_icon')) {
    /**
     * Get close icon
     *
     * @return String
     */
    function sdongkir_close_icon()
    {
        return apply_filters('sdongkir_close_icon', '<span class="dashicons dashicons-no-alt"></span>');
    }
}

if (!function_exists('sdongkir_shipping_track_result_icon')) {
    /**
     * Get shipping track result icon
     *
     * @return String
     */
    function sdongkir_shipping_track_result_icon()
    {
        return apply_filters('sdongkir_shipping_track_result_icon', '<span class="dashicons dashicons-location"></span>');
    }
}
