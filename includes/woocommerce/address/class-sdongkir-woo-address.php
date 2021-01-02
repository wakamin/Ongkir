<?php

if (!defined('ABSPATH')) {
    exit;
}

/**
 * Address class
 */
if (!class_exists('SDONGKIR_Woo_Address')) {
    class SDONGKIR_Woo_Address
    {
        /**
         * Class constructor
         */
        public function __construct()
        {
            add_filter('woocommerce_states', array($this, 'indonesia_states'));
            add_filter('woocommerce_default_address_fields', array($this, 'subdistrict_field'));
            add_filter('woocommerce_formatted_address_replacements', array($this, 'formatted_address_replacements'), 10, 2);
            add_filter('woocommerce_localisation_address_formats', array($this, 'localisation_address_formats'));
            add_filter('woocommerce_get_order_address', array($this, 'get_order_address'), 10, 3);

            add_action('woocommerce_checkout_fields', array($this, 'indonesia_address_field'));
        }

        /**
         * Reorder checkout fields
         *
         * @param Array $address_fields
         * @return Array
         */
        public function indonesia_states($states)
        {
            $provinces = sdongkir_provinces();
            $indonesianStates = [];
            foreach ($provinces as $province) {
                $indonesianStates[$province->name] = $province->name;
            }

            $states['ID'] = $indonesianStates;

            return $states;
        }

        /**
         * Add subdistrict field
         *
         * @param Array $fields
         * @return Array
         */
        public function subdistrict_field($fields)
        {
            $fields['subdistrict'] = [
                'label' => __('Subdistrict', 'sd_ongkir'),
                'required' => true,
                'class' => ['form-row-wide'],
                'priority' => 75,
                'clear' => true,
                'type' => 'select',
                'options' => [
                    '' => __('Please Select', 'sd_ongkir'),
                ]
            ];

            return $fields;
        }

        /**
         * Formatted address replacements
         *
         * @param Array $array
         * @param Array $args
         * @return Array
         */
        public function formatted_address_replacements($array, $args)
        {
            // sd_log($args);
            if ($array['{country}'] == 'Indonesia') {
                if (isset($args['subdistrict'])) {
                    $array['{subdistrict}'] = $args['subdistrict'];
                }
            }

            return $array;
        }

        /**
         * Localization address formats
         *
         * @param Array $array
         * @return Array
         */
        public function localisation_address_formats($array)
        {
            $array['ID'] = "{name}\n{company}\n{address_1}\n{address_2}\n{subdistrict}\n{city}\n{state}\n{postcode}\n{country}";

            return $array;
        }

        /**
         * Setup Indonesia address fields
         *
         * @param Array $fields
         * @return Array
         */
        public function indonesia_address_field($fields)
        {
            // Billing address
            $billingCountry = WC()->customer->get_billing_country();
            if ($billingCountry == 'ID') {
                $city_args = wp_parse_args(array(
                    'type' => 'select',
                    'options' => array(
                        '' => __('Please Select', 'sd_ongkir'),
                    ),
                ), $fields['billing']['billing_city']);
            
                $fields['billing']['billing_city'] = $city_args;
                $fields['billing']['billing_subdistrict']['required'] = true;
            } else {
                $city_args = wp_parse_args(array(
                    'type' => 'text',
                ), $fields['billing']['billing_city']);
            
                $fields['billing']['billing_city'] = $city_args;
                $fields['billing']['billing_subdistrict']['required'] = false;
            }

            // Shipping address
            $shippingCountry = WC()->customer->get_shipping_country();
            if ($shippingCountry == 'ID') {
                $city_args = wp_parse_args(array(
                    'type' => 'select',
                    'options' => array(
                        '' => __('Please Select', 'sd_ongkir'),
                    ),
                ), $fields['shipping']['shipping_city']);
            
                $fields['shipping']['shipping_city'] = $city_args;
                $fields['shipping']['shipping_subdistrict']['required'] = true;
            } else {
                $city_args = wp_parse_args(array(
                    'type' => 'text',
                ), $fields['shipping']['shipping_city']);
            
                $fields['shipping']['shipping_city'] = $city_args;
                $fields['shipping']['shipping_subdistrict']['required'] = true;
            }

            return $fields;
        }

        /**
         * Get order address
         *
         * @param Array $array
         * @param String $type
         * @param Object $instance
         * @return Array
         */
        public function get_order_address($array, $type, $instance)
        {
            $order = $instance->get_data();
            if ($order[$type]['country'] == 'ID') {
                $array['subdistrict'] = get_post_meta($order['id'], '_'.$type.'_subdistrict', true);
            }
            return $array;
        }
    }

    $SDONGKIR_Woo_Address = new SDONGKIR_Woo_Address();
}
