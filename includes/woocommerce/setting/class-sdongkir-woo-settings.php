<?php

if (!defined('ABSPATH')) {
    exit;
}

/**
 * Woocommerce setting
 */
if (!class_exists('SDONGKIR_Woo_Settings')) {
    class SDONGKIR_Woo_Settings
    {
        /**
         * Class constructor
         */
        public function __construct()
        {
            add_filter('woocommerce_get_settings_general', array($this, 'general_setting'));
        }

        /**
         * Modify WooCommerce general setting page
         *
         * @param Array $settings
         * @return Array
         */
        public function general_setting($settings)
        {
            $storeCountry = get_option('woocommerce_default_country');
            $storeCity = get_option('woocommerce_store_city');
            if (strstr($storeCountry, ':')) {
                $storeCountry = explode(':', $storeCountry);
                $country      = current($storeCountry);
                $provinceName = end($storeCountry);
            } else {
                $country = $storeCountry;
                $provinceName   = '*';
            }

            $key = 0;
            foreach ($settings as $values) {
                // Modify city option as select dropdown
                if ($values['id'] == 'woocommerce_store_city' && $country == 'ID') {
                    $cityOptions = ['' => __('Please select', 'sd_ongkir')];
                    $province = sdongkir_province_by_name($provinceName);
                    if (!is_null($province)) {
                        $rawCities = sdongkir_cities_by_province_id($province->id);
                        foreach ($rawCities as $city) {
                            $cityOptions["$city->type $city->name"] = "$city->type $city->name";
                        }
                    }

                    $values['type'] = 'select';
                    $values['options'] = $cityOptions;
                }

                $new_settings[$key] = $values;
                $key++;

                // Get the address 2 key position
                if ($values['id'] == 'woocommerce_store_address_2') {
                    $address2KeyPosition = $key;
                }
        
                // Add subdistrict option
                if ($values['id'] == 'woocommerce_store_city' && sdongkir_account_type() == 'pro') {
                    $subdistrictOptions = ['' => __('Please select', 'sd_ongkir')];
                    $city = sdongkir_city_by_full_name($storeCity);
                    if (!is_null($city)) {
                        $rawSubdistricts = sdongkir_subdistricts_by_city_id($city->id);
                        foreach ($rawSubdistricts as $subdistrict) {
                            $subdistrictOptions[$subdistrict->name] = $subdistrict->name;
                        }
                    }

                    $new_settings[$key] = array(
                        'name'     => __('Subdistrict', 'sd_ongkir'),
                        'desc_tip' => __('Shipping origin subdistrict', 'sd_ongkir'),
                        'id'       => 'sdongkir_shipping_origin_subdistrict',
                        'type'     => 'select',
                        'options' => $subdistrictOptions
                    );
                    $key++;
                }

                // Get country key position
                if ($values['id'] == 'woocommerce_default_country') {
                    $countryKeyPosition = $key;
                    $countrySetting[] = $values;
                }
            }

            // Put the country setting after address line 2
            unset($new_settings[$countryKeyPosition - 1]);
            $finalSettings = array_merge(
                array_slice($new_settings, 0, $address2KeyPosition),
                $countrySetting,
                array_slice($new_settings, $address2KeyPosition)
            );

            return $finalSettings;
        }
    }

    $SDONGKIR_Woo_Settings = new SDONGKIR_Woo_Settings();
}
