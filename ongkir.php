<?php

/**
 * Plugin Name: Ongkir
 * Plugin URI: https://www.samudradigital.com
 * Description: Indonesia shipping cost and delivery tracking Wordpress plugin powered by RajaOngkir API.
 * Version: 1.0.0
 * Author: Kasmin
 * Author URI: https://kasminco.com/
 * License: GPL-2.0+
 * License URI: http://www.gnu.local/license/gpl-2.0.txt
 * Text Domain: sd_ongkir
 *
 * WC requires at least: 2.2
 * WC tested up to: 2.3
 */

// Exit if accessed directly
if (!defined('ABSPATH')) {
    exit();
}

// Constants
define('SDONGKIR_PLUGIN_URL', plugin_dir_url(__FILE__));
define('SDONGKIR_PLUGIN_PATH', plugin_dir_path(__FILE__));

// Initialize
require_once SDONGKIR_PLUGIN_PATH . 'init.php';

// Test API
add_action('rest_api_init', function () {
    register_rest_route('ongkir/v1', '/test', [
        'method' => 'GET',
        'callback' => 'ongkir_test_api'
    ]);
});

function ongkir_test_api()
{
    $provinces = sdongkir_provinces();

    wp_send_json_success($provinces);
}
