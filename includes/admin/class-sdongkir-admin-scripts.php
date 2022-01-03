<?php
if (!defined('ABSPATH')) {
    exit;
}

/**
 * Admin scripts
 */
if (!class_exists('SDONGKIR_Admin_Scripts')) {
    class SDONGKIR_Admin_Scripts
    {
        /**
         * Class constructor
         */
        public function __construct()
        {
            add_action('admin_enqueue_scripts', array($this, 'scripts'));
        }

        /**
         * Allowed pages to inject script
         *
         * @return Array
         */
        private function _allowed_pages()
        {
            return [
                'settings_page_ongkir',
                'woocommerce_page_wc-settings'
            ];
        }

        /**
         * Admin scripts
         *
         * @param String $hook
         * @return void
         */
        public function scripts($hook)
        {
            if (!in_array($hook, $this->_allowed_pages())) {
                return;
            }

            wp_enqueue_style('sdongkir', SDONGKIR_PLUGIN_URL . 'assets/css/admin-ongkir.css');
            
            wp_register_script('sdongkir-script', SDONGKIR_PLUGIN_URL . 'assets/js/admin-ongkir.js', array('jquery', 'jquery-ui-progressbar'), '1.0.0', true);
            
            wp_localize_script(
                'sdongkir-script',
                'sdongkir_lcz',
                array(
                    'ajaxurl' => admin_url('admin-ajax.php'),
                    'nonce' => wp_create_nonce('sdongkir-script-nonce'),
                    'loading_gif' => sdongkir_loading_image_url(),
                    'loading_text' => __('Loading...', 'sd_ongkir'),
                    'get_province_text' => __('Getting provinces data', 'sd_ongkir'),
                    'get_city_text' => __('Getting cities data', 'sd_ongkir'),
                    'get_subdistrict_text' => __('Getting subdistricts data', 'sd_ongkir'),
                    'get_intl_origin_text' => __('Getting international origin data', 'sd_ongkir'),
                    'get_intl_destination_text' => __('Getting international destination data', 'sd_ongkir'),
                    'please_select_text' => __('Please select', 'sd_ongkir'),
                    'account_type' => sdongkir_account_type()
                )
            );
            wp_enqueue_script('sdongkir-script');
        }
    }

    $SDONGKIR_Admin_Scripts = new SDONGKIR_Admin_Scripts();
}
