<?php

// Exit if accessed directly
if (!defined('ABSPATH')) {
    exit();
}

if (!function_exists('sdokr_sanitize_couriers')) {
    function sdokr_sanitize_couriers($values)
    {
        $newValues = array();
        foreach ($values as $value) {
            if (array_key_exists($value, sdokr_available_couriers())) {
                $newValues[] = $value;
            }
        }

        return $newValues;
    }
}
