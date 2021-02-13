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

                /**
                 * Update options
                 *
                 * @return void
                 */
                public function process_admin_options()
                {
                    if (!isset($_POST['sdongkir_shipping_setting_field']) || !wp_verify_nonce($_POST['sdongkir_shipping_setting_field'], 'sdongkir_shipping_setting')) {
                        print '403 Forbidden';
                        exit;
                    }
                    
                    $enabledShipping = isset($_POST['sdokr_wc_enabled_shipping']) ? $_POST['sdokr_wc_enabled_shipping'] : [];
                    update_option('sdokr_wc_enabled_shipping', serialize($enabledShipping));

                    $jneActiveServices = isset($_POST['sdokr_wc_jne_active_services']) ? $_POST['sdokr_wc_jne_active_services'] : [];
                    update_option('sdokr_wc_jne_active_services', serialize($jneActiveServices));
                
                    foreach (sdongkir_jne_services() as $code => $title) {
                        $formattedCode = strtolower(str_replace(' ', '_', $code));
                        $customTitle = isset($_POST['sdokr_wc_jne_'.$formattedCode.'_title']) ? $_POST['sdokr_wc_jne_'.$formattedCode.'_title'] : '';
                        if ($customTitle !== '') {
                            update_option('sdokr_wc_jne_'.$formattedCode.'_title', sanitize_text_field($customTitle));
                        }
                    }
                }

                /**
                 * Generate the shipping settings html
                 *
                 * @param array $form_fields
                 * @param boolean $echo
                 * @return void
                 */
                public function generate_settings_html($form_fields = array(), $echo = true)
                {
                    ?>
                        <?php wp_nonce_field('sdongkir_shipping_setting', 'sdongkir_shipping_setting_field'); ?>
                        <div class="sdongkir-couriers-grid">
                            <?php include SDONGKIR_PLUGIN_PATH . 'views/admin/woocommerce/shipping/couriers.php'; ?>
                        </div>
                   <?php
                }

                /**
                 * Calculate shipping cost
                 *
                 * @param array $package
                 * @return void
                 */
                public function calculate_shipping($package = array())
                {
                    $destination = $package["destination"];
                    $accountType = sdongkir_account_type();

                    if ($destination['country'] != 'ID' || $destination['city'] == '') {
                        return;
                    }

                    if ($accountType == 'pro' && $destination['subdistrict'] == '') {
                        return;
                    }

                    // Calculate weight
                    $weight = sdongkir_total_weight($package);

                    // Shipping origin
                    $origin = sdongkir_shipping_origin();

                    // get the destination destination id
                    $shippingDest = sdongkir_shipping_destination_id($destination);
                    if ($shippingDest === null) {
                        return;
                    }

                    $costService = new SDONGKIR_Request_Cost();
                    $shippingCost = $costService->get_shipping_cost($origin['origin_id'], $shippingDest, $weight, unserialize(get_option('sdokr_wc_enabled_shipping')));
                    foreach ($shippingCost as $shipping) {
                        foreach ($shipping['costs'] as $cost) {
                            // if (in_array($cost['service'], $this->get_option('enabled_services'))) {
                            $formattedService = strtolower(str_replace(' ', '_', $cost['service']));
                            $rate = [
                                    'id' => $this->id.'_'.$cost['service'],
                                    'label' => get_option('sdongkir_wc_'.$shipping['code'].'_'.$formattedService.'_title'),
                                    'cost' => $cost['cost'][0]['value']
                                ];
                            $this->add_rate($rate);
                            // }
                        }
                    }
                }
            }
        }
    }
    add_action('woocommerce_shipping_init', 'sdongkir_shipping_method');
}
