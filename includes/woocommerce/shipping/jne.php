<?php

if (!defined('ABSPATH')) {
    exit;
}

if (!function_exists('sdongkir_jne_shipping_method')) {
    function sdongkir_jne_shipping_method()
    {
        if (!class_exists('SDONGKIR_Jne_Shipping_method')) {
            class SDONGKIR_Jne_Shipping_method extends WC_Shipping_Method
            {
                public function __construct()
                {
                    $this->id = 'jne';
                    $this->method_title = __('JNE', 'sd_ongkir');
                    $this->method_description = __('JNE shipping method', 'sd_ongkir');
                    $this->enabled = isset($this->settings['enabled']) ? $this->settings['enabled'] : 'yes';
                    $this->enabled_services = isset($this->settings['enabled_services']) ? $this->settings['enabled_services'] : [];
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

                public function init_form_fields()
                {
                    $this->form_fields = array(
                        'enabled' => array(
                            'title' => __('Enable', 'sd_ongkir'),
                            'type' => 'checkbox',
                            'default' => 'yes'
                        ),
                        'enabled_services' => array(
                            'title' => __('Enabled Services', 'sd_ongkir'),
                            'type' => 'multiselect',
                            'options' => sdongkir_jne_services()
                        ),
                    );
                }

                public function calculate_shipping($package = array())
                {
                    sd_log('fired');
                    $destination = $package["destination"];
                    sd_log($destination);
                    $accountType = sdongkir_account_type();

                    if ($destination['country'] != 'ID' || $destination['city'] == '') {
                        return;
                    }

                    // if ($accountType == 'pro' && (!isset($_SESSION) || !$_SESSION)) {
                    //     return;
                    // }

                    if ($accountType == 'pro' && !isset($_SESSION['billing_subdistrict'])) {
                        return;
                    }

                    if ($accountType == 'pro' && $_SESSION['billing_subdistrict'] == '') {
                        return;
                    }

                    $weight = 0;
                    $cost = 0;
                    foreach ($package['contents'] as $item_id => $values) {
                        $_product = $values['data'];
                        $productWeight = $_product->get_weight() == '' ? 0 : $_product->get_weight();
                        $weight = ($weight + $productWeight) * $values['quantity'];
                    }

                    $weight = $weight == 0 ? 1 : wc_get_weight($weight, 'g');

                    $origin = sdongkir_shipping_origin();
                    $shippingDest = $accountType == 'pro' ? $_SESSION['billing_subdistrict'] : $destination['city'];

                    $costService = new SDONGKIR_Request_Cost();
                    $shippingCost = $costService->get_shipping_cost($origin['origin_id'], $shippingDest, $weight, [$this->id]);

                    foreach ($shippingCost as $shipping) {
                        foreach ($shipping['costs'] as $cost) {
                            $rate = [
                                'id' => $this->id.'_'.$cost['service'],
                                'label' => $cost['service'].' - '.$cost['description'],
                                'cost' => $cost['cost'][0]['value']
                            ];
                            $this->add_rate($rate);
                        }
                    }
                }
            }
        }
    }
    add_action('woocommerce_shipping_init', 'sdongkir_jne_shipping_method');
}

if (!function_exists('sdongkir_add_jne_shipping_method')) {
    function sdongkir_add_jne_shipping_method($methods)
    {
        $methods['jne'] = 'SDONGKIR_Jne_Shipping_method';
        return $methods;
    }
    add_filter('woocommerce_shipping_methods', 'sdongkir_add_jne_shipping_method');
}

// if (!function_exists('jne_validate_order')) {
//     function jne_validate_order($posted)
//     {
//         $packages = WC()->shipping->get_packages();
//         $chosen_methods = WC()->session->get('chosen_shipping_methods');
//         if (is_array($chosen_methods) && in_array('jne', $chosen_methods)) {
//             foreach ($packages as $i => $package) {
//                 if ($chosen_methods[$i] != "jne") {
//                     continue;
//                 }
//                 $JNE_Shipping_Method = new SDONGKIR_Jne_Shipping_method();
//                 // $weightLimit = (int)$JNE_Shipping_Method->settings['weight'];
//                 $weightLimit = 2;
//                 $weight = 0;
//                 foreach ($package['contents'] as $item_id => $values) {
//                     $_product = $values['data'];
//                     $productWeight = $_product->get_weight() == '' ? 1 : $_product->get_weight();
//                     $weight = ($weight + $productWeight) * $values['quantity'];
//                 }
//                 $weight = wc_get_weight($weight, 'kg');
//                 if ($weight > $weightLimit) {
//                     $message = sprintf(__('OOPS, %d kg increase the maximum weight of %d kg for %s', 'cloudways'), $weight, $weightLimit, $JNE_Shipping_Method->title);
//                     $messageType = "error";
//                     if (!wc_has_notice($message, $messageType)) {
//                         wc_add_notice($message, $messageType);
//                     }
//                 }
//             }
//         }
//     }
//     add_action('woocommerce_review_order_before_cart_contents', 'jne_validate_order', 10);
//     add_action('woocommerce_after_checkout_validation', 'jne_validate_order', 10);
// }
