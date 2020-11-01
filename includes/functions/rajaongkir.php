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

if (!function_exists('sdokr_available_couriers')) {
    /**
     * Get available couriers
     *
     * @return Array
     */
    function sdokr_available_couriers()
    {
        $accountType = sdongkir_account_type();
        switch ($accountType) {
            case 'starter':
                $couriers = sdokr_starter_couriers();
                break;
            case 'basic':
                $couriers = sdokr_basic_couriers();
                break;
            case 'pro':
                $couriers = sdokr_pro_couriers();
                break;
            default:
                $couriers = [];
                break;
        }

        return $couriers;
    }
}

if (!function_exists('sdokr_starter_couriers')) {
    /**
     * Get couriers for starter account
     *
     * @return Array
     */
    function sdokr_starter_couriers()
    {
        $couriers = sdokr_all_couriers();

        return [
            'jne' => $couriers['jne'],
            'pos' => $couriers['pos'],
            'tiki' => $couriers['tiki'],
        ];
    }
}

if (!function_exists('sdokr_basic_couriers')) {
    /**
     * Get couriers for basic account
     *
     * @return Array
     */
    function sdokr_basic_couriers()
    {
        $couriers = sdokr_all_couriers();

        return [
            'jne' => $couriers['jne'],
            'pos' => $couriers['pos'],
            'tiki' => $couriers['tiki'],
            'rpx' => $couriers['rpx'],
            'esl' => $couriers['esl'],
            'pcp' => $couriers['pcp']
        ];
    }
}

if (!function_exists('sdokr_pro_couriers')) {
    /**
     * Get couriers for pro account
     *
     * @return Array
     */
    function sdokr_pro_couriers()
    {
        return sdokr_all_couriers();
    }
}

if (!function_exists('sdokr_all_couriers')) {
    function sdokr_all_couriers()
    {
        return [
            'jne' => [
                'name' => 'JNE',
                'logo' => SDONGKIR_PLUGIN_URL . 'assets/images/couriers/jne.png',
            ],
            'pos' => [
                'name' => 'POS Indonesia',
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
                'name' => 'Pandu Logistic',
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
                'name' => 'Pahala Express',
                'logo' => SDONGKIR_PLUGIN_URL . 'assets/images/couriers/pahala.png',
            ],
            'sap' => [
                'name' => 'SAP Express',
                'logo' => SDONGKIR_PLUGIN_URL . 'assets/images/couriers/sap.png',
            ],
            'jet' => [
                'name' => 'JET Express',
                'logo' => SDONGKIR_PLUGIN_URL . 'assets/images/couriers/jet.png',
            ],
            'indah' => [
                'name' => 'Indah Logistic',
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
                'name' => 'Nusantara Card Semesta',
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
                'name' => 'Indotama Domestik Lestari',
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
                'name' => 'Sentral Cargo',
                'logo' => SDONGKIR_PLUGIN_URL . 'assets/images/couriers/sentral.png',
            ],
            'esl' => [
                'name' => 'Eka Sari Lorena (ESL)',
                'logo' => SDONGKIR_PLUGIN_URL . 'assets/images/couriers/esl.png',
            ],
            'pcp' => [
                'name' => 'Priority Cargo and Package (PCP)',
                'logo' => SDONGKIR_PLUGIN_URL . 'assets/images/couriers/pcp.png',
            ]
        ];
    }
}
