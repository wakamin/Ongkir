<?php

if (!defined('ABSPATH')) {
    exit;
}

/**
 * Plugin settings class
 */
if (!class_exists('SDONGKIR_Settings')) {
    class SDONGKIR_Settings
    {
        /**
         * Class constructor
         */
        public function __construct()
        {
            add_action('admin_init', array($this, 'register_settings'));

            add_action('admin_menu', array($this, 'register_setting_menu'));

            $plugin = plugin_basename(SDONGKIR_PLUGIN_PATH . 'ongkir.php');
            add_filter("plugin_action_links_$plugin", array($this, 'plugin_settings_link'));
        }

        /**
         * Register settings
         *
         * @return void
         */
        public function register_settings()
        {
            // Main configuration
            add_option('sdokr_rajaongkir_api_key', '');
            add_option('sdokr_rajaongkir_account_type', 'starter'); // starter, basic, pro

            $args = array(
                'type' => 'string',
                'sanitize_callback' => 'sanitize_text_field',
            );

            register_setting('sdokr_options_group', 'sdokr_rajaongkir_api_key', $args);
            register_setting('sdokr_options_group', 'sdokr_rajaongkir_account_type', $args);

            // Shipping cost
            add_option('sdokr_shipping_cost_couriers', array());
            register_setting('sdokr_shipping_cost_couriers_options_group', 'sdokr_shipping_cost_couriers', array(
                'type' => 'array',
                'sanitize_callback' => 'sdokr_sanitize_couriers',
            ));
        }

        /**
         * Register setting menu
         *
         * @return void
         */
        public function register_setting_menu()
        {
            add_options_page(
                'Ongkir',
                'Ongkir',
                'manage_options',
                'ongkir',
                array($this, 'setting_page')
            );
        }

        /**
         * Plugin setting page
         *
         * @return Html
         */
        public function setting_page()
        {
            include SDONGKIR_PLUGIN_PATH . '/views/admin/setting-page.php';
        }

        /**
         * Add settings link in plugins page list
         *
         * @param Array $links
         * @return Array
         */
        public function plugin_settings_link($links)
        {
            $settings_link = '<a href="options-general.php?page=ongkir">Settings</a>';
            array_push($links, $settings_link);
            return $links;
        }
    }
    
    $SDONGKIR_Settings = new SDONGKIR_Settings();
}
