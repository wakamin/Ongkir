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
         * @return Mixed Array or WP_Error
         */
        public function get_shipping_cost($data)
        {
            return $this->remote->remote_request('/cost', 'POST', $data);
        }
    }
}
