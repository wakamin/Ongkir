<?php $enabledShipping = sdongkir_wc_enabled_shipping(); ?>

<?php foreach (sdongkir_all_couriers() as $courierCode => $courier): ?>
    <?php
        $isEnabled = in_array($courierCode, $enabledShipping) ? 'yes' : 'no';
        $activeServices = sdongkir_wc_courier_active_services($courierCode);
        $getServicesFunc = 'sdongkir_'.$courierCode.'_services';
        $services = function_exists($getServicesFunc) ? call_user_func($getServicesFunc) : [];
    ?>
    <div id="<?php echo $courierCode; ?>-shipping-setting" class="sdongkir-card">
        <div class="sdongkir-card__header">
            <label for="sdokr_wc_<?php echo $courierCode; ?>_enable">
                <input type="checkbox" name="sdokr_wc_enabled_shipping[]" id="sdokr_wc_<?php echo $courierCode; ?>_enable" value="<?php echo $courierCode; ?>" <?php checked($isEnabled, 'yes') ?>>
                <?php echo $courier['name']; ?>
            </label>
            <img src="<?php echo esc_attr($courier['logo']); ?>" alt="<?php echo esc_attr($courier['name']); ?>" class="sdongkir-card__header-image">
        </div>
        <div class="sdongkir-card__body">
            <ul class="sdongkir-courier-cb-wrapper">
                <?php foreach ($services as $serviceCode => $title): ?>
                    <?php
                        $formattedService = sdongkir_format_shipping_service_code($serviceCode);
                        $isServiceActive = in_array($serviceCode, $activeServices) ? 'yes' : 'no';
                    ?>
                    <li>
                        <div class="sdongkir-courier-cb">
                            <label for="<?php echo 'sdokr_wc_'.$courierCode.'_'.$formattedService ?>">
                                <input type="checkbox" value="<?php echo esc_attr($serviceCode) ?>" name="sdokr_wc_<?php echo $courierCode; ?>_active_services[]" id="<?php echo 'sdokr_wc_'.$courierCode.'_'.$formattedService ?>" <?php checked($isServiceActive, 'yes'); ?>>
                                <?php echo esc_attr($serviceCode) ?>
                            </label>
                        </div>
                        <div class="sdongkir-courier-spacer">&nbsp;</div>
                        <div class="sdongkir-courier-cb-title">
                            <input type="text" name="<?php echo 'sdokr_wc_'.$courierCode.'_'.$formattedService.'_title'; ?>" id="<?php echo 'sdokr_wc_'.$courierCode.'_'.$formattedService.'_title'; ?>" value="<?php echo esc_attr(sdongkir_wc_courier_service_title($courierCode, $serviceCode)) ?>" placeholder="<?php echo $courier['name'].' '.$serviceCode.' title' ?>">
                        </div>
                    </li>
                <?php endforeach; ?>
            </ul>
        </div>
    </div>
<?php endforeach; ?>