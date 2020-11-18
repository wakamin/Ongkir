<?php

if (!defined('ABSPATH')) {
    exit;
}

/**
 * Request cost class
 */
if (!class_exists('SDONGKIR_Request_Cost')) {
    class SDONGKIR_Request_Cost
    {
        public $remote;

        /**
         * Class constructor
         */
        public function __construct()
        {
            $this->remote = new SDONGKIR_Remote();
        }

        /**
         * Get shipping cost
         *
         * @param Int $origin
         * @param Int $destination
         * @param Int $weight
         * @param Array $couriers
         *
         * @return Array|WP_Error
         */
        public function get_shipping_cost($origin, $destination, $weight, $couriers)
        {
            $data = [
                'origin' => $origin,
                'destination' => $destination,
                'weight' => $weight,
                'courier' => implode(':', $couriers)
            ];

            if (sdongkir_account_type() == 'pro') {
                $data['originType'] = 'subdistrict';
                $data['destinationType'] = 'subdistrict';
            }

            return $this->remote->remote_request('/cost', 'POST', $data);
        }
    }
}
