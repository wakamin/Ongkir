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
            add_action('wp_ajax_ongkir_get_location', array($this, 'get_location'));
            add_action('wp_ajax_nopriv_ongkir_get_location', array($this, 'get_location'));
        }

        /**
         * Get location ajax action
         *
         * @return Json response
         */
        public function get_location()
        {
            check_ajax_referer('sdongkir-script-nonce', 'nonce_ajax');

            if (!isset($_POST['q'])) {
                return;
            }

            $data = array();
            foreach (sdongkir_get_locations() as $location) {
                if (stripos($location['name'], $_POST['q']) !==false) {
                    $data[] = [
                        'id' => $location['id'],
                        'text' => $location['name']
                    ];
                }
            }


            return $this->ajax_success(__('Success searching location', 'sd_ongkir'), $data);
        }
    }
    
    $SDONGKIR_Frontend_Ajax = new SDONGKIR_Frontend_Ajax();
}
