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
         * Get all provinces
         *
         * @return Mixed Array or WP_Error
         */
        public function get_provinces()
        {
            return $this->remote->remote_request('/province', 'GET');
        }

        /**
         * Get all cities
         *
         * @return Mixed Array or WP_Error
         */
        public function get_cities()
        {
            return $this->remote->remote_request('/city', 'GET');
        }

        /**
         * Get subdistricts by city id
         *
         * @param Int $cityId
         * @return Mixed Array or WP_Error
         */
        public function get_subdistricts($cityId)
        {
            return $this->remote->remote_request("/subdistrict?city=$cityId", 'GET');
        }

        /**
         * Get international origin
         *
         * @return Mixed Array or WP_Error
         */
        public function get_international_origin()
        {
            return $this->remote->remote_request('/v2/internationalOrigin', 'GET');
        }

        /**
         * Get international destination
         *
         * @return Mixed Array or WP_Error
         */
        public function get_international_destination()
        {
            return $this->remote->remote_request('/v2/internationalDestination', 'GET');
        }
    }
}
