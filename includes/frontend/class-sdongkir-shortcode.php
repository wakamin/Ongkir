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
            ob_start();

            $style = 'wide';
            include SDONGKIR_PLUGIN_PATH . 'views/frontend/ongkir.php';

            $output = ob_get_contents();
            ob_end_clean();

            return $output;
        }
    }

    $SDONGKIR_Shortcode = new SDONGKIR_Shortcode();
}
