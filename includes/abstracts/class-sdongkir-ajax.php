<?php

if (!defined('ABSPATH')) {
    exit;
}

/**
 * Admin ajax actions class
 */
if (!class_exists('SDONGKIR_Ajax')) {
    abstract class SDONGKIR_Ajax
    {
        /**
         * Ajax success
         *
         * @param String $message
         * @param Array $data
         * @return Json
         */
        public function ajax_success(String $message, array $data = [])
        {
            return wp_send_json_success([
                'message' => $message,
                'data' => $data
            ]);
        }

        /**
         * Ajax error
         *
         * @param String $message
         * @param Int $statusCode
         * @return Json
         */
        public function ajax_error(String $message, Int $statusCode = 400)
        {
            return wp_send_json_error([
                'message' => $message
            ], $statusCode);
        }
    }
}
