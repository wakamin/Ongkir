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
         * Class constructor
         */
        public function __construct()
        {
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
            check_ajax_referer('ongkir-script-nonce', 'nonce_ajax');

            $remote = new SDONGKIR_Remote();
            try {
                $provinces = $remote->remote_request('/province', 'GET');
            } catch (\Throwable $th) {
                $this->ajax_error($th->getMessage());
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
            $subdistrictName = $db->tables()['subdistrict'];
            
            global $wpdb;

            // Remove all records
            $wpdb->query("TRUNCATE TABLE $tableName");
            $wpdb->query("TRUNCATE TABLE $cityTableName");
            $wpdb->query("TRUNCATE TABLE $subdistrictName");
                
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
            check_ajax_referer('ongkir-script-nonce', 'nonce_ajax');

            $remote = new SDONGKIR_Remote();
            try {
                $cities = $remote->remote_request('/city', 'GET');
            } catch (\Throwable $th) {
                $this->ajax_error($th->getMessage());
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
            check_ajax_referer('ongkir-script-nonce', 'nonce_ajax');

            if (!isset($_POST['last_city_id'])) {
                return $this->ajax_error(__('Bad params', 'sd_ongkir'));
            }

            global $wpdb;

            $remote = new SDONGKIR_Remote();
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

                try {
                    $subdistricts = $remote->remote_request("/subdistrict?city=$cityId", 'GET');
                } catch (\Throwable $th) {
                    $this->ajax_error($th->getMessage());
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
            check_ajax_referer('ongkir-script-nonce', 'nonce_ajax');

            $remote = new SDONGKIR_Remote();
            try {
                $cities = $remote->remote_request('/v2/internationalOrigin', 'GET');
            } catch (\Throwable $th) {
                $this->ajax_error($th->getMessage());
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
            check_ajax_referer('ongkir-script-nonce', 'nonce_ajax');

            $remote = new SDONGKIR_Remote();
            try {
                $countries = $remote->remote_request('/v2/internationalDestination', 'GET');
            } catch (\Throwable $th) {
                $this->ajax_error($th->getMessage());
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
