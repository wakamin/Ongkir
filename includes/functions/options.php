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
        return get_option('sdokr_shipping_cost_couriers', []);
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
        return get_option('sdokr_tracking_couriers', []);
    }
}

if (!function_exists('sdongkir_wc_enabled_shipping')) {
    /**
     * Get enabled shipping couriers for WooCommerce shipping
     *
     * @return Array
     */
    function sdongkir_wc_enabled_shipping()
    {
        $setting = get_option('sdokr_wc_enabled_shipping', '');

        return $setting != '' ? unserialize($setting) : [];
    }
}

if (!function_exists('sdongkir_wc_courier_active_services')) {
    /**
     * Get active courier services for WooCommerce shipping
     *
     * @param String $courierCode
     * @return Array
     */
    function sdongkir_wc_courier_active_services($courierCode)
    {
        $setting = get_option('sdokr_wc_'.$courierCode.'_active_services', '');

        return $setting != '' ? unserialize($setting) : [];
    }
}

if (!function_exists('sdongkir_wc_all_active_services')) {
    /**
     * Get all active courier services for WooCommerce shipping
     *
     * @return Array
     */
    function sdongkir_wc_all_active_services()
    {
        $services = [];
        foreach (sdongkir_all_couriers() as $code => $courier) {
            $setting = get_option('sdokr_wc_'.$code.'_active_services', '');
            if ($setting != '') {
                $services[] = unserialize($setting);
            }
        }

        return array_reduce($services, 'array_merge', array());
    }
}

if (!function_exists('sdongkir_wc_courier_service_title')) {
    /**
     * Get courier service title for WooCommerce shipping
     *
     * @string $courierCode
     * @string $serviceCode
     * @return Array
     */
    function sdongkir_wc_courier_service_title($courierCode, $serviceCode)
    {
        $formattedServiceCode = sdongkir_format_shipping_service_code($serviceCode);
        $title = get_option('sdokr_wc_'.$courierCode.'_'.$formattedServiceCode.'_title', '');

        if ($title === '') {
            $serviceFunc = 'sdongkir_'.$courierCode.'_services';
            $default = call_user_func($serviceFunc);
            $title = $default[$serviceCode];
        }

        return $title;
    }
}
