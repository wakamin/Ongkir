<?php

if (!defined('ABSPATH')) {
    exit;
}

/**
 * Shortcode class
 */
if (!class_exists('SDONGKIR_Shortcode')) {
    class SDONGKIR_Shortcode
    {
        /**
         * Class constructor
         */
        public function __construct()
        {
            add_shortcode('sdongkir', array($this, 'ongkir'));
        }

        /**
         * Display shortcode
         *
         * @return Html
         */
        public function ongkir($atts, $content, $shortcode_tag)
        {
            $shippingCostIcon = apply_filters('sdongkir_shipping_cost_icon', '<span class="dashicons dashicons-money-alt"></span>');
            $shippingTrackingIcon = apply_filters('sdongkir_shipping_cost_icon', '<span class="dashicons dashicons-location"></span>');
            $locations = sdongkir_get_locations();
            ob_start();

            include SDONGKIR_PLUGIN_PATH . 'views/frontend/ongkir.php';

            $output = ob_get_contents();
            ob_end_clean();

            return $output;
        }
    }

    $SDONGKIR_Shortcode = new SDONGKIR_Shortcode();
}
