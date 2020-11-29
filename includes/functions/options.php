<?php

// Exit if accessed directly
if (!defined('ABSPATH')) {
    exit();
}

if (!function_exists('sdongkir_api_key')) {
    /**
     * Get rajaongkir api key
     *
     * @return String
     */
    function sdongkir_api_key()
    {
        return get_option('sdokr_rajaongkir_api_key');
    }
}

if (!function_exists('sdongkir_account_type')) {
    /**
     * Get rajaongkir account type
     *
     * @return String
     */
    function sdongkir_account_type()
    {
        return get_option('sdokr_rajaongkir_account_type', 'starter');
    }
}

if (!function_exists('sdongkir_shipping_cost_couriers')) {
    /**
     * Get shipping cost active couriers
     *
     * @return Array
     */
    function sdongkir_shipping_cost_couriers()
    {
        return get_option('sdokr_shipping_cost_couriers', array());
    }
}

if (!function_exists('sdongkir_tracking_couriers')) {
    /**
     * Get tracking active couriers
     *
     * @return Array
     */
    function sdongkir_tracking_couriers()
    {
        return get_option('sdokr_tracking_couriers', array());
    }
}
