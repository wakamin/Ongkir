<?php
    $requestTracking = new SDONGKIR_Request_Tracking();
    $waybill = $_POST['tracking_number'];
    $courierCode = $_POST['courier'];
    $track = $requestTracking->track_shipment($waybill, $courierCode);
    $allCouriers = sdongkir_all_couriers();
?>

<div class="sdokr-sh-track">

    <?php if (is_wp_error($track)): ?>
        <?php $requestError = (array) $track; ?>
        <p><?php echo esc_attr($requestError['errors']['broke'][0]); ?></p>
    <?php else: ?>
        <div class="sdokr-sh-track__top">
            <div class="sdokr-sh-track__status">
                <dl>
                    <dt><?php esc_html_e('Tracking Number', 'sd_ongkir'); ?></dt>
                    <dd><?php echo esc_attr($track['summary']['waybill_number']) ?></dd>

                    <dt><?php esc_html_e('Service', 'sd_ongkir'); ?></dt>
                    <dd><?php echo esc_attr($track['summary']['service_code']) ?></dd>

                    <dt><?php esc_html_e('Status', 'sd_ongkir'); ?></dt>
                    <dd><?php echo esc_attr($track['delivery_status']['status']) ?></dd>

                    <?php if ($track['delivery_status']['status'] === 'DELIVERED'): ?>
                        <dt><?php esc_html_e('Receiver', 'sd_ongkir'); ?></dt>
                        <dd><?php echo esc_attr($track['delivery_status']['pod_receiver']); ?></dd>
                    <?php endif; ?>
                </dl>
            </div>
            <div class="sdokr-sh-track__courier-logo">
                <img src="<?php echo esc_url($allCouriers[$courierCode]['logo']); ?>" alt="<?php echo esc_attr($allCouriers[$courierCode]['name']); ?>">
            </div>
        </div>
        <div class="sdokr-sh-track__origin-dest">
            <div class="sdokr-sh-track__od-ilust">
                <div class="sdokr-sh-track__od-ilust-left">&nbsp;</div>
                <div class="sdokr-sh-track__od-ilust-icon"><?php echo sdongkir_shipping_track_result_icon(); ?></div>
                <div class="sdokr-sh-track__od-ilust-right">&nbsp;</div>
            </div>
            <div class="sdokr-sh-track__od-text">
                <div class="sdokr-sh-track__origin">
                    <strong><?php esc_html_e('From', 'sd_ongkir'); ?>:</strong><br />
                    <?php echo esc_attr($track['summary']['shipper_name']); ?><br />
                    <?php echo esc_attr($track['summary']['origin']); ?>
                </div>
                <div class="sdokr-sh-track__dest">
                    <strong><?php esc_html_e('To', 'sd_ongkir'); ?>:</strong><br />
                    <?php echo esc_attr($track['summary']['receiver_name']); ?><br />
                    <?php echo esc_attr($track['summary']['destination']); ?>
                </div>
            </div>
        </div>
        <div class="sdokr-sh-track__positions">
            <ul>
                <?php foreach ($track['manifest'] as $position): ?>
                    <li>
                        <div class="sdokr-sh-track__pos-dot">&nbsp;</div>
                        <div class="sdokr-sh-track__pos">
                            <?php echo esc_attr($position['manifest_description']); ?>
                        </div>
                        <div class="sdokr-sh-track__date-time">
                            <?php echo esc_attr($position['manifest_date'] . ' ' . $position['manifest_time']); ?>
                        </div>
                    </li>
                <?php endforeach; ?>
            </ul>
        </div>
    <?php endif; ?>
</div>