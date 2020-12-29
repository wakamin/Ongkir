<?php

if (!defined('ABSPATH')) {
    exit;
}

/**
 * Woocommerce ongkir shipping setting
 */
if (!class_exists('SDONGKIR_Shipping_Settings')) {
    class SDONGKIR_Shipping_Settings
    {
        /**
         * Class constructor
         */
        public function __construct()
        {
            add_filter('woocommerce_get_sections_shipping', array($this, 'shipping_origin_setting_section'));
            add_filter('woocommerce_get_settings_shipping', array($this, 'shipping_origin_setting'), 10, 2);

            add_filter('woocommerce_get_settings_general', array($this, 'general_setting'));
        }

        public function general_setting($settings)
        {
            $storeCountry = get_option('woocommerce_default_country');
            $storeCity = get_option('woocommerce_store_city');
            if (strstr($storeCountry, ':')) {
                $storeCountry = explode(':', $storeCountry);
                $country      = current($storeCountry);
                $provinceId = str_replace('prov-', '', end($storeCountry));
            } else {
                $country = $storeCountry;
                $provinceId   = '*';
            }

            $key = 0;
            foreach ($settings as $values) {
                // Modify city option as select dropdown
                if ($values['id'] == 'woocommerce_store_city' && $country == 'ID') {
                    $cityOptions = ['' => __('Please select', 'sd_ongkir')];
                    $rawCities = sdongkir_cities_by_province_id($provinceId);
                    foreach ($rawCities as $city) {
                        $cityOptions[$city->city_id] = "$city->type $city->name";
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
                if ($values['id'] == 'woocommerce_store_city') {
                    $subdistrictOptions = ['' => __('Please select', 'sd_ongkir')];
                    $rawSubdistricts = sdongkir_subdistricts_by_city_id($storeCity);
                    foreach ($rawSubdistricts as $subdistrict) {
                        $subdistrictOptions[$subdistrict->subdistrict_id] = $subdistrict->name;
                    }

                    $new_settings[$key] = array(
                        'name'     => __('Subdistrict', 'sd_ongkir'),
                        'desc_tip' => __('Shipping origin subdistrict', 'sd_ongkir'),
                        'id'       => 'sdongkir_shipping_origin_subdistrict_id',
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

        /**
         * Add shipping origin setting
         *
         * @param Array $sections
         * @return Array
         */
        public function shipping_origin_setting_section($sections)
        {
            $sections['sdongkir_shipping_origin'] = __('Shipping Origin', 'sd_ongkir');
            return $sections;
        }

        /**
         * Shipping origin setting page
         *
         * @param Array $settings
         * @param String $current_section
         * @return Array
         */
        public function shipping_origin_setting($settings, $current_section)
        {
            if ($current_section == 'sdongkir_shipping_origin') {
                $settingOrigin = array();
                // Add Title to the Settings
                $settingOrigin[] = array(
                    'name' => __('Ongkir Shipping Origin Setting', 'sd_ongkir'),
                    'type' => 'title',
                    'desc' => __('The following options are used to configure shipping origin', 'sd_ongkir'),
                    'id' => 'sdongkir_shipping_origin'
                );

                $provincesData = sdongkir_provinces();
                $provinces = ['' => __('Please select', 'sd_ongkir')];
                foreach ($provincesData as $prov) {
                    $provinces[$prov->province_id] = $prov->name;
                }

                $settingOrigin[] = array(
                    'name'     => __('Province', 'sd_ongkir'),
                    'desc_tip' => __('Shipping origin province', 'sd_ongkir'),
                    'id'       => 'sdongkir_shipping_origin_province_id',
                    'type'     => 'select',
                    'options' => $provinces
                );

                $settingOrigin[] = array(
                    'name'     => __('City', 'sd_ongkir'),
                    'desc_tip' => __('Shipping origin city', 'sd_ongkir'),
                    'id'       => 'sdongkir_shipping_origin_city_id',
                    'type'     => 'select',
                    'options' => ['' => __('Please select', 'sd_ongkir')]
                );

                if (sdongkir_account_type() == 'pro') {
                    $settingOrigin[] = array(
                        'name'     => __('Subdistrict', 'sd_ongkir'),
                        'desc_tip' => __('Shipping origin subdistrict', 'sd_ongkir'),
                        'id'       => 'sdongkir_shipping_origin_subdistrict_id',
                        'type'     => 'select',
                        'options' => ['' => __('Please select', 'sd_ongkir')]
                    );
                }
                
                $settingOrigin[] = array( 'type' => 'sectionend', 'id' => 'sdongkir_shipping_origin' );

                return $settingOrigin;
            } else {
                return $settings;
            }
        }
    }

    $SDONGKIR_Shipping_Settings = new SDONGKIR_Shipping_Settings();
}
