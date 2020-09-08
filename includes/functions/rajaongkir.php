<?php

if (!function_exists('sdongkir_api_key')) {
    /**
     * Get rajaongkir api key
     *
     * @return String
     */
    function sdongkir_api_key()
    {
        return get_option('sdokr_rajaongkir_api_key');
    }

    if (!function_exists('sdongkir_account_type')) {
        /**
         * Get rajaongkir account type
         *
         * @return String
         */
        function sdongkir_account_type()
        {
            return get_option('sdokr_rajaongkir_account_type', 'starter');
        }
    }
}
