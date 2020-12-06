<?php

if (!defined('ABSPATH')) {
    exit;
}

/**
 * Request tracking class
 */
if (!class_exists('SDONGKIR_Request_Tracking')) {
    class SDONGKIR_Request_Tracking
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
         * Get shipping tracking
         *
         * @param String $waybill
         * @param String $courier
         *
         * @return Array|WP_Error
         */
        public function track_shipment($waybill, $courier)
        {
            $data = [
                'waybill' => $waybill,
                'courier' => $courier,
            ];

            return $this->remote->remote_request('/waybill', 'POST', $data);
        }
    }
}
