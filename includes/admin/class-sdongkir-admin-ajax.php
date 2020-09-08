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
        }

        /**
         * Get province ajax action
         *
         * @return Json response
         */
        public function get_province()
        {
            check_ajax_referer('ongkir-script-nonce', 'nonce_ajax');

            return $this->ajax_success('Success ajax province');
        }

        /**
         * Get city ajax action
         *
         * @return Json response
         */
        public function get_city()
        {
            check_ajax_referer('ongkir-script-nonce', 'nonce_ajax');

            return $this->ajax_success('Success ajax city');
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

            $lastCityId = $_POST['last_city_id'];
            $cityId = $lastCityId + 1;
            $totalCity = 5;

            $done = false;
            if ($cityId == $totalCity) {
                $done = true;
            }

            return $this->ajax_success('Success ajax subdistrict', [
                'done' => $done,
                'city_id' => $cityId
            ]);
        }
    }
    
    $SDONGKIR_Admin_Ajax = new SDONGKIR_Admin_Ajax();
}
