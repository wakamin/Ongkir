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

if (!function_exists('sdongkir_shipping_destination')) {
    /**
     * Get shipping destination id
     *
     * @param Array $destination
     * @return Int or null on failure;
     */
    function sdongkir_shipping_destination_id($destination)
    {
        $accountType = sdongkir_account_type();
        $shippingDest = null;
        if ($accountType == 'pro') {
            $subdistrict = sdongkir_subdistrict_by_name($destination['subdistrict']);
            $shippingDest = empty($subdistrict) ? null : $subdistrict->id;
        } else {
            $city = sdongkir_city_by_full_name($destination['city']);
            $shippingDest = empty($city) ? null : $city->id;
        }

        return $shippingDest;
    }
}

if (!function_exists('sdongkir_total_weight')) {
    /**
     * Get total ordered product weight
     *
     * @param Array $package
     * @return Int
     */
    function sdongkir_total_weight($package)
    {
        $weight = 0;
        foreach ($package['contents'] as $item_id => $values) {
            $_product = $values['data'];
            $productWeight = $_product->get_weight() == '' ? 0 : $_product->get_weight();
            $weight = ($weight + $productWeight) * $values['quantity'];
        }
        $weight = $weight == 0 ? 1 : wc_get_weight($weight, 'g');

        return $weight;
    }
}
