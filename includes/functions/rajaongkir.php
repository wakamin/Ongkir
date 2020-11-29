<?php

// Exit if accessed directly
if (!defined('ABSPATH')) {
    exit();
}

if (!function_exists('sdongkir_count_location_data')) {
    /**
     * Get stored location count
     *
     * @param string $type
     * @return Array
     */
    function sdongkir_count_location_data($type = 'all')
    {
        $rajaOngkirDb = new SDONGKIR_Db();
        if ($type == 'province') {
            return ['province' => $rajaOngkirDb->count_stored_provinces()];
        }

        if ($type == 'city') {
            return ['city' => $rajaOngkirDb->count_stored_cities()];
        }

        if ($type == 'subdistrict') {
            return ['subdistrict' => sdongkir_account_type() == 'pro' ? $rajaOngkirDb->count_stored_subdistricts() : 0];
        }

        if ($type == 'intl_origin') {
            return ['intl_origin' => sdongkir_account_type() != 'starter' ? $rajaOngkirDb->count_stored_intl_origins() : 0];
        }

        if ($type == 'intl_destination') {
            return ['intl_destination' => sdongkir_account_type() != 'starter' ? $rajaOngkirDb->count_stored_intl_destinations() : 0];
        }

        if ($type == 'all') {
            return [
                'province' => $rajaOngkirDb->count_stored_provinces(),
                'city' => $rajaOngkirDb->count_stored_cities(),
                'subdistrict' => sdongkir_account_type() == 'pro' ?  $rajaOngkirDb->count_stored_subdistricts() : 0,
                'intl_origin' => sdongkir_account_type() != 'starter' ? $rajaOngkirDb->count_stored_intl_origins() : 0,
                'intl_destination' => sdongkir_account_type() != 'starter' ? $rajaOngkirDb->count_stored_intl_destinations() : 0,
            ];
        }
    }
}

if (!function_exists('sdongkir_search_location')) {
    /**
     * Search location
     *
     * @param String $keyword
     * @return Array
     */
    function sdongkir_search_location($keyword)
    {
        $rajaOngkirDb = new SDONGKIR_Db();
        return $rajaOngkirDb->search_location($keyword);
    }
}

if (!function_exists('sdongkir_available_couriers')) {
    /**
     * Get available couriers
     *
     * @return Array
     */
    function sdongkir_available_couriers()
    {
        $accountType = sdongkir_account_type();
        switch ($accountType) {
            case 'starter':
                $couriers = sdongkir_starter_couriers();
                break;
            case 'basic':
                $couriers = sdongkir_basic_couriers();
                break;
            case 'pro':
                $couriers = sdongkir_pro_couriers();
                break;
            default:
                $couriers = [];
                break;
        }

        return $couriers;
    }
}

if (!function_exists('sdongkir_active_cost_couriers')) {
    /**
     * Get active shipping cost couriers
     *
     * @return Array
     */
    function sdongkir_active_cost_couriers()
    {
        $courierCodes = sdongkir_shipping_cost_couriers();
        $available = sdongkir_available_couriers();

        $results = array();
        foreach ($courierCodes as $code) {
            if (array_key_exists($code, $available)) {
                $results[$code] = $available[$code];
            }
        }

        return $results;
    }
}

if (!function_exists('sdongkir_starter_couriers')) {
    /**
     * Get couriers for starter account
     *
     * @return Array
     */
    function sdongkir_starter_couriers()
    {
        $couriers = sdongkir_all_couriers();

        $starter = [
            'jne' => $couriers['jne'],
            'pos' => $couriers['pos'],
            'tiki' => $couriers['tiki'],
        ];

        ksort($starter);
        
        return $starter;
    }
}

if (!function_exists('sdongkir_basic_couriers')) {
    /**
     * Get couriers for basic account
     *
     * @return Array
     */
    function sdongkir_basic_couriers()
    {
        $couriers = sdongkir_all_couriers();

        $basic = [
            'jne' => $couriers['jne'],
            'pos' => $couriers['pos'],
            'tiki' => $couriers['tiki'],
            'rpx' => $couriers['rpx'],
            'esl' => $couriers['esl'],
            'pcp' => $couriers['pcp']
        ];

        ksort($basic);
        
        return $basic;
    }
}

if (!function_exists('sdongkir_pro_couriers')) {
    /**
     * Get couriers for pro account
     *
     * @return Array
     */
    function sdongkir_pro_couriers()
    {
        return sdongkir_all_couriers();
    }
}

if (!function_exists('sdongkir_all_couriers')) {
    function sdongkir_all_couriers()
    {
        $couriers = [
            'jne' => [
                'name' => 'JNE',
                'logo' => SDONGKIR_PLUGIN_URL . 'assets/images/couriers/jne.png',
            ],
            'pos' => [
                'name' => 'POS',
                'logo' => SDONGKIR_PLUGIN_URL . 'assets/images/couriers/pos.png',
            ],
            'tiki' => [
                'name' => 'TIKI',
                'logo' => SDONGKIR_PLUGIN_URL . 'assets/images/couriers/tiki.png',
            ],
            'rpx' => [
                'name' => 'RPX',
                'logo' => SDONGKIR_PLUGIN_URL . 'assets/images/couriers/rpx.png',
            ],
            'pandu' => [
                'name' => 'Pandu',
                'logo' => SDONGKIR_PLUGIN_URL . 'assets/images/couriers/pandu.png',
            ],
            'wahana' => [
                'name' => 'Wahana',
                'logo' => SDONGKIR_PLUGIN_URL . 'assets/images/couriers/wahana.png',
            ],
            'sicepat' => [
                'name' => 'SiCepat',
                'logo' => SDONGKIR_PLUGIN_URL . 'assets/images/couriers/sicepat.png',
            ],
            'jnt' => [
                'name' => 'J&T',
                'logo' => SDONGKIR_PLUGIN_URL . 'assets/images/couriers/jnt.png',
            ],
            'pahala' => [
                'name' => 'Pahala',
                'logo' => SDONGKIR_PLUGIN_URL . 'assets/images/couriers/pahala.png',
            ],
            'sap' => [
                'name' => 'SAP',
                'logo' => SDONGKIR_PLUGIN_URL . 'assets/images/couriers/sap.png',
            ],
            'jet' => [
                'name' => 'JET',
                'logo' => SDONGKIR_PLUGIN_URL . 'assets/images/couriers/jet.png',
            ],
            'indah' => [
                'name' => 'Indah',
                'logo' => SDONGKIR_PLUGIN_URL . 'assets/images/couriers/indah.png',
            ],
            'dse' => [
                'name' => '21 Express',
                'logo' => SDONGKIR_PLUGIN_URL . 'assets/images/couriers/dse.png',
            ],
            'slis' => [
                'name' => 'Solusi Express',
                'logo' => SDONGKIR_PLUGIN_URL . 'assets/images/couriers/slis.png',
            ],
            'first' => [
                'name' => 'First Logistics',
                'logo' => SDONGKIR_PLUGIN_URL . 'assets/images/couriers/first.png',
            ],
            'ncs' => [
                'name' => 'NCS',
                'logo' => SDONGKIR_PLUGIN_URL . 'assets/images/couriers/ncs.png',
            ],
            'star' => [
                'name' => 'Star Cargo',
                'logo' => SDONGKIR_PLUGIN_URL . 'assets/images/couriers/star.png',
            ],
            'ninja' => [
                'name' => 'Ninja Xpress',
                'logo' => SDONGKIR_PLUGIN_URL . 'assets/images/couriers/ninja.png',
            ],
            'lion' => [
                'name' => 'Lion Parcel',
                'logo' => SDONGKIR_PLUGIN_URL . 'assets/images/couriers/lion.png',
            ],
            'idl' => [
                'name' => 'IDL',
                'logo' => SDONGKIR_PLUGIN_URL . 'assets/images/couriers/idl.png',
            ],
            'rex' => [
                'name' => 'REX',
                'logo' => SDONGKIR_PLUGIN_URL . 'assets/images/couriers/rex.png',
            ],
            'ide' => [
                'name' => 'ID Express',
                'logo' => SDONGKIR_PLUGIN_URL . 'assets/images/couriers/ide.png',
            ],
            'sentral' => [
                'name' => 'Sentral',
                'logo' => SDONGKIR_PLUGIN_URL . 'assets/images/couriers/sentral.png',
            ],
            'esl' => [
                'name' => 'ESL',
                'logo' => SDONGKIR_PLUGIN_URL . 'assets/images/couriers/esl.png',
            ],
            'pcp' => [
                'name' => 'PCP',
                'logo' => SDONGKIR_PLUGIN_URL . 'assets/images/couriers/pcp.png',
            ]
        ];

        ksort($couriers);

        return $couriers;
    }

    if (!function_exists('sdongkir_basic_trackable_couriers')) {
        /**
         * Get trackable couriers for basic account
         *
         * @return Array
         */
        function sdongkir_basic_trackable_couriers()
        {
            $couriers = sdongkir_all_couriers();

            $trackable = [
                'jne' => $couriers['jne'],
            ];

            ksort($trackable);
            
            return $trackable;
        }
    }

    if (!function_exists('sdongkir_pro_trackable_couriers')) {
        /**
         * Get trackable couriers for pro account
         *
         * @return Array
         */
        function sdongkir_pro_trackable_couriers()
        {
            $couriers = sdongkir_all_couriers();

            $trackable = [
                'jne' => $couriers['jne'],
                'pos' => $couriers['pos'],
                'wahana' => $couriers['wahana'],
                'jnt' => $couriers['jnt'],
                'sap' => $couriers['sap'],
                'sicepat' => $couriers['sicepat'],
                'jet' => $couriers['jet'],
                'dse' => $couriers['dse'],
                'first' => $couriers['first'],
                'ninja' => $couriers['ninja'],
                'lion' => $couriers['lion'],
                'idl' => $couriers['idl'],
                'rex' => $couriers['rex'],
                'ide' => $couriers['ide'],
                'sentral' => $couriers['sentral']
            ];

            ksort($trackable);
            
            return $trackable;
        }
    }

    if (!function_exists('sdongkir_trackable_couriers')) {
        /**
         * Get trackable couriers
         *
         * @return Array
         */
        function sdongkir_trackable_couriers()
        {
            $accountType = sdongkir_account_type();

            switch ($accountType) {
                case 'basic':
                    $couriers = sdongkir_basic_trackable_couriers();
                    break;
                case 'pro':
                    $couriers = sdongkir_pro_trackable_couriers();
                    break;
                default:
                    $couriers = [];
                    break;
            }

            return $couriers;
        }
    }

    if (!function_exists('sdongkir_active_trackable_couriers')) {
        /**
         * Get active shipping trackable couriers
         *
         * @return Array
         */
        function sdongkir_active_trackable_couriers()
        {
            $courierCodes = sdongkir_tracking_couriers();
            $available = sdongkir_trackable_couriers();
    
            $results = array();
            foreach ($courierCodes as $code) {
                if (array_key_exists($code, $available)) {
                    $results[$code] = $available[$code];
                }
            }
    
            return $results;
        }
    }
}
