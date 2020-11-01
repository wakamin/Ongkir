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

            // if (!isset($_POST['origin']) || $_POST['origin'] == '') {
            //     return $this->ajax_error(__('Please select shipping origin!', 'sd_ongkir'));
            // }

            // if (!isset($_POST['dest']) || $_POST['dest'] == '') {
            //     return $this->ajax_error(__('Please select shipping destination!', 'sd_ongkir'));
            // }

            // if (!isset($_POST['weight']) || $_POST['weight'] == '') {
            //     return $this->ajax_error(__('Please input weight!', 'sd_ongkir'));
            // }

            // if (!isset($_POST['couriers']) || $_POST['couriers'] == '') {
            //     return $this->ajax_error(__('Please select couriers!', 'sd_ongkir'));
            // }

            ob_start();
            require_once SDONGKIR_PLUGIN_PATH . 'views/frontend/shipping-cost-result.php';
            $html = ob_get_contents();
            ob_end_clean();
            return $this->ajax_success(__('Shipping cost', 'sd_ongkir'), array('html' => $html));
        }
    }
    
    $SDONGKIR_Frontend_Ajax = new SDONGKIR_Frontend_Ajax();
}
