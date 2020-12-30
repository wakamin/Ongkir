<?php

if (!function_exists('sdongkir_shipping_origin')) {
    /**
     * Get shipping origin
     *
     * @return Array
     */
    function sdongkir_shipping_origin()
    {
        $type = 'city';
        $originId = get_option('woocommerce_store_city');
        if (sdongkir_account_type() == 'pro') {
            $type = 'subdistrict';
            $originId = get_option('sdongkir_shipping_origin_subdistrict_id');
        }

        return [
            'type' => $type,
            'origin_id' => $originId
        ];
    }
}

if (!function_exists('sdongkir_store_city_name')) {
    /**
     * Get store city name
     *
     * @return String
     */
    function sdongkir_store_city_name()
    {
        $countryConfig = get_option('woocommerce_default_country');
        $cityConfig = get_option('woocommerce_store_city');
        
        if ($countryConfig != 'ID') {
            return $cityConfig;
        }
        
        $city = sdongkir_city_by_id($cityConfig);
        return $city->name;
    }
}

if (!function_exists('sdongkir_store_subdistrict_name')) {
    /**
     * Get store subdistrict name
     *
     * @return String
     */
    function sdongkir_store_subdistrict_name()
    {
        $countryConfig = get_option('woocommerce_default_country');
        $subdistrictConfig = get_option('sdongkir_shipping_origin_subdistrict_id');
        
        if ($countryConfig != 'ID' || sdongkir_account_type() != 'pro') {
            return '';
        }
        
        $subdistrict = sdongkir_subdistrict_by_id($subdistrictConfig);
        return $subdistrict->name;
    }
}
