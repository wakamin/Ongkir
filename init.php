<?php

// Exit if accessed directly
if (!defined('ABSPATH')) {
    exit();
}

// DB setup on activation
include_once SDONGKIR_PLUGIN_PATH . 'includes/install/class-sdongkir-db-setup.php';

// Translation
include_once SDONGKIR_PLUGIN_PATH . 'includes/translation/class-sdongkir-translation.php';

// Rajaongkir
include_once SDONGKIR_PLUGIN_PATH . 'includes/services/rajaongkir/class-sdongkir-rajaongkir.php';

// Setting
include_once SDONGKIR_PLUGIN_PATH . 'includes/admin/class-sdongkir-settings.php';

// Shortcode
include_once SDONGKIR_PLUGIN_PATH . 'includes/frontend/class-sdongkir-shortcode.php';

// Shortcode
include_once SDONGKIR_PLUGIN_PATH . 'includes/frontend/class-sdongkir-frontend-scripts.php';
