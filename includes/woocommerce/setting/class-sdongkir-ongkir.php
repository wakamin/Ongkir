<?php

if (!defined('ABSPATH')) {
    exit;
}

if (!function_exists('sdongkir_shipping_method')) {
    /**
     * Shipping method function for WooCommerce
     *
     * @return void
     */
    function sdongkir_shipping_method()
    {
        if (!class_exists('SDONGKIR_Shipping_method')) {
            /**
             * Shipping method class
             */
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

                    foreach (sdongkir_all_couriers() as $courierCode => $courier) {
                        $activeServices = isset($_POST['sdokr_wc_'.$courierCode.'_active_services']) ? $_POST['sdokr_wc_'.$courierCode.'_active_services'] : [];
                        update_option('sdokr_wc_'.$courierCode.'_active_services', serialize($activeServices));
                    
                        $customTitle = isset($_POST['sdokr_wc_'.$courierCode.'_service_title']) ? $_POST['sdokr_wc_'.$courierCode.'_service_title'] : [];
                        if (!empty($customTitle)) {
                            update_option('sdokr_wc_'.$courierCode.'_service_title', serialize($customTitle));
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

                    $enabledShipping = sdongkir_wc_enabled_shipping();
                    if (empty($enabledShipping)) {
                        return;
                    }

                    $allActiveServices = sdongkir_wc_all_active_services();
                    $costService = new SDONGKIR_Request_Cost();
                    $shippingCost = $costService->get_shipping_cost($origin['origin_id'], $shippingDest, $weight, $enabledShipping);
                    foreach ($shippingCost as $shipping) {
                        $titleArr = sdongkir_wc_courier_service_title_arr($shipping['code']);
                        foreach ($shipping['costs'] as $cost) {
                            $allowedByWeight = sdongkir_shipping_allowed_by_weight($shipping['code'], $cost['service'], $weight);
                            if (in_array($cost['service'], $allActiveServices) && $allowedByWeight) {
                                $rate = [
                                    'id' => $this->id.'_'.sdongkir_format_shipping_service_code($cost['service']),
                                    'label' => isset($titleArr[$cost['service']]) ? $titleArr[$cost['service']] : $cost['service'],
                                    'cost' => $cost['cost'][0]['value']
                                ];
                                $this->add_rate($rate);
                            }
                        }
                    }
                }
            }
        }
    }
    add_action('woocommerce_shipping_init', 'sdongkir_shipping_method');
}

/**
 * Define shipping method
 *
 * @param Array $methods
 * @return Array
 */
function sdongkir_wc_define_shippings($methods)
{
    $methods['ongkir'] = 'SDONGKIR_Shipping_method';
    return $methods;
}
add_filter('woocommerce_shipping_methods', 'sdongkir_wc_define_shippings');
