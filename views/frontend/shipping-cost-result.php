<?php
    $isSingle = count($_POST['couriers']) === 1 ? true : false;
    $requestCost = new SDONGKIR_Request_Cost();
    $shippingCost = $requestCost->get_shipping_cost($_POST['origin'], $_POST['dest'], $_POST['weight'], $_POST['couriers']);
    $allCouriers = sdokr_all_couriers();

    sd_log($shippingCost);
?>

<div class="sdokr-sh-res">
    <?php if (!$isSingle): ?>
        <div class="sdokr-sh-res__filter">
            <ul class="sdokr-list-inline">
                <?php foreach (sdokr_available_couriers() as $code => $courier): ?>
                    <li>
                        <label for="sdokr_shipping_cost_courier_<?php echo esc_attr($code) ?>">
                            <input type="checkbox" id="sdokr_shipping_cost_courier_<?php echo esc_attr($code) ?>" value="<?php echo esc_attr($code) ?>">
                            <?php echo esc_attr($courier['name']) ?>
                        </label>
                    </li>
                <?php endforeach; ?>
            </ul>
        </div>
    <?php endif; ?>

    <div class="sdokr-sh-res__block">
        <div class="sdokr-sh-res__header">
            <div class="sdokr-sh-res__header-title sdokr-sh-res__header-title--sort logo">
                <span class="text"><?php esc_html_e('Shipping', 'sd_ongkir'); ?></span>
                <span class="icon"><span class="dashicons dashicons-arrow-down-alt"></span></span>
            </div>
            <div class="sdokr-sh-res__header-title service"><?php esc_html_e('Service', 'sd_ongkir'); ?></div>
            <div class="sdokr-sh-res__header-title sdokr-sh-res__header-title--sort cost">
                <span class="text"><?php esc_html_e('Cost', 'sd_ongkir'); ?></span>
                <span class="icon"><span class="dashicons dashicons-arrow-up-alt"></span></span>
            </div>
        </div>

        <ul class="sdokr-sh-res__list">
            <?php foreach ($shippingCost as $shipping): ?>
                <?php foreach ($shipping['costs'] as $cost): ?>
                    <li>
                        <div class="sdokr-sh-res__logo">
                            <img src="<?php echo $allCouriers[$shipping['code']]['logo'] ?>" alt="<?php echo $allCouriers[$shipping['code']]['name'] ?>">
                        </div>
                        <div class="sdokr-sh-res__service-etd">
                            <span class="service">
                                <?php echo $cost['service'] ?>
                            </span>
                            <span class="etd">
                                <?php echo sprintf(__('%s day(s)', 'sd_ongkir'), $cost['cost'][0]['etd']); ?>
                            </span>
                        </div>
                        <div class="sdokr-sh-res__cost">Rp <?php echo number_format($cost['cost'][0]['value'], 0, ',', '.'); ?></div>
                    </li>
                <?php endforeach; ?>
            <?php endforeach; ?>
        </ul>
    </div>
</div>