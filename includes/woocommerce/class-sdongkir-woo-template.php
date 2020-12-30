<?php

if (!defined('ABSPATH')) {
    exit;
}

/**
 * Woocommerce template location class
 */
if (!class_exists('SDONGKIR_Woo_Template')) {
    class SDONGKIR_Woo_Template
    {
        /**
         * Class constructor
         */
        public function __construct()
        {
            add_filter('woocommerce_locate_template', array($this, 'template_location'), 10, 3);
        }

        /**
         * WooCommerce template location
         *
         * @param String $template
         * @param String $template_name
         * @param String $template_path
         * @return String
         */
        public function template_location($template, $template_name, $template_path)
        {
            global $woocommerce;
            $_template = $template;
            if (! $template_path) {
                $template_path = $woocommerce->template_url;
            }
        
            $plugin_template_path  = SDONGKIR_PLUGIN_PATH . 'views/frontend/woocommerce/';
        
            // Look within passed path within the theme - this is priority
            $template = locate_template(
                array(
                    $template_path . $template_name,
                    $template_name
                )
            );

            if (! $template && file_exists($plugin_template_path . $template_name)) {
                $template = $plugin_template_path . $template_name;
            }
        
            if (! $template) {
                $template = $_template;
            }
       
            return $template;
        }
    }

    $SDONGKIR_Woo_Template = new SDONGKIR_Woo_Template();
}
