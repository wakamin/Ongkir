<?php

// Exit if accessed directly
if (!defined('ABSPATH')) {
    exit();
}

// DB setup on activation
include_once SDONGKIR_PLUGIN_PATH . 'includes/install/class-sdongkir-db-setup.php';

// Translation
include_once SDONGKIR_PLUGIN_PATH . 'includes/translation/class-sdongkir-translation.php';

// General functions
include_once SDONGKIR_PLUGIN_PATH . 'includes/functions/general.php';

// Rajaongkir functions
include_once SDONGKIR_PLUGIN_PATH . 'includes/functions/rajaongkir.php';

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
