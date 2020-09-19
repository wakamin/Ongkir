<div id="sdokr-form-wrapper" class="sdokr-form">
    <div class="sdokr-form__tabs">
        <div class="sdokr-form__tab sdokr-form__tab--active">
            <a href="#" title="<?php esc_html_e('Shipping Cost', 'sd_ongkir') ?>" data-target="#sdokr-shipping-cost-form">
                <?php echo $shippingCostIcon ?> <?php esc_html_e('Shipping Cost', 'sd_ongkir') ?>
            </a>
        </div>
        <div class="sdokr-form__tab">
            <a href="#" title="<?php esc_html_e('Shipping Tracking', 'sd_ongkir') ?>" data-target="#sdokr-shipping-tracking-form">
                <?php echo $shippingTrackingIcon ?> <?php esc_html_e('Shipping Tracking', 'sd_ongkir') ?>
            </a>
        </div>
    </div>
    <div class="sdokr-form__tab-content">
        <div id="sdokr-shipping-cost-form" class="sdokr-form__content sdokr-form__content--active">
            <form class="sdokr-shortcode" name="sdokr-shipping-cost-form">
                <div class="sdokr-form-inline">
                    <div class="sdokr-form-field sdokr-origin">
                        <label for="sdokr-origin"><?php esc_html_e('Origin', 'sd_ongkir') ?></label>
                        <select name="sdokr-origin" id="sdokr-origin" class="sdokr-form-control select2">
                            <option value="">-- <?php esc_html_e('Select', 'sd_ongkir') ?> --</option>
                            <?php foreach ($locations as $location) : ?>
                                <option value="<?php echo esc_attr($location['id']) ?>"><?php echo esc_attr($location['name']) ?></option>
                            <?php endforeach; ?>
                        </select>
                    </div>
                    <div class="sdokr-form-field sdokr-destination">
                        <label for="sdokr-destination"><?php esc_html_e('Destination', 'sd_ongkir') ?></label>
                        <select name="sdokr-destination" id="sdokr-destination" class="sdokr-form-control select2">
                            <option value="">-- <?php esc_html_e('Select', 'sd_ongkir') ?> --</option>
                            <?php foreach ($locations as $location) : ?>
                                <option value="<?php echo esc_attr($location['id']) ?>"><?php echo esc_attr($location['name']) ?></option>
                            <?php endforeach; ?>
                        </select>
                    </div>
                    <div class="sdokr-form-field sdokr-weight">
                        <label for="sdokr-weight"><?php esc_html_e('Weight', 'sd_ongkir') ?></label>
                        <div class="sdokr-input-group">
                            <input name="sdokr-weight" id="sdokr-weight" class="sdokr-form-control" placeholder="<?php esc_html_e('Weight', 'sd_ongkir') ?>" />
                            <div class="sdokr-input-append">Gram</div>
                        </div>
                    </div>
                </div>

                <button type="submit" class="sdokr-form-btn"><?php esc_html_e('Get Shipping Costs', 'sd_ongkir') ?></button>
            </form>
        </div>
        <div id="sdokr-shipping-tracking-form" class="sdokr-form__content">
            <form class="sdokr-shortcode" name="sdokr-shipping-tracking-form">
                <div class="sdokr-form-inline">
                    <div class="sdokr-form-field sdokr-tracking-number">
                        <label for="sdokr-tracking-number"><?php esc_html_e('Tracking Number', 'sd_ongkir') ?></label>
                        <input name="sdokr-tracking-number" id="sdokr-tracking-number" class="sdokr-form-control" placeholder="<?php esc_html_e('Tracking Number', 'sd_ongkir') ?>" />
                    </div>
                    <div class="sdokr-form-field sdokr-courier">
                        <label for="sdokr-courier"><?php esc_html_e('Courier', 'sd_ongkir') ?></label>
                        <select name="sdokr-courier" id="sdokr-courier" class="sdokr-form-control select2">
                            <option value="test">Test</option>
                            <option value="test2">Test2</option>
                            <option value="test3">Test3</option>
                            <option value="test4">Test4</option>
                        </select>
                    </div>
                </div>

                <button type="submit" class="sdokr-form-btn"><?php esc_html_e('Track Shipment', 'sd_ongkir') ?></button>
            </form>
        </div>
    </div>
</div>