<?php

if (!defined('ABSPATH')) {
    exit;
}

/**
 * Frontend ajax actions class
 */
if (!class_exists('SDONGKIR_Frontend_Ajax')) {
    class SDONGKIR_Frontend_Ajax extends SDONGKIR_Ajax
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
            add_action('wp_ajax_ongkir_search_location', array($this, 'search_location'));
            add_action('wp_ajax_nopriv_ongkir_search_location', array($this, 'search_location'));

            add_action('wp_ajax_ongkir_shipping_cost', array($this, 'shipping_cost'));
            add_action('wp_ajax_nopriv_ongkir_shipping_cost', array($this, 'shipping_cost'));

            add_action('wp_ajax_ongkir_shipping_track', array($this, 'shipping_track'));
            add_action('wp_ajax_nopriv_ongkir_shipping_track', array($this, 'shipping_track'));

            add_action('wp_ajax_ongkir_get_cities_by_province_id', array($this, 'get_cities_by_province_id'));
            add_action('wp_ajax_nopriv_ongkir_get_cities_by_province_id', array($this, 'get_cities_by_province_id'));

            add_action('wp_ajax_ongkir_get_subdistricts_by_city_id', array($this, 'get_subdistricts_by_city_id'));
            add_action('wp_ajax_nopriv_ongkir_get_subdistricts_by_city_id', array($this, 'get_subdistricts_by_city_id'));

            add_action('wp_ajax_ongkir_set_session_subdistrict', array($this, 'set_session_subdistrict'));
            add_action('wp_ajax_nopriv_ongkir_set_session_subdistrict', array($this, 'set_session_subdistrict'));
        }

        /**
         * Search location ajax action
         *
         * @return Json response
         */
        public function search_location()
        {
            check_ajax_referer('sdongkir-script-nonce', 'nonce_ajax');

            if (!isset($_POST['q'])) {
                return;
            }

            $data = array();
            $locations = sdongkir_search_location($_POST['q']);
            foreach ($locations as $location) {
                if (stripos($location['name'], $_POST['q']) !==false) {
                    $data[] = [
                        'id' => $location['id'],
                        'text' => $location['name']
                    ];
                }
            }


            return $this->ajax_success(__('Success searching location', 'sd_ongkir'), $data);
        }

        /**
         * Get shipping cost ajax action
         *
         * @return Json response
         */
        public function shipping_cost()
        {
            check_ajax_referer('sdongkir-script-nonce', 'nonce_ajax');

            if (!isset($_POST['origin']) || $_POST['origin'] == '') {
                return $this->ajax_error(__('Please select shipping origin!', 'sd_ongkir'));
            }

            if (!isset($_POST['dest']) || $_POST['dest'] == '') {
                return $this->ajax_error(__('Please select shipping destination!', 'sd_ongkir'));
            }

            if (!isset($_POST['weight']) || $_POST['weight'] == '') {
                return $this->ajax_error(__('Please input weight!', 'sd_ongkir'));
            }

            if (!isset($_POST['couriers']) || $_POST['couriers'] == '') {
                return $this->ajax_error(__('Please select couriers!', 'sd_ongkir'));
            }

            ob_start();
            require_once SDONGKIR_PLUGIN_PATH . 'views/frontend/shipping-cost-result.php';
            $html = ob_get_contents();
            ob_end_clean();
            return $this->ajax_success(__('Shipping cost', 'sd_ongkir'), array('html' => $html));
        }

        /**
         * Track shipment
         *
         * @return Json response
         */
        public function shipping_track()
        {
            check_ajax_referer('sdongkir-script-nonce', 'nonce_ajax');

            if (!isset($_POST['tracking_number']) || $_POST['tracking_number'] == '') {
                return $this->ajax_error(__('Please input the tracking number!', 'sd_ongkir'));
            }

            if (!isset($_POST['courier']) || $_POST['courier'] == '') {
                return $this->ajax_error(__('Please select courier!', 'sd_ongkir'));
            }

            ob_start();
            require_once SDONGKIR_PLUGIN_PATH . 'views/frontend/shipping-track-result.php';
            $html = ob_get_contents();
            ob_end_clean();
            return $this->ajax_success(__('Shipping Tracking', 'sd_ongkir'), array('html' => $html));
        }

        /**
         * Get cities by province id
         *
         * @return Json Response
         */
        public function get_cities_by_province_id()
        {
            check_ajax_referer('sdongkir-script-nonce', 'nonce_ajax');

            if (!isset($_POST['province_id'])) {
                return $this->ajax_error(__('Province is required', 'sd_ongkir'));
            }

            return $this->ajax_success(__('Cities', 'sd_ongkir'), sdongkir_cities_by_province_id($_POST['province_id']));
        }

        /**
         * Get subdistricts by city ID
         *
         * @return Json Response
         */
        public function get_subdistricts_by_city_id()
        {
            check_ajax_referer('sdongkir-script-nonce', 'nonce_ajax');

            if (!isset($_POST['city_id'])) {
                return $this->ajax_error(__('City is required', 'sd_ongkir'));
            }

            return $this->ajax_success(__('Subdistricts', 'sd_ongkir'), sdongkir_subdistricts_by_city_id($_POST['city_id']));
        }

        /**
         * Set session subdistrict
         *
         * @return Json response
         */
        public function set_session_subdistrict()
        {
            check_ajax_referer('sdongkir-script-nonce', 'nonce_ajax');

            if (!isset($_POST['subdistrict_id'])) {
                return $this->ajax_error(__('Subdistrict is required', 'sd_ongkir'));
            }

            if (!isset($_POST['type'])) {
                return $this->ajax_error(__('Type is required', 'sd_ongkir'));
            }

            if ($_POST['type'] == 'billing') {
                $_SESSION['billing_subdistrict'] = $_POST['subdistrict_id'];
            } else {
                $_SESSION['shipping_subdistrict'] = $_POST['subdistrict_id'];
            }

            return $this->ajax_success(__('Operation success', 'sd_ongkir'), []);
        }
    }
    
    $SDONGKIR_Frontend_Ajax = new SDONGKIR_Frontend_Ajax();
}
