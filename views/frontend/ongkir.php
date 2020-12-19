<div id="sdokr-form-wrapper<?php echo $widget ? '-widget' : '' ?>" class="sdokr-form <?php echo esc_attr($style); ?>">
    <div class="sdokr-form__tabs">
        <div class="sdokr-form__tab sdokr-form__tab--active">
            <div class="sdokr-form__tab-nav" title="<?php esc_html_e('Shipping Cost', 'sd_ongkir') ?>" data-target="#sdokr-shipping-cost<?php echo $widget ? '-widget' : '' ?>">
                <?php echo sdongkir_shipping_cost_icon() ?> <span class="text"><?php $style == 'small' ? esc_html_e('Cost', 'sd_ongkir') : esc_html_e('Shipping Cost', 'sd_ongkir') ?></span>
            </div>
        </div>
        <?php if (sdongkir_account_type() != 'starter' && count(sdongkir_active_trackable_couriers()) > 0): ?>
            <div class="sdokr-form__tab">
                <div class="sdokr-form__tab-nav" title="<?php esc_html_e('Shipping Tracking', 'sd_ongkir') ?>" data-target="#sdokr-shipping-tracking<?php echo $widget ? '-widget' : '' ?>">
                    <?php echo sdongkir_shipping_track_icon() ?> <span class="text"><?php $style == 'small' ? esc_html_e('Tracking', 'sd_ongkir') : esc_html_e('Shipping Tracking', 'sd_ongkir') ?></span>
                </div>
            </div>
        <?php endif; ?>
    </div>
    <div class="sdokr-form__tab-content">
        <div id="sdokr-shipping-cost<?php echo $widget ? '-widget' : '' ?>" class="sdokr-form__content sdokr-form__content--active">
            <form class="sdokr-shortcode sdokr-shipping-cost-form" method="POST" action="<?php echo esc_url(get_permalink()) ?>">
                <div class="sdokr-form-field sdokr-origin">
                    <label for="sdokr-origin<?php echo $widget ? '-widget' : '' ?>"><?php esc_html_e('Origin', 'sd_ongkir') ?></label>
                    <select name="sdokr-origin" id="sdokr-origin<?php echo $widget ? '-widget' : '' ?>" class="sdokr-origin-input sdokr-form-control sdokr-location-select2">
                        <option value="">-- <?php esc_html_e('Select', 'sd_ongkir') ?> --</option>
                    </select>
                </div>
                <div class="sdokr-form-field sdokr-destination">
                    <label for="sdokr-destination<?php echo $widget ? '-widget' : '' ?>"><?php esc_html_e('Destination', 'sd_ongkir') ?></label>
                    <select name="sdokr-destination" id="sdokr-destination<?php echo $widget ? '-widget' : '' ?>" class="sdokr-destination-input sdokr-form-control sdokr-location-select2">
                        <option value="">-- <?php esc_html_e('Select', 'sd_ongkir') ?> --</option>
                    </select>
                </div>
                <div class="sdokr-form-field sdokr-weight">
                    <label for="sdokr-weight<?php echo $widget ? '-widget' : '' ?>"><?php esc_html_e('Weight', 'sd_ongkir') ?></label>
                    <div class="sdokr-input-group">
                        <input name="sdokr-weight" id="sdokr-weight<?php echo $widget ? '-widget' : '' ?>" class="sdokr-weight-input sdokr-form-control" placeholder="<?php esc_html_e('Weight', 'sd_ongkir') ?>" />
                        <div class="sdokr-input-append">Gram</div>
                    </div>
                </div>
                <div class="sdokr-form-field">
                    <label><?php esc_html_e('Courier', 'sd_ongkir') ?></label><br>

                    <button type="button" class="sdokr-btn sdokr-btn-outline sdokr-btn-outline--secondary sdokr-selection-type sdokr-mb-3"><?php esc_html_e('Multiple selection', 'sd_ongkir') ?></button>
                    <button type="button" class="sdokr-btn sdokr-btn-outline sdokr-btn-outline--secondary sdokr-select-all sdokr-mb-3 sdokr-hide" data-target=".sdokr-couriers-cb"><?php esc_html_e('Select all', 'sd_ongkir') ?></button>
                    <button type="button" class="sdokr-btn sdokr-btn-outline sdokr-btn-outline--secondary sdokr-unselect-all sdokr-mb-3 sdokr-hide" data-target=".sdokr-couriers-cb"><?php esc_html_e('Unselect all', 'sd_ongkir') ?></button>

                    <div class="sdokr-single-courier-selection">
                        <select name="sdokr-courier" class="sdokr-cost-courier sdokr-form-control sdokr-select2">
                            <option value="">-- <?php esc_html_e('Select', 'sd_ongkir') ?> --</option>
                            <?php foreach (sdongkir_active_cost_couriers() as $code => $courier): ?>
                                <option value="<?php echo esc_attr($code) ?>"><?php echo esc_attr($courier['name']) ?></option>
                            <?php endforeach; ?>
                        </select>
                    </div>

                    <div class="sdokr-couriers-wrapper sdokr-hide">
                        <ul class="sdokr-courier-selections">
                            <?php foreach (sdongkir_active_cost_couriers() as $code => $courier): ?>
                                <li>
                                    <label for="sdokr_shipping_cost_courier_<?php echo esc_attr($code) ?><?php echo $widget ? '-widget' : '' ?>" class="sdokr-cb-hide">
                                        <input type="checkbox" id="sdokr_shipping_cost_courier_<?php echo esc_attr($code) ?><?php echo $widget ? '-widget' : '' ?>" class="sdokr-couriers-cb" value="<?php echo esc_attr($code) ?>">
                                        <div class="sdokr-courier-logo">
                                            <img src="<?php echo esc_url($courier['logo']) ?>" alt="<?php echo esc_attr($courier['name']) ?>">
                                        </div>
                                    </label>
                                </li>
                            <?php endforeach; ?>
                        </ul>
                    </div>
                </div>

                <button type="submit" class="sdokr-scost-btn sdokr-btn sdokr-btn--primary sdokr-btn--lg sdokr-btn--block"><?php esc_html_e('Get Shipping Costs', 'sd_ongkir') ?></button>
            </form>
        </div>
        <?php if (sdongkir_account_type() != 'starter' && count(sdongkir_active_trackable_couriers()) > 0): ?>
            <div id="sdokr-shipping-tracking<?php echo $widget ? '-widget' : '' ?>" class="sdokr-form__content">
                <form class="sdokr-shipping-tracking-form sdokr-shortcode" method="POST" action="<?php echo esc_url(get_permalink()) ?>">
                    <div class="sdokr-form-field">
                        <label for="sdokr-tracking-number<?php echo $widget ? '-widget' : '' ?>"><?php esc_html_e('Tracking Number', 'sd_ongkir') ?></label>
                        <input name="sdokr-tracking-number" id="sdokr-tracking-number<?php echo $widget ? '-widget' : '' ?>" class="sdokr-tracking-number-input sdokr-form-control" placeholder="<?php esc_html_e('Tracking Number', 'sd_ongkir') ?>" />
                    </div>
                    <div class="sdokr-form-field sdokr-courier">
                        <label for="sdokr-courier<?php echo $widget ? '-widget' : '' ?>"><?php esc_html_e('Courier', 'sd_ongkir') ?></label>
                        <select id="sdokr-track-courier<?php echo $widget ? '-widget' : '' ?>" name="sdokr-courier" class="sdokr-track-courier-input sdokr-form-control sdokr-select2">
                            <option value="">-- <?php esc_html_e('Select', 'sd_ongkir') ?> --</option>
                            <?php foreach (sdongkir_active_trackable_couriers() as $code => $courier): ?>
                                <option value="<?php echo esc_attr($code) ?>"><?php echo esc_attr($courier['name']) ?></option>
                            <?php endforeach; ?>
                        </select>
                    </div>

                    <button type="submit" class="sdokr-strack-btn sdokr-btn sdokr-btn--primary sdokr-btn--lg sdokr-btn--block"><?php esc_html_e('Track Shipment', 'sd_ongkir') ?></button>
                </form>
            </div>
        <?php endif; ?>
    </div>
</div>