<?php

if (!defined('ABSPATH')) {
    exit;
}

/**
 * Database interaction class
 */
if (!class_exists('SDONGKIR_Remote')) {
    class SDONGKIR_Remote
    {
        /**
         * Get API remote call url
         *
         * @return String
         */
        private function _remote_url()
        {
            $accountType = sdongkir_account_type();
            switch ($accountType) {
                case 'starter':
                    $url = 'https://api.rajaongkir.com/starter';
                    break;
                case 'basic':
                    $url = 'https://api.rajaongkir.com/basic';
                    break;
                case 'pro':
                    $url = 'https://pro.rajaongkir.com/api';
                    break;
                default:
                    $url = 'https://api.rajaongkir.com/starter';
                    break;
            }

            return $url;
        }

        /**
         * Remote request to RajaOngkir
         *
         * @param String $urlPath
         * @param String $requestMethod
         * @param Array $data
         *
         * @return Array
         */
        public function remote_request($urlPath, $requestMethod, $data = array())
        {
            $remoteUrl = $this->_remote_url().$urlPath;
            $apiKey = sdongkir_api_key();
            $args = array(
                'headers'     => array(
                    'key' => $apiKey,
                    'Content-Type' => 'application/json',
                    'Accept' => 'application/json'
                ),
            );

            if ($requestMethod == 'POST') {
                $args['body'] = wp_json_encode($data);
                $response = wp_remote_post($remoteUrl, $args);
            } elseif ($requestMethod == 'GET') {
                $response = wp_remote_get($remoteUrl, $args);
            } else {
                return null;
            }

            if (is_wp_error($response)) {
                return new WP_Error('broke', printf(__('RajaOngkir remote call error #: %s', 'sd_ongkir'), $response->get_error_message()));
            } else {
                $rajaongkir = json_decode($response['body'], true);
                $rajaongkir = $rajaongkir['rajaongkir'];

                if ($rajaongkir['status']['code'] != 200) {
                    return new WP_Error('broke', $rajaongkir['status']['description']);
                }

                return $rajaongkir['results'];
            }
        }
    }
}
