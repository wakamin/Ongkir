<?php
$posEnabled = in_array('pos', unserialize(get_option('sdongkir_wc_enabled_shipping'))) ? 'yes' : 'no';
$posActiveServices = unserialize(get_option('sdongkir_wc_pos_active_services'));
?>

<div id="pos-shipping-setting" class="sdongkir-card">
    <div class="sdongkir-card__header">
        <label for="sdongkir_wc_pos_enable">
            <input type="checkbox" name="sdongkir_wc_enabled_shipping[]" id="sdongkir_wc_pos_enable" value="pos" <?php checked($posEnabled, 'yes') ?>>POS
        </label>
    </div>
    <div class="sdongkir-card__body">
        <ul class="sdongkir-courier-cb-wrapper">
            <?php foreach (sdongkir_pos_services() as $code => $title): ?>
                <?php
                    $formattedCode = strtolower(str_replace(' ', '_', $code));
                    $isActive = 'no';
                    if (is_array($posActiveServices)) {
                        $isActive = in_array($code, $posActiveServices) ? 'yes' : 'no';
                    }
                ?>
                <li>
                    <div class="sdongkir-courier-cb">
                        <label for="<?php echo 'sdongkir_wc_pos_'.$formattedCode ?>">
                            <input type="checkbox" value="<?php echo esc_attr($code) ?>" name="sdongkir_wc_pos_active_services[]" id="<?php echo 'sdongkir_wc_pos_'.$formattedCode ?>" <?php checked($isActive, 'yes'); ?>>
                            <?php echo esc_attr($code) ?>
                        </label>
                    </div>
                    <div class="sdongkir-courier-spacer">&nbsp;</div>
                    <div class="sdongkir-courier-cb-title">
                        <input type="text" name="<?php echo 'sdongkir_wc_pos_'.$formattedCode.'_title'; ?>" id="<?php echo 'sdongkir_wc_pos_'.$formattedCode.'_title'; ?>" value="<?php echo esc_attr(get_option('sdongkir_wc_pos_'.$formattedCode.'_title', $title)) ?>" placeholder="<?php echo 'POS '.$code.' title' ?>">
                    </div>
                </li>
            <?php endforeach; ?>
        </ul>
    </div>
</div>