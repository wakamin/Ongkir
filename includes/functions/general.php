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
