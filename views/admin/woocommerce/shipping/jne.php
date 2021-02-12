<?php
$jneEnabled = in_array('jne', unserialize(get_option('sdongkir_wc_enabled_shipping'))) ? 'yes' : 'no';
$jneActiveServices = unserialize(get_option('sdongkir_wc_jne_active_services'));
?>

<div id="jne-shipping-setting" class="sdongkir-card">
    <div class="sdongkir-card__header">
        <label for="sdongkir_wc_jne_enable">
            <input type="checkbox" name="sdongkir_wc_enabled_shipping[]" id="sdongkir_wc_jne_enable" value="jne" <?php checked($jneEnabled, 'yes') ?>>JNE
        </label>
    </div>
    <div class="sdongkir-card__body">
        <ul class="sdongkir-courier-cb-wrapper">
            <?php foreach (sdongkir_jne_services() as $code => $title): ?>
                <?php
                    $formattedCode = strtolower(str_replace(' ', '_', $code));
                    $isActive = in_array($code, $jneActiveServices) ? 'yes' : 'no';
                ?>
                <li>
                    <div class="sdongkir-courier-cb">
                        <label for="<?php echo 'sdongkir_wc_jne_'.$formattedCode ?>">
                            <input type="checkbox" value="<?php echo esc_attr($code) ?>" name="sdongkir_wc_jne_active_services[]" id="<?php echo 'sdongkir_wc_jne_'.$formattedCode ?>" <?php checked($isActive, 'yes'); ?>>
                            <?php echo esc_attr($code) ?>
                        </label>
                    </div>
                    <div class="sdongkir-courier-spacer">&nbsp;</div>
                    <div class="sdongkir-courier-cb-title">
                        <input type="text" name="<?php echo 'sdongkir_wc_jne_'.$formattedCode.'_title'; ?>" id="<?php echo 'sdongkir_wc_jne_'.$formattedCode.'_title'; ?>" value="<?php echo esc_attr(get_option('sdongkir_wc_jne_'.$formattedCode.'_title', $title)) ?>" placeholder="<?php echo 'JNE '.$code.' title' ?>">
                    </div>
                </li>
            <?php endforeach; ?>
        </ul>
    </div>
</div>