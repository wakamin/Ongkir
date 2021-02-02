<?php

if (!defined('ABSPATH')) {
    exit;
}

if (!function_exists('sdongkir_pos_shipping_method')) {
    function sdongkir_pos_shipping_method()
    {
        if (!class_exists('SDONGKIR_Pos_Shipping_method')) {
            class SDONGKIR_Pos_Shipping_method extends WC_Shipping_Method
            {
                public function __construct()
                {
                    $this->id = 'pos';
                    $this->method_title = __('Pos Indonesia', 'sd_ongkir');
                    $this->method_description = __('Pos Indonesia shipping method', 'sd_ongkir');
                    $this->enabled = isset($this->settings['enabled']) ? $this->settings['enabled'] : 'yes';
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
                    // Generate options for service title
                    $services = sdongkir_pos_services();
                    $serviceOptions = [];
                    foreach ($services as $code => $title) {
                        $formattedCode = strtolower(str_replace(' ', '_', $code));
                        $serviceOptions[$this->id.'_'.$formattedCode.'_title'] = [
                            'title' => $code,
                            'desc_tip' => sprintf(__('%s service title', 'sd_ongkir'), $code),
                            'type' => 'text',
                            'default' => $title
                        ];
                    }

                    $optionFields = array(
                        'enabled' => array(
                            'title' => __('Enable', 'sd_ongkir'),
                            'type' => 'checkbox',
                            'default' => 'yes'
                        ),
                        'enabled_services' => array(
                            'title' => __('Enabled Services', 'sd_ongkir'),
                            'type' => 'multiselect',
                            'options' => sdongkir_pos_services()
                        ),
                        'service_title_pos' => array(
                            'title' => __('Service Title', 'sd_ongkir'),
                            'type'  => 'title',
                            'desc'  => '',
                            'id'    => 'sdongkir_service_title_pos',
                        ),
                    );

                    $this->form_fields = array_merge($optionFields, $serviceOptions);
                }

                public function calculate_shipping($package = array())
                {
                    if ($this->settings['enabled'] === 'no') {
                        return;
                    }

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
                    $shippingCost = $costService->get_shipping_cost($origin['origin_id'], $shippingDest, $weight, [$this->id]);
                    foreach ($shippingCost as $shipping) {
                        foreach ($shipping['costs'] as $cost) {
                            if (in_array($cost['service'], $this->get_option('enabled_services'))) {
                                $formattedService = strtolower(str_replace(' ', '_', $cost['service']));
                                $rate = [
                                    'id' => $this->id.'_'.$cost['service'],
                                    'label' => $this->get_option($shipping['code'].'_'.$formattedService.'_title'),
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
    add_action('woocommerce_shipping_init', 'sdongkir_pos_shipping_method');
}
