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
         *
         * @return Array
         */
        public function remote_request(String $urlPath, String $requestMethod)
        {
            $curl = curl_init();
            $remoteUrl = $this->_remote_url();
            $apiKey = sdongkir_api_key();

            curl_setopt_array($curl, array(
                CURLOPT_URL => $remoteUrl.$urlPath,
                CURLOPT_RETURNTRANSFER => true,
                CURLOPT_ENCODING => "",
                CURLOPT_MAXREDIRS => 10,
                CURLOPT_TIMEOUT => 0,
                CURLOPT_FOLLOWLOCATION => true,
                CURLOPT_HTTP_VERSION => CURL_HTTP_VERSION_1_1,
                CURLOPT_CUSTOMREQUEST => $requestMethod,
                CURLOPT_HTTPHEADER => array(
                    "key: $apiKey",
                    "Content-Type: application/json",
                    "Accept: application/json"
                ),
            ));

            $response = curl_exec($curl);
            $err = curl_error($curl);

            curl_close($curl);

            if ($err) {
                throw new \Exception("RajaOngkir remote call error #: $err");
            } else {
                $response = json_decode($response, true);
                $rajaongkir = $response['rajaongkir'];
                if ($rajaongkir['status']['code'] != 200) {
                    throw new \Exception($rajaongkir['status']['description'], $rajaongkir['status']['code']);
                }
                return $rajaongkir['results'];
            }
        }
    }
}
