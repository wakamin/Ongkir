<?php

// Exit if accessed directly
if (!defined('ABSPATH')) {
    exit();
}

// DB setup on activation
include_once SDONGKIR_PLUGIN_PATH . 'includes/install/class-sdongkir-db-setup.php';

// Translation
include_once SDONGKIR_PLUGIN_PATH . 'includes/translation/class-sdongkir-translation.php';

// Database interaction
include_once SDONGKIR_PLUGIN_PATH . 'includes/services/rajaongkir/class-sdongkir-db.php';

// RajaOngkir request location
include_once SDONGKIR_PLUGIN_PATH . 'includes/services/rajaongkir/class-sdongkir-request-location.php';

// RajaOngkir request cost
include_once SDONGKIR_PLUGIN_PATH . 'includes/services/rajaongkir/class-sdongkir-request-cost.php';

// RajaOngkir request tracking
include_once SDONGKIR_PLUGIN_PATH . 'includes/services/rajaongkir/class-sdongkir-request-tracking.php';

// RajaOngkir remote request
include_once SDONGKIR_PLUGIN_PATH . 'includes/services/rajaongkir/class-sdongkir-remote.php';

// General functions
include_once SDONGKIR_PLUGIN_PATH . 'includes/functions/general.php';

// Rajaongkir functions
include_once SDONGKIR_PLUGIN_PATH . 'includes/functions/rajaongkir.php';

// Icon functions
include_once SDONGKIR_PLUGIN_PATH . 'includes/functions/icons.php';

// Sanitize functions
include_once SDONGKIR_PLUGIN_PATH . 'includes/functions/sanitize.php';

// Options functions
include_once SDONGKIR_PLUGIN_PATH . 'includes/functions/options.php';

// Location functions
include_once SDONGKIR_PLUGIN_PATH . 'includes/functions/location.php';

// Shipping services functions
include_once SDONGKIR_PLUGIN_PATH . 'includes/functions/shipping-services.php';

// Ajax abstract class
include_once SDONGKIR_PLUGIN_PATH . 'includes/abstracts/class-sdongkir-ajax.php';

// Setting
include_once SDONGKIR_PLUGIN_PATH . 'includes/admin/class-sdongkir-settings.php';

// Admin ajax
include_once SDONGKIR_PLUGIN_PATH . 'includes/admin/class-sdongkir-admin-ajax.php';

// Admin scripts
include_once SDONGKIR_PLUGIN_PATH . 'includes/admin/class-sdongkir-admin-scripts.php';

// Shortcode
include_once SDONGKIR_PLUGIN_PATH . 'includes/frontend/class-sdongkir-shortcode.php';

// Frontend scripts
include_once SDONGKIR_PLUGIN_PATH . 'includes/frontend/class-sdongkir-frontend-scripts.php';

// Frontend ajax
include_once SDONGKIR_PLUGIN_PATH . 'includes/frontend/class-sdongkir-frontend-ajax.php';

// Widget ajax
include_once SDONGKIR_PLUGIN_PATH . 'includes/widgets/class-sdongkir-widget.php';

/**
 * Check if WooCommerce is active
 **/
if (in_array('woocommerce/woocommerce.php', apply_filters('active_plugins', get_option('active_plugins')))) {
    // WooCommerce template location
    include_once SDONGKIR_PLUGIN_PATH . 'includes/woocommerce/class-sdongkir-woo-template.php';

    // Shipping origin setting
    include_once SDONGKIR_PLUGIN_PATH . 'includes/woocommerce/setting/class-sdongkir-woo-settings.php';

    // Cart
    include_once SDONGKIR_PLUGIN_PATH . 'includes/woocommerce/cart/class-sdongkir-cart-package.php';

    // Woocommerce address
    include_once SDONGKIR_PLUGIN_PATH . 'includes/woocommerce/address/class-sdongkir-woo-address.php';

    // Checkout fields
    include_once SDONGKIR_PLUGIN_PATH . 'includes/woocommerce/checkout/class-sdongkir-checkout-fields.php';

    // WooCommerce related functions
    include_once SDONGKIR_PLUGIN_PATH . 'includes/functions/woocommerce.php';

    // Woocommerce Shipping methods definition
    include_once SDONGKIR_PLUGIN_PATH . 'includes/woocommerce/shipping/class-sdongkir-shipping-definitions.php';

    // JNE Shipping
    include_once SDONGKIR_PLUGIN_PATH . 'includes/woocommerce/shipping/couriers/local/jne.php';

    // Pos Indonesia Shipping
    include_once SDONGKIR_PLUGIN_PATH . 'includes/woocommerce/shipping/couriers/local/pos.php';

    // Pos Indonesia Shipping
    include_once SDONGKIR_PLUGIN_PATH . 'includes/woocommerce/setting/class-sdongkir-ongkir.php';
}
