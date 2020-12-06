<?php
    $isSingle = count($_POST['couriers']) === 1 ? true : false;
    $requestCost = new SDONGKIR_Request_Cost();
    $shippingCost = $requestCost->get_shipping_cost($_POST['origin'], $_POST['dest'], $_POST['weight'], $_POST['couriers']);
    $allCouriers = sdongkir_all_couriers();

    if (sdongkir_account_type() == 'pro') {
        $originData = sdongkir_subdistrict_by_id($_POST['origin']);
        $destData = sdongkir_subdistrict_by_id($_POST['dest']);
    } else {
        $originData = sdongkir_city_by_id($_POST['origin']);
        $destData = sdongkir_city_by_id($_POST['dest']);
    }
?>

<div class="sdokr-sh-res">
    <p>
        <strong><?php esc_html_e('Origin', 'sd_ongkir'); ?>: </strong><?php echo esc_attr($originData->name); ?><br>
        <strong><?php esc_html_e('Destination', 'sd_ongkir'); ?>: </strong><?php echo esc_attr($destData->name); ?><br>
        <strong><?php esc_html_e('Weight', 'sd_ongkir'); ?>: </strong><?php echo esc_attr($_POST['weight']); ?> Gram
    </p>

    <?php if (count($shippingCost) > 0 && !is_wp_error($shippingCost)): ?>
        <div class="sdokr-sh-res__block">
            <div class="sdokr-sh-res__header">
                <div class="sdokr-sh-res__header-title logo"><?php esc_html_e('Shipping', 'sd_ongkir'); ?></div>
                <div class="sdokr-sh-res__header-title service"><?php esc_html_e('Service', 'sd_ongkir'); ?></div>
                <div class="sdokr-sh-res__header-title cost"><?php esc_html_e('Cost', 'sd_ongkir'); ?></div>
            </div>

            <ul class="sdokr-sh-res__list">
                <?php foreach ($shippingCost as $shipping): ?>
                    <?php foreach ($shipping['costs'] as $cost): ?>
                        <?php $shippingCode = $shipping['code'] == 'J&T' ? 'jnt' : $shipping['code']; ?>
                        <li>
                            <div class="sdokr-sh-res__logo">
                                <img src="<?php echo esc_url($allCouriers[$shippingCode]['logo']) ?>" alt="<?php echo esc_attr($allCouriers[$shipping['code']]['name']) ?>">
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
    <?php else: ?>
        <div class="sdokr-not-found"><?php esc_html_e('Not found :(', 'sd_ongkir'); ?></div>
    <?php endif;?>
</div>