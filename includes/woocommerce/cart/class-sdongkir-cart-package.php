<?php

if (!defined('ABSPATH')) {
    exit;
}

/**
 * Cart class
 */
if (!class_exists('SDONGKIR_Cart_Package')) {
    class SDONGKIR_Cart_Package
    {
        /**
         * Class constructor
         */
        public function __construct()
        {
            add_filter('woocommerce_cart_shipping_packages', array($this, 'add_subdistrict_to_destination_shipping_package'));
        }

        /**
         * Add subdistrict into cart packages array
         *
         * @param Array $packages
         * @return Array
         */
        public function add_subdistrict_to_destination_shipping_package($packages)
        {
            $customer   = WC()->customer; // The WC_Customer Object
        
            // Get 'subdistrict' data from customer meta data
            $main_key   = 'subdistrict';
            $meta_value = $customer->get_meta('shipping_'.$main_key);
            $meta_value = empty($meta_value) ? $customer->get_meta('billing_'.$main_key) : $meta_value;

            // Get data from custom session variable
            $values = (array) WC()->session->get($main_key);
        
            if (! empty($values)) {
                $session_value = $values['shipping'];
        
                if ($session_value === $meta_value) {
                    $session_value = $values['billing'];
        
                    if ($session_value !== $meta_value) {
                        $meta_value = $values['billing'];
                    }
                } else {
                    $meta_value = $session_value;
                }
            }
        
            // Loop through shipping packages
            foreach ($packages as $key => $package) {
                // Set to destination package the "subdistrict"
                $packages[$key]['destination'][$main_key] = $meta_value;
            }

            return $packages;
        }
    }

    $SDONGKIR_Cart_Package = new SDONGKIR_Cart_Package();
}
