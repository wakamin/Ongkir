<?php

if (!defined('ABSPATH')) {
    exit;
}

/**
 * Session class
 */
if (!class_exists('SDONGKIR_Session')) {
    class SDONGKIR_Session
    {
        /**
         * Class constructor
         */
        public function __construct()
        {
            add_action('init', array($this, 'register_session'));
        }

        /**
         * Register session
         *
         * @return void
         */
        public function register_session()
        {
            if (!session_id()) {
                session_start();
            }
        }
    }
    
    $SDONGKIR_Session = new SDONGKIR_Session();
}
