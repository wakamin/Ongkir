<?php
if (! defined('ABSPATH')) {
    exit; // Exit if accessed directly
}

if (!function_exists('sdongkir_provinces')) {
    /**
     * Get all provinces
     *
     * @return Array
     */
    function sdongkir_provinces()
    {
        return SDONGKIR_Db::get_provinces();
    }
}

if (!function_exists('sdongkir_province_by_id')) {
    /**
     * Ge province by id
     *
     * @param Int $id
     * @return Object
     */
    function sdongkir_province_by_id($id)
    {
        return SDONGKIR_Db::get_province_by_id($id);
    }
}

if (!function_exists('sdongkir_province_by_name')) {
    /**
     * Ge province by name
     *
     * @param String $provinceName
     * @return Object
     */
    function sdongkir_province_by_name($provinceName)
    {
        return SDONGKIR_Db::get_province_by_name($provinceName);
    }
}

if (!function_exists('sdongkir_all_cities')) {
    /**
     * Get all cities
     *
     * @return Array
     */
    function sdongkir_all_cities()
    {
        return SDONGKIR_Db::get_all_cities();
    }
}

if (!function_exists('sdongkir_cities_by_province_id')) {
    /**
     * Get cities by province id
     *
     * @param Int $provinceId
     * @return Array
     */
    function sdongkir_cities_by_province_id($provinceId)
    {
        return SDONGKIR_Db::get_cities_by_province_id($provinceId);
    }
}

if (!function_exists('sdongkir_city_by_id')) {
    /**
     * Ge city by id
     *
     * @param Int $id
     * @return Object
     */
    function sdongkir_city_by_id($id)
    {
        return SDONGKIR_Db::get_city_by_id($id);
    }
}

if (!function_exists('sdongkir_city_by_full_name')) {
    /**
     * Ge city by full city name including type
     *
     * @param String $fullName
     * @return Object
     */
    function sdongkir_city_by_full_name($fullName)
    {
        return SDONGKIR_Db::get_city_by_full_name($fullName);
    }
}

if (!function_exists('sdongkir_all_subdistricts')) {
    /**
     * Get all subdistricts
     *
     * @return Array
     */
    function sdongkir_all_subdistricts()
    {
        return SDONGKIR_Db::get_all_subdistricts();
    }
}

if (!function_exists('sdongkir_subdistricts_by_city_id')) {
    /**
     * Get subdistricts by city ID
     *
     * @param Int $cityId
     * @return Array
     */
    function sdongkir_subdistricts_by_city_id($cityId)
    {
        return SDONGKIR_Db::get_subdistricts_by_city_id($cityId);
    }
}

if (!function_exists('sdongkir_subdistrict_by_id')) {
    /**
     * Ge subdistrict by id
     *
     * @param Int $id
     * @return Object
     */
    function sdongkir_subdistrict_by_id($id)
    {
        return SDONGKIR_Db::get_subdistrict_by_id($id);
    }
}

if (!function_exists('sdongkir_subdistrict_by_name')) {
    /**
     * Ge subdistrict by name
     *
     * @param Int $name
     * @return Object
     */
    function sdongkir_subdistrict_by_name($name)
    {
        return SDONGKIR_Db::get_subdistrict_by_name($name);
    }
}
