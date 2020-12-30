<?php

if (!function_exists('sdongkir_jne_services')) {
    /**
     * JNE shipping services
     *
     * @return Array
     */
    function sdongkir_jne_services()
    {
        return [
            'OKE' => 'OKE - Ongkos Kirim Ekonomis',
            'REG' => 'REG - Layanan Reguler',
            'YES' => 'YES - Yakin Esok Sampai',
            'SPS' => 'SPS - Super Speed',
            'CTCOKE' => 'CTCOKE - JNE City Courier',
            'CTC' => 'CTC - JNE City Courier',
            'CTCYES' => 'CTCYES - JNE City Courier YES',
            'PELIK' => 'PELIK - Amplop Pra Bayar PELIKAN',
        ];
    }
}
