<?php

if (!defined('ABSPATH')) {
    exit;
}

if (!function_exists('sdongkir_shipping_method')) {
    function sdongkir_shipping_method()
    {
        if (!class_exists('SDONGKIR_Shipping_method')) {
            class SDONGKIR_Shipping_method extends WC_Shipping_Method
            {
                public function __construct()
                {
                    $this->id = 'ongkir';
                    $this->method_title = __('Ongkir', 'sd_ongkir');
                    $this->method_description = __('Ongkir shipping method', 'sd_ongkir');
                    $this->init();
                }

                /**
                 * Load the setting API
                 *
                 * @return void
                 */
                public function init()
                {
                    $this->init_form_fields();
                    $this->init_settings();
                    add_action('woocommerce_update_options_shipping_' . $this->id, array($this, 'process_admin_options'));
                }

                public function process_admin_options()
                {
                    if (!isset($_POST['sdongkir_shipping_setting_field']) || !wp_verify_nonce($_POST['sdongkir_shipping_setting_field'], 'sdongkir_shipping_setting')) {
                        print '403 Forbidden';
                        exit;
                    }
                    
                    $enabledShipping = isset($_POST['sdongkir_wc_enabled_shipping']) ? $_POST['sdongkir_wc_enabled_shipping'] : [];
                    update_option('sdongkir_wc_enabled_shipping', serialize($enabledShipping));

                    $jneActiveServices = isset($_POST['sdongkir_wc_jne_active_services']) ? $_POST['sdongkir_wc_jne_active_services'] : [];
                    update_option('sdongkir_wc_jne_active_services', serialize($jneActiveServices));
                
                    foreach (sdongkir_jne_services() as $code => $title) {
                        $formattedCode = strtolower(str_replace(' ', '_', $code));
                        $customTitle = isset($_POST['sdongkir_wc_jne_'.$formattedCode.'_title']) ? $_POST['sdongkir_wc_jne_'.$formattedCode.'_title'] : '';
                        if ($customTitle !== '') {
                            update_option('sdongkir_wc_jne_'.$formattedCode.'_title', sanitize_text_field($customTitle));
                        }
                    }
                }

                public function generate_settings_html($form_fields = array(), $echo = true)
                {
                    ?>
                        <?php wp_nonce_field('sdongkir_shipping_setting', 'sdongkir_shipping_setting_field'); ?>
                        <div class="sdongkir-couriers-grid">
                            <?php include SDONGKIR_PLUGIN_PATH . 'views/admin/woocommerce/shipping/jne.php'; ?>
                        </div>
                   <?php
                }
            }
        }
    }
    add_action('woocommerce_shipping_init', 'sdongkir_shipping_method');
}
