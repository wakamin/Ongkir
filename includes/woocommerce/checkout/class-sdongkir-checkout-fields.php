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
            add_filter('woocommerce_checkout_get_value', array($this, 'update_subdistrict_checkout_fields_values'), 10, 2);
            
            add_action('woocommerce_checkout_update_order_meta', array($this, 'update_order_meta'));
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

        /**
         * Update the subdistrict checkout field value
         *
         * @param Int $value
         * @param String $input
         * @return Int
         */
        public function update_subdistrict_checkout_fields_values($value, $input)
        {
            $field_key = 'subdistrict';
        
            // Get data from custom session variable
            $values = (array) WC()->session->get($field_key);
        
            if (! empty($values)) {
                if ('billing_'.$field_key === $input) {
                    $value = $values['billing'];
                }
                if ('shipping_'.$field_key === $input) {
                    $value = $values['shipping'];
                }
            }

            return $value;
        }

        /**
         * Update order meta
         *
         * @param Int $order_id
         * @return void
         */
        public function update_order_meta($order_id)
        {
            if (!empty($_POST['subdistrict'])) {
                update_post_meta($order_id, 'subdistrict', sanitize_text_field($_POST['subdistrict']));
            }
            // Remove subdistrict session
            WC()->session->__unset('subdistrict');
        }
    }

    $SDONGKIR_Checkout_Fields = new SDONGKIR_Checkout_Fields();
}
