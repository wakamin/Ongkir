<?php

/**
 * Plugin Name: Ongkir
 * Plugin URI: https://docs.samudradigital.com/category/wordpress/ongkir-wordpress-plugin
 * Description: Indonesia shipping cost and delivery tracking Wordpress plugin powered by RajaOngkir API.
 * Version: 1.0.0
 * Author: Kasmin
 * Author URI: https://kasmin.id
 * License: GPL-2.0+
 * License URI: http://www.gnu.local/license/gpl-2.0.txt
 * Text Domain: sd_ongkir
 *
 * WC requires at least: 3.0.0
 * WC tested up to: 6.0.0
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
