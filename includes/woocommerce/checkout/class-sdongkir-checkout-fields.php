<?php

if (!defined('ABSPATH')) {
    exit;
}

/**
 * Checkout fields class
 */
if (!class_exists('SDONGKIR_Checkout_Fields')) {
    class SDONGKIR_Checkout_Fields
    {
        /**
         * Class constructor
         */
        public function __construct()
        {
            add_filter('woocommerce_default_address_fields', array($this, 'reorder_checkout_fields'));
        }

        /**
         * Reorder checkout fields
         *
         * @param Array $address_fields
         * @return Array
         */
        public function reorder_checkout_fields($address_fields)
        {
            $address_fields['state']['priority'] = 65;
            return $address_fields;
        }
    }

    $SDONGKIR_Checkout_Fields = new SDONGKIR_Checkout_Fields();
}
