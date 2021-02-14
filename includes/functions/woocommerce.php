<?php

// Exit if accessed directly
if (!defined('ABSPATH')) {
    exit();
}

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
            $subdistrictName = get_option('sdongkir_shipping_origin_subdistrict');
            $subdistrict = sdongkir_subdistrict_by_name($subdistrictName);
            if (!is_null($subdistrict)) {
                $originId = $subdistrict->id;
            } else {
                return new WP_Error(404, __('Subdistrict not found', 'sd_ongkir'));
            }
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
        $country = get_option('woocommerce_default_country');
        $subdistrict = get_option('sdongkir_shipping_origin_subdistrict');
        
        if ($country != 'ID' || sdongkir_account_type() != 'pro') {
            return '';
        }
        
        return $subdistrict;
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
     * Get total ordered product weight in gram
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

if (!function_exists('sdongkir_shipping_allowed_by_weight')) {
    /**
     * Check if shipping service allowed by weight
     *
     * @param String $courierCode
     * @param String $serviceCode
     * @param Int $weight
     * @return Boolean
     */
    function sdongkir_shipping_allowed_by_weight($courierCode, $serviceCode, $weight)
    {
        $couriers = [
            'ncs',
            'sap',
            'sicepat',
            'sicepat',
        ];

        if (!in_array($courierCode, $couriers)) {
            return true;
        }

        $formattedService = sdongkir_format_shipping_service_code($serviceCode);
        $identifier = $courierCode.'_'.$formattedService;

        $kg5 = ['ncs_sds', 'ncs_darat_murah', 'ncs_nfd_ons', 'ncs_nfd_sds'];
        $kg10 = ['sicepat_gokil'];
        $kg50 = ['ncs_darat', 'sap_cargo_darat'];

        if (in_array($identifier, $kg5) && $weight < 5000) {
            return false;
        }

        if (in_array($identifier, $kg10) && $weight < 10000) {
            return false;
        }

        if (in_array($identifier, $kg50) && $weight < 50000) {
            return false;
        }

        return true;
    }
}
