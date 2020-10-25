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

if (!function_exists('sdongkir_count_location_data')) {
    /**
     * Get stored location count
     *
     * @param string $type
     * @return Array
     */
    function sdongkir_count_location_data($type = 'all')
    {
        $rajaOngkirDb = new SDONGKIR_Db();
        if ($type == 'province') {
            return ['province' => $rajaOngkirDb->count_stored_provinces()];
        }

        if ($type == 'city') {
            return ['city' => $rajaOngkirDb->count_stored_cities()];
        }

        if ($type == 'subdistrict') {
            return ['subdistrict' => sdongkir_account_type() == 'pro' ? $rajaOngkirDb->count_stored_subdistricts() : 0];
        }

        if ($type == 'intl_origin') {
            return ['intl_origin' => sdongkir_account_type() != 'starter' ? $rajaOngkirDb->count_stored_intl_origins() : 0];
        }

        if ($type == 'intl_destination') {
            return ['intl_destination' => sdongkir_account_type() != 'starter' ? $rajaOngkirDb->count_stored_intl_destinations() : 0];
        }

        if ($type == 'all') {
            return [
                'province' => $rajaOngkirDb->count_stored_provinces(),
                'city' => $rajaOngkirDb->count_stored_cities(),
                'subdistrict' => sdongkir_account_type() == 'pro' ?  $rajaOngkirDb->count_stored_subdistricts() : 0,
                'intl_origin' => sdongkir_account_type() != 'starter' ? $rajaOngkirDb->count_stored_intl_origins() : 0,
                'intl_destination' => sdongkir_account_type() != 'starter' ? $rajaOngkirDb->count_stored_intl_destinations() : 0,
            ];
        }
    }
}

if (!function_exists('sdongkir_search_location')) {
    function sdongkir_search_location($keyword)
    {
        $rajaOngkirDb = new SDONGKIR_Db();
        return $rajaOngkirDb->search_location($keyword);
    }
}
