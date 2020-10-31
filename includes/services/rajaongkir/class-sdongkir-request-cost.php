<?php

if (!defined('ABSPATH')) {
    exit;
}

/**
 * Request location class
 */
if (!class_exists('SDONGKIR_Request_Location')) {
    class SDONGKIR_Request_Location
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
         * @return Mixed Array or WP_Error
         */
        public function get_shipping_cost()
        {
        }
    }
}
