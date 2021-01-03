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
