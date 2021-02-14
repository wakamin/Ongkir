<?php

// Exit if accessed directly
if (!defined('ABSPATH')) {
    exit();
}

if (!function_exists('sdongkir_dse_services')) {
    /**
     * 21 Express shipping services
     *
     * @return Array
     */
    function sdongkir_dse_services()
    {
        return [
            'SDS' => '21 Express SDS - Same Day Service',
            'ECO' => '21 Express ECO - Regular Service',
            'ONS' => '21 Express ONS - Over Night Service',
        ];
    }
}

if (!function_exists('sdongkir_esl_services')) {
    /**
     * Eka Sari Lorena shipping services
     *
     * @return Array
     */
    function sdongkir_esl_services()
    {
        return [
            'RPX/RDX' => 'ESL RPX/RDX - Paket Dokumen/Barang',
        ];
    }
}

if (!function_exists('sdongkir_first_services')) {
    /**
     * Synergy First Logistics shipping services
     *
     * @return Array
     */
    function sdongkir_first_services()
    {
        return [
        ];
    }
}

if (!function_exists('sdongkir_ide_services')) {
    /**
     * IDexpress Service Solution shipping services
     *
     * @return Array
     */
    function sdongkir_ide_services()
    {
        return [
            'STD' => 'IDexpress STD - Standard Service'
        ];
    }
}

if (!function_exists('sdongkir_idl_services')) {
    /**
     * Indotama Domestik Lestari shipping services
     *
     * @return Array
     */
    function sdongkir_idl_services()
    {
        return [
        ];
    }
}

if (!function_exists('sdongkir_indah_services')) {
    /**
     * Indah Logistic shipping services
     *
     * @return Array
     */
    function sdongkir_indah_services()
    {
        return [
            'DARAT' => 'Indah Logistic - Pengiriman Darat',
            'UDARA' => 'Indah Logistic - Pengiriman Udara',
        ];
    }
}

if (!function_exists('sdongkir_jet_services')) {
    /**
     * JET Express shipping services
     *
     * @return Array
     */
    function sdongkir_jet_services()
    {
        return [
            'CRG' => 'JET CRG - Cargo',
            'PRI' => 'JET PRI - Priority',
            'REG' => 'JET REG - Regular',
            'XPS' => 'JET XPS - Express',
        ];
    }
}

if (!function_exists('sdongkir_jne_services')) {
    /**
     * JNE shipping services
     *
     * @return Array
     */
    function sdongkir_jne_services()
    {
        return [
            'OKE' => 'JNE OKE - Ongkos Kirim Ekonomis',
            'REG' => 'JNE REG - Layanan Reguler',
            'YES' => 'JNE YES - Yakin Esok Sampai',
            'SPS' => 'JNE SPS - Super Speed',
            'CTCOKE' => 'JNE CTCOKE - City Courier',
            'CTC' => 'JNE CTC - City Courier',
            'CTCYES' => 'JNE CTCYES - City Courier YES',
            'PELIK' => 'JNE PELIK - Amplop Pra Bayar PELIKAN',
        ];
    }
}

if (!function_exists('sdongkir_jnt_services')) {
    /**
     * J&T Express shipping services
     *
     * @return Array
     */
    function sdongkir_jnt_services()
    {
        return [
            'EZ' => 'J&T EZ - Regular Service',
        ];
    }
}

if (!function_exists('sdongkir_lion_services')) {
    /**
     * Lion Parcel shipping services
     *
     * @return Array
     */
    function sdongkir_lion_services()
    {
        return [
            'REGPACK' => 'Lion REGPACK - Regular Service',
            'ONEPACK' => 'Lion ONEPACK - One Day Service',
        ];
    }
}

if (!function_exists('sdongkir_ncs_services')) {
    /**
     * Nusantara Card Semesta shipping services
     *
     * @return Array
     */
    function sdongkir_ncs_services()
    {
        return [
            'NRS' => 'NCS NRS - Regular Service',
            'ONS' => 'NCS ONS - Overnight Service',
            'SDS' => 'NCS SDS - Same Day Service (Minimal 5 kg)',
            'DARAT' => 'NCS DARAT - Darat (Minimal 50 kg)',
            'DARAT MURAH' => 'NCS DARAT Murah - Darat Murah (Minimal 5 kg)',
            'NFD ONS' => 'NCS NFD ONS - Pengiriman Makanan (Minimal 5 kg)',
            'NFD SDS' => 'NCS NFD SDS - Pengiriman Makanan (Minimal 5 kg)',
        ];
    }
}

if (!function_exists('sdongkir_ninja_services')) {
    /**
     * Ninja Xpress shipping services
     *
     * @return Array
     */
    function sdongkir_ninja_services()
    {
        return [
            'STANDARD' => 'Ninja STANDARD - Standard Service',
        ];
    }
}

if (!function_exists('sdongkir_pahala_services')) {
    /**
     * Pahala Kencana Express shipping services
     *
     * @return Array
     */
    function sdongkir_pahala_services()
    {
        return [
        ];
    }
}

if (!function_exists('sdongkir_pandu_services')) {
    /**
     * Pandu Express Express shipping services
     *
     * @return Array
     */
    function sdongkir_pandu_services()
    {
        return [
        ];
    }
}

if (!function_exists('sdongkir_pcp_services')) {
    /**
     * Priority Cargo and Package (PCP) shipping services
     *
     * @return Array
     */
    function sdongkir_pcp_services()
    {
        return [
        ];
    }
}

if (!function_exists('sdongkir_pos_services')) {
    /**
     * Pos shipping services
     *
     * @return Array
     */
    function sdongkir_pos_services()
    {
        return [
            'Paket Kilat Khusus' => 'Pos - Paket Kilat Khusus',
            'Q9 Barang' => 'Pos - Q9 Barang',
            'Express Next Day Barang' => 'Pos - Express Next Day Barang',
            'Surat Kilat Khusus' => 'Pos - Surat Kilat Khusus',
            'Express Next Day' => 'Pos - Express Next Day',
        ];
    }
}

if (!function_exists('sdongkir_rex_services')) {
    /**
     * Royal Express Indonesia shipping services
     *
     * @return Array
     */
    function sdongkir_rex_services()
    {
        return [
            'EXP' => 'REX EXP - EXPRESS',
            'REG' => 'REX REG - REGULAR',
            'REX-10' => 'REX-10',
            'REX-1' => 'REX-1',
            'REX-0' => 'REX-0',
        ];
    }
}

if (!function_exists('sdongkir_rpx_services')) {
    /**
     * RPX Holding (RPX) shipping services
     *
     * @return Array
     */
    function sdongkir_rpx_services()
    {
        return [
            'SDP' => 'RPX SDP - SameDay Package',
            'MDP' => 'RPX MDP - MidDay Package',
            'NDP' => 'REX NDP - Next Day Package',
            'RGP' => 'REX RGP - Regular Package',
            'PSR' => 'REX PSR - PAS Reguler',
            'PAS' => 'REX PAS - Paket Ambil Suka-Suka',
        ];
    }
}

if (!function_exists('sdongkir_sap_services')) {
    /**
     * Satria Antaran Prima shipping services
     *
     * @return Array
     */
    function sdongkir_sap_services()
    {
        return [
            'REG' => 'SAP REG - REGULER',
            'ODS' => 'SAP ODS - ONE DAY SERVICE',
            'CARGO DARAT' => 'SAP CARGO DARAT - REGULAR DARAT (Minimal 50 kg)',
        ];
    }
}

if (!function_exists('sdongkir_sentral_services')) {
    /**
     * Sentral Cargo shipping services
     *
     * @return Array
     */
    function sdongkir_sentral_services()
    {
        return [
            'DARAT ELEKTRONIK' => 'Sentral DARAT ELEKTRONIK',
            'DARAT NON ELEKTRONIK' => 'Sentral DARAT NON ELEKTRONIK',
            'UDARA ELEKTRONIK' => 'Sentral UDARA ELEKTRONIK',
            'UDARA NON ELEKTRONIK' => 'Sentral UDARA NON ELEKTRONIK',
        ];
    }
}

if (!function_exists('sdongkir_sicepat_services')) {
    /**
     * SiCepat Express shipping services
     *
     * @return Array
     */
    function sdongkir_sicepat_services()
    {
        return [
            'BEST' => 'SiCepat BEST - Besok Sampai Tujuan',
            'REG' => 'SiCepat REG - Layanan Reguler',
            'SIUNT' => 'SiCepat SIUNT - SiUntung',
            'GOKIL' => 'SiCepat GOKIL - Cargo (Minimal 10kg)',
        ];
    }
}

if (!function_exists('sdongkir_slis_services')) {
    /**
     * Solusi Ekspres shipping services
     *
     * @return Array
     */
    function sdongkir_slis_services()
    {
        return [
        ];
    }
}

if (!function_exists('sdongkir_star_services')) {
    /**
     * Star Cargo shipping services
     *
     * @return Array
     */
    function sdongkir_star_services()
    {
        return [
            'Express' => 'Star Express',
            'Reguler' => 'Star Reguler',
            'Dokumen' => 'Star Dokumen',
            'MOTOR' => 'Star MOTOR',
            'MOTOR 150 - 250 CC' => 'Star MOTOR 150 - 250 CC',
        ];
    }
}

if (!function_exists('sdongkir_tiki_services')) {
    /**
     * Citra Van Titipan Kilat (TIKI) shipping services
     *
     * @return Array
     */
    function sdongkir_tiki_services()
    {
        return [
            'ECO' => 'TIKI ECO - Economy Service',
            'REG' => 'TIKI REG - Regular Service',
            'ONS' => 'TIKI ONS - Over Night Service',
        ];
    }
}

if (!function_exists('sdongkir_wahana_services')) {
    /**
     * Wahana Prestasi Logistik shipping services
     *
     * @return Array
     */
    function sdongkir_wahana_services()
    {
        return [
            'Normal' => 'Wahana Normal - Normal Service',
        ];
    }
}
