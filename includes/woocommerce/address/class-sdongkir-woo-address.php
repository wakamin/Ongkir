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
            add_action('woocommerce_checkout_fields', array($this, 'indonesia_address_field'));
            add_action('woocommerce_admin_order_data_after_shipping_address', 'display_subdistrict');
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
                $indonesianStates['prov-'.$province->province_id] = $province->name;
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
         * Display subdistrict in admin order data
         *
         * @param Object $order
         * @return Html
         */
        public function display_subdistrict($order)
        {
            ?>
            <p><strong><?php esc_html_e('Subdistrict', 'sd_ongkir') ?>:</strong><?php echo esc_attr(get_post_meta($order->get_id(), '_subdistrict', true)); ?></p>
            <?php
        }
    }

    $SDONGKIR_Woo_Address = new SDONGKIR_Woo_Address();
}
