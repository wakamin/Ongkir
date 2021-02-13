<?php

// Exit if accessed directly
if (!defined('ABSPATH')) {
    exit();
}

if (!function_exists('sdongkir_loading_image_url')) {
    /**
     * Get loading image url
     *
     * @return String
     */
    function sdongkir_loading_image_url()
    {
        return SDONGKIR_PLUGIN_URL. 'assets/images/loading.gif';
    }
}

if (!function_exists('sdongkir_format_shipping_service_code')) {
    /**
     * Format shipping courier service code to lowercase
     *
     * @param String $serviceCode
     * @return String
     */
    function sdongkir_format_shipping_service_code($serviceCode)
    {
        return strtolower(str_replace(' ', '_', $serviceCode));
    }
}
