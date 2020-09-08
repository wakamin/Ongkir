<?php

if (!defined('ABSPATH')) {
    exit;
}

/**
 * Rajaongkir service class
 */
if (!class_exists('SDONGKIR_Rajaongkir')) {
    class SDONGKIR_Rajaongkir
    {
        /**
         * Get rajaongkir api key
         *
         * @return String
         */
        public static function api_key()
        {
            return get_option('sdokr_rajaongkir_api_key');
        }

        /**
         * Get rajaongkir account type
         *
         * @return String
         */
        public static function account_type()
        {
            return get_option('sdokr_rajaongkir_account_type', 'starter');
        }
    }
    
    $SDONGKIR_Rajaongkir = new SDONGKIR_Rajaongkir();
}
