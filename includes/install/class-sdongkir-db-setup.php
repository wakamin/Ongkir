<?php

if (!defined('ABSPATH')) {
    exit;
}

/**
 * Plugin activation class
 */
if (!class_exists('SDONGKIR_Db_Setup')) {
    class SDONGKIR_Db_Setup
    {
        /**
         * Class constructor
         */
        public function __construct()
        {
            register_activation_hook(SDONGKIR_PLUGIN_PATH.'/ongkir.php', array($this, 'activation_actions'));
        }

        /**
         * Plugin activation actions
         *
         * @return void
         */
        public function activation_actions()
        {
            $sdongkir_db_version = '1.0.0';
            
            global $wpdb;
            
            $tableProvince = $wpdb->prefix . "sdongkir_provinces";
            $tableCity = $wpdb->prefix . "sdongkir_cities";
            $tableSubdistrict = $wpdb->prefix . "sdongkir_subdistricts";
            $tableIntlOrigin = $wpdb->prefix . "sdongkir_intl_origin";
            $tableIntlDestination = $wpdb->prefix . "sdongkir_intl_destination";

            $installed_ver = get_option("sdongkir_db_version");
            $charset_collate = $wpdb->get_charset_collate();
            
            if ($installed_ver != $sdongkir_db_version) {
                $sqlProvince = "CREATE TABLE $tableProvince (
                    id int(10) NOT NULL AUTO_INCREMENT,
                    provnce_id int(10) NOT NULL,
                    name varchar(255) NOT NULL,
                    UNIQUE KEY id (id)
                ) $charset_collate;";

                $sqlCity = "CREATE TABLE $tableCity (
                    id int(10) NOT NULL AUTO_INCREMENT,
                    city_id int(10) NOT NULL,
                    type char(20) NOT NULL,
                    name varchar(255) NOT NULL,
                    provnce_id int(10) NOT NULL,
                    province_name varchar(255) NOT NULL,
                    postal_code char(10) NOT NULL,
                    UNIQUE KEY id (id)
                ) $charset_collate;";

                $sqlSubdistrict = "CREATE TABLE $tableSubdistrict (
                    id int(10) NOT NULL AUTO_INCREMENT,
                    subdistrict_id int(10) NOT NULL,
                    name varchar(255) NOT NULL,
                    city_id int(10) NOT NULL,
                    city_type char(20) NOT NULL,
                    city_name varchar(255) NOT NULL,
                    provnce_id int(10) NOT NULL,
                    province_name varchar(255) NOT NULL,
                    UNIQUE KEY id (id)
                ) $charset_collate;";

                $sqlIntlOrigin = "CREATE TABLE $tableIntlOrigin (
                    id int(20) NOT NULL AUTO_INCREMENT,
                    city_id int(10) NOT NULL,
                    city_type char(20) NOT NULL,
                    city_name varchar(255) NOT NULL,
                    provnce_id int(10) NOT NULL,
                    province_name varchar(255) NOT NULL,
                    postal_code char(10) NOT NULL,
                    UNIQUE KEY id (id)
                ) $charset_collate;";

                $sqlIntlDestination = "CREATE TABLE $tableIntlDestination (
                    id int(20) NOT NULL AUTO_INCREMENT,
                    country_id int(10) NOT NULL,
                    name varchar(255) NOT NULL,
                    UNIQUE KEY id (id)
                ) $charset_collate;";
            
                require_once(ABSPATH . 'wp-admin/includes/upgrade.php');
                dbDelta($sqlProvince);
                dbDelta($sqlCity);
                dbDelta($sqlSubdistrict);
                dbDelta($sqlIntlOrigin);
                dbDelta($sqlIntlDestination);
            
                update_option('sdongkir_db_version', $sdongkir_db_version);
            }
        }
    }
    
    $SDONGKIR_Db_Setup = new SDONGKIR_Db_Setup();
}
