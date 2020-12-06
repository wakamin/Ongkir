<?php
if (!defined('ABSPATH')) {
    exit;
}

/**
 * Frontend scripts
 */
if (!class_exists('SDONGKIR_Frontend_Scripts')) {
    class SDONGKIR_Frontend_Scripts
    {
        /**
         * Class constructor
         */
        public function __construct()
        {
            add_action('wp_enqueue_scripts', array($this, 'frontend_scripts'));
        }

        /**
         * Frontend scripts
         *
         * @param String $hook
         * @return void
         */
        public function frontend_scripts($hook)
        {
            // wp_die($hook);

            wp_enqueue_style('sdongkir-frontend', SDONGKIR_PLUGIN_URL . 'assets/css/frontend-ongkir.css');
            
            wp_register_script('sdongkir-frontend-script', SDONGKIR_PLUGIN_URL . 'assets/js/frontend-ongkir.js', array('jquery'), '1.0.0', false);
            
            wp_localize_script(
                'sdongkir-frontend-script',
                'sdongkir_lcz',
                array(
                    'ajaxurl' => admin_url('admin-ajax.php'),
                    'nonce' => wp_create_nonce('sdongkir-script-nonce'),
                    'loading_gif' => SDONGKIR_PLUGIN_URL . 'assets/images/loading.gif',
                    'submit_text' => __('Submit', 'sd_ongkir'),
                    'processing_text' => __('Processing...', 'sd_ongkir'),
                    'get_shipping_cost_text' => __('Get Shipping Costs', 'sd_ongkir'),
                    'get_shipping_track_text' => __('Track Shipment', 'sd_ongkir'),
                    'close_label' => __('Close', 'sd_ongkir'),
                    'single_selection' => __('Single selection', 'sd_ongkir'),
                    'multiple_selection' => __('Multiple selection', 'sd_ongkir')
                )
            );
            wp_enqueue_script('sdongkir-frontend-script');
        }
    }

    $SDONGKIR_Frontend_Scripts = new SDONGKIR_Frontend_Scripts();
}
