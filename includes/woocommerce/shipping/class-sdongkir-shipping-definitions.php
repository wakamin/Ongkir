<?php

if (!defined('ABSPATH')) {
    exit;
}

/**
 * Ongkir shipping class
 */
if (!class_exists('SDONGKIR_Shipping_Definitions')) {
    class SDONGKIR_Shipping_Definitions
    {
        /**
         * Class constructor
         */
        public function __construct()
        {
            add_filter('woocommerce_shipping_methods', array($this, 'define_shippings'));
        }

        public function define_shippings($methods)
        {
            $methods['jne'] = 'SDONGKIR_Jne_Shipping_method';
            $methods['pos'] = 'SDONGKIR_Pos_Shipping_method';
            return $methods;
        }
    }
    
    $SDONGKIR_Shipping_Definitions = new SDONGKIR_Shipping_Definitions();
}
