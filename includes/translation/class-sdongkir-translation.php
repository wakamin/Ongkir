<?php

if (!defined('ABSPATH')) {
    exit;
}

/**
 * Translation class
 */
if (!class_exists('SDONGKIR_Translation')) {
    class SDONGKIR_Translation
    {
        /**
         * Class constructor
         */
        public function __construct()
        {
            add_action('init', array($this, 'translation'));
        }

        /**
         * Add translation
         *
         * @return void
         */
        public function translation()
        {
            load_plugin_textdomain('sd_ongkir', false, 'ongkir/languages');
        }
    }
    
    $SDONGKIR_Translation = new SDONGKIR_Translation();
}
