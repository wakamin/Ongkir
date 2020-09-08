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
            // wp_die($hook);

            if (!in_array($hook, $this->_allowed_pages())) {
                return;
            }

            wp_enqueue_style('ongkir', SDONGKIR_PLUGIN_URL . 'assets/css/admin-ongkir.css');
            
            wp_register_script('ongkir-script', SDONGKIR_PLUGIN_URL . 'assets/js/admin-ongkir.js', array('jquery', 'jquery-ui-progressbar'), '1.0.0', false);
            wp_localize_script(
                'ongkir-script',
                'ongkir_lcz',
                array(
                    'ajaxurl' => admin_url('admin-ajax.php'),
                    'nonce' => wp_create_nonce('ongkir-script-nonce'),
                    'loading_gif' => sdongkir_loading_image_url(),
                    'loading_text' => __('Loading...', 'sd_ongkir'),
                    'get_province_text' => __('Getting provinces data', 'sd_ongkir'),
                    'get_city_text' => __('Getting cities data', 'sd_ongkir'),
                    'get_subdistrict_text' => __('Getting subdistricts data', 'sd_ongkir')
                )
            );
            wp_enqueue_script('ongkir-script');
        }
    }

    $SDONGKIR_Admin_Scripts = new SDONGKIR_Admin_Scripts();
}
