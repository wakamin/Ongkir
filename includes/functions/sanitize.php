<?php

// Exit if accessed directly
if (!defined('ABSPATH')) {
    exit();
}

if (!function_exists('sdongkir_sanitize_couriers')) {
    function sdongkir_sanitize_couriers($values)
    {
        $newValues = array();
        foreach ($values as $value) {
            if (array_key_exists($value, sdongkir_available_couriers())) {
                $newValues[] = $value;
            }
        }

        return $newValues;
    }
}
