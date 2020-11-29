<?php

if (!function_exists('sdongkir_province_by_id')) {
    /**
     * Ge province by id
     *
     * @param Int $id
     * @return Object
     */
    function sdongkir_province_by_id($id)
    {
        $db = new SDONGKIR_Db();
        return $db->get_province_by_id($id);
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
        $db = new SDONGKIR_Db();
        return $db->get_city_by_id($id);
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
        $db = new SDONGKIR_Db();
        return $db->get_subdistrict_by_id($id);
    }
}
