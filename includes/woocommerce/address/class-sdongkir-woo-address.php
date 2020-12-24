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
                $indonesianStates[$province->province_id] = $province->name;
            }

            $states['ID'] = $indonesianStates;

            return $states;
        }
    }

    $SDONGKIR_Woo_Address = new SDONGKIR_Woo_Address();
}
