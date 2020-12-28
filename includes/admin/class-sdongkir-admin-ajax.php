<?php

if (!defined('ABSPATH')) {
    exit;
}

/**
 * Admin ajax actions class
 */
if (!class_exists('SDONGKIR_Admin_Ajax')) {
    class SDONGKIR_Admin_Ajax extends SDONGKIR_Ajax
    {
        /**
         * RajaOngkir Account Type
         *
         * @var String
         */
        public $accountType;

        /**
         * Class constructor
         */
        public function __construct()
        {
            $this->accountType = sdongkir_account_type();
            add_action('wp_ajax_ongkir_get_province', array($this, 'get_province'));
            add_action('wp_ajax_ongkir_get_city', array($this, 'get_city'));
            add_action('wp_ajax_ongkir_get_subdistrict', array($this, 'get_subdistrict'));
            add_action('wp_ajax_ongkir_get_intl_origin', array($this, 'get_intl_origin'));
            add_action('wp_ajax_ongkir_get_intl_destination', array($this, 'get_intl_destination'));
        }

        /**
         * Get province ajax action and store into database
         *
         * @return Json response
         */
        public function get_province()
        {
            check_ajax_referer('sdongkir-script-nonce', 'nonce_ajax');

            $request = new SDONGKIR_Request_Location();
            $provinces = $request->get_provinces();

            if (is_wp_error($provinces)) {
                $this->ajax_error($provinces->get_error_message());
            }
            
            $rows = [];
            foreach ($provinces as $province) {
                $rows[] = [
                    'province_id' => $province['province_id'],
                    'name' => $province['province'],
                ];
            }

            $db = new SDONGKIR_Db();
            $tableName = $db->tables()['province'];
            $cityTableName = $db->tables()['city'];
            $subdistrictTableName = $db->tables()['subdistrict'];
            $intlOriginTableName = $db->tables()['intl_origin'];
            $intlDestinationTableName = $db->tables()['intl_destination'];
            
            global $wpdb;

            // Remove all records
            $wpdb->query("TRUNCATE TABLE $tableName");
            $wpdb->query("TRUNCATE TABLE $cityTableName");
            $wpdb->query("TRUNCATE TABLE $subdistrictTableName");
            $wpdb->query("TRUNCATE TABLE $intlOriginTableName");
            $wpdb->query("TRUNCATE TABLE $intlDestinationTableName");
                
            try {
                $db->insert_many($tableName, $rows);
            } catch (\Throwable $th) {
                $this->ajax_error($th->getMessage());
            }

            return $this->ajax_success(__('Success storing provinces into database', 'sd_ongkir'));
        }

        /**
         * Get city ajax action
         *
         * @return Json response
         */
        public function get_city()
        {
            check_ajax_referer('sdongkir-script-nonce', 'nonce_ajax');

            $request = new SDONGKIR_Request_Location();
            $cities = $request->get_cities();

            if (is_wp_error($cities)) {
                $this->ajax_error($cities->get_error_message());
            }

            $rows = [];
            foreach ($cities as $city) {
                $rows[] = [
                    'city_id' => $city['city_id'],
                    'type' => $city['type'],
                    'name' => $city['city_name'],
                    'province_id' => $city['province_id'],
                    'province_name' => $city['province'],
                    'postal_code' => $city['postal_code'],
                ];
            }

            $db = new SDONGKIR_Db();
            $tableName = $db->tables()['city'];
            try {
                $db->insert_many($tableName, $rows);
            } catch (\Throwable $th) {
                $this->ajax_error($th->getMessage());
            }

            return $this->ajax_success(__('Success storing cities into database', 'sd_ongkir'));
        }

        /**
         * Get subdistrict ajax action
         *
         * @return Json response
         */
        public function get_subdistrict()
        {
            check_ajax_referer('sdongkir-script-nonce', 'nonce_ajax');

            if (!isset($_POST['last_city_id'])) {
                return $this->ajax_error(__('Bad params', 'sd_ongkir'));
            }

            if ($this->accountType != 'pro') {
                return $this->ajax_success(__('Must use Pro account.', 'gending_kedis'), [
                    'done' => true,
                    'city_id' => 0,
                ]);
            }

            global $wpdb;

            $db = new SDONGKIR_Db();

            $lastCityId = $_POST['last_city_id'];

            $cityTableName = $db->tables()['city'];
            // Get the city id for next request
            $city = $wpdb->get_row("SELECT * FROM $cityTableName WHERE city_id > $lastCityId");

            $done = false;
            if (is_null($city)) {
                $done = true;
                $cityId = 0;
            } else {
                $cityId = $city->city_id;

                $request = new SDONGKIR_Request_Location();
                $subdistricts = $request->get_subdistricts($cityId);

                if (is_wp_error($subdistricts)) {
                    $this->ajax_error($subdistricts->get_error_message());
                }

                $rows = [];
                foreach ($subdistricts as $subdistricts) {
                    $rows[] = [
                    'subdistrict_id' => $subdistricts['subdistrict_id'],
                    'name' => $subdistricts['subdistrict_name'],
                    'city_id' => $subdistricts['city_id'],
                    'city_type' => $subdistricts['type'],
                    'city_name' => $subdistricts['city'],
                    'province_id' => $subdistricts['province_id'],
                    'province_name' => $subdistricts['province'],
                ];
                }

                $tableName = $db->tables()['subdistrict'];
                try {
                    $db->insert_many($tableName, $rows);
                } catch (\Throwable $th) {
                    $this->ajax_error($th->getMessage());
                }
            }

            if ($done) {
                $message = __('Success storing all subdistrics into database', 'sd_ongkir');
            } else {
                $message = sprintf(__('Success storing subdistrics of %s into database', 'sd_ongkir'), $city->type.' '.$city->name);
            }

            return $this->ajax_success($message, [
                'done' => $done,
                'city_id' => $cityId,
            ]);
        }

        /**
         * Get international origin ajax action
         *
         * @return Json response
         */
        public function get_intl_origin()
        {
            check_ajax_referer('sdongkir-script-nonce', 'nonce_ajax');

            if ($this->accountType == 'starter') {
                return $this->ajax_success(__('Must use Basic or Pro account.', 'gending_kedis'));
            }

            $request = new SDONGKIR_Request_Location();
            $cities = $request->get_international_origin();

            if (is_wp_error($cities)) {
                $this->ajax_error($cities->get_error_message());
            }

            $rows = [];
            foreach ($cities as $city) {
                $rows[] = [
                    'city_id' => $city['city_id'],
                    'type' => $city['type'],
                    'name' => $city['city_name'],
                    'province_id' => $city['province_id'],
                    'province_name' => $city['province'],
                    'postal_code' => $city['postal_code'],
                ];
            }

            $db = new SDONGKIR_Db();
            $tableName = $db->tables()['intl_origin'];
            try {
                $db->insert_many($tableName, $rows);
            } catch (\Throwable $th) {
                $this->ajax_error($th->getMessage());
            }

            return $this->ajax_success(__('Success storing international origin into database', 'sd_ongkir'));
        }

        /**
         * Get international destination ajax action
         *
         * @return Json response
         */
        public function get_intl_destination()
        {
            check_ajax_referer('sdongkir-script-nonce', 'nonce_ajax');

            if ($this->accountType == 'starter') {
                return $this->ajax_success(__('Must use Basic or Pro account.', 'gending_kedis'));
            }

            $request = new SDONGKIR_Request_Location();
            $countries = $request->get_international_destination();

            if (is_wp_error($countries)) {
                $this->ajax_error($countries->get_error_message());
            }
            
            $rows = [];
            foreach ($countries as $country) {
                $rows[] = [
                    'country_id' => $country['country_id'],
                    'name' => $country['country_name'],
                ];
            }

            $db = new SDONGKIR_Db();
            $tableName = $db->tables()['intl_destination'];
            try {
                $db->insert_many($tableName, $rows);
            } catch (\Throwable $th) {
                $this->ajax_error($th->getMessage());
            }

            return $this->ajax_success(__('Success storing international destination into database', 'sd_ongkir'));
        }
    }
    
    $SDONGKIR_Admin_Ajax = new SDONGKIR_Admin_Ajax();
}
