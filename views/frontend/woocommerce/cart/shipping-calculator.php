<?php
/**
 * Shipping Calculator
 *
 * This template can be overridden by copying it to yourtheme/woocommerce/cart/shipping-calculator.php.
 *
 * HOWEVER, on occasion WooCommerce will need to update template files and you
 * (the theme developer) will need to copy the new files to your theme to
 * maintain compatibility. We try to do this as little as possible, but it does
 * happen. When this occurs the version of the template file will be bumped and
 * the readme will list any important changes.
 *
 * @see     https://docs.woocommerce.com/document/template-structure/
 * @package WooCommerce\Templates
 * @version 4.0.0
 */

defined('ABSPATH') || exit;

do_action('woocommerce_before_shipping_calculator'); ?>

<form class="woocommerce-shipping-calculator" action="<?php echo esc_url(wc_get_cart_url()); ?>" method="post">

	<a href="#" class="shipping-calculator-button"><?php esc_html_e(! empty($button_text) ? $button_text : __('Calculate shipping', 'sd_ongkir')); ?></a>

	<section class="shipping-calculator-form" style="display:none;">
		<?php if (apply_filters('woocommerce_shipping_calculator_enable_country', true)) : ?>
			<p class="form-row form-row-wide" id="calc_shipping_country_field">
				<select name="calc_shipping_country" id="calc_shipping_country" class="country_to_state country_select" rel="calc_shipping_state">
					<option value="default"><?php esc_html_e('Select a country / region&hellip;', 'sd_ongkir'); ?></option>
					<?php foreach (WC()->countries->get_shipping_countries() as $key => $value): ?>
                        <option value="<?php echo esc_attr($key); ?>" <?php selected(WC()->customer->get_shipping_country(), esc_attr($key)); ?>><?php echo esc_html($value); ?></option>
                    <?php endforeach; ?>
				</select>
			</p>
		<?php endif; ?>

		<?php if (apply_filters('woocommerce_shipping_calculator_enable_state', true)) : ?>
			<p class="form-row form-row-wide" id="calc_shipping_state_field">
				<?php
                $accountType = sdongkir_account_type();

                $current_cc = WC()->customer->get_shipping_country();
                $current_r  = WC()->customer->get_shipping_state();
                $provinceId = str_replace('prov-', '', $current_r);
                $current_city = WC()->customer->get_shipping_city();
                $current_subdistrict = '';
                if ($accountType == 'pro') {
                    $current_subdistrict = isset($_SESSION['billing_subdistrict']) ? $_SESSION['billing_subdistrict'] : '';
                }
                
                $states     = WC()->countries->get_states($current_cc);
                $cities = sdongkir_cities_by_province_id($provinceId);
                if ($accountType == 'pro') {
                    $subdistricts = sdongkir_subdistricts_by_city_id($current_city);
                }

                if (is_array($states) && empty($states)) {
                    ?>
					<input type="hidden" name="calc_shipping_state" id="calc_shipping_state" placeholder="<?php esc_attr_e('State / County', 'sd_ongkir'); ?>" />
					<?php
                } elseif (is_array($states)) {
                    ?>
					<span>
						<select name="calc_shipping_state" class="state_select" id="calc_shipping_state" data-placeholder="<?php esc_attr_e('State / County', 'sd_ongkir'); ?>">
							<option value=""><?php esc_html_e('Select an option&hellip;', 'sd_ongkir'); ?></option>
							<?php foreach ($states as $ckey => $cvalue): ?>
                                <option value="<?php echo esc_attr($ckey); ?>" <?php selected($current_r, $ckey); ?>><?php echo esc_html($cvalue); ?></option>
                            <?php endforeach; ?>
						</select>
					</span>
					<?php
                } else {
                    ?>
					<input type="text" class="input-text" value="<?php echo esc_attr($current_r); ?>" placeholder="<?php esc_attr_e('State / County', 'sd_ongkir'); ?>" name="calc_shipping_state" id="calc_shipping_state" />
					<?php
                }
                ?>
			</p>
		<?php endif; ?>

		<?php if (apply_filters('woocommerce_shipping_calculator_enable_city', true)) : ?>
			<p class="form-row form-row-wide" id="calc_shipping_city_field">
				<?php if ($current_cc == 'ID'): ?>
					<select name="calc_shipping_city" class="state_select" id="calc_shipping_city" data-placeholder="<?php esc_attr_e('City', 'sd_ongkir'); ?>">
						<option value=""><?php esc_html_e('Please Select', 'sd_ongkir'); ?></option>
						<?php foreach ($cities as $city): ?>
							<option value="<?php echo esc_attr($city->name); ?>" <?php selected($current_city, $city->name); ?>><?php echo esc_attr($city->name); ?></option>
						<?php endforeach; ?>
					</select>
				<?php else: ?>
					<input type="text" class="input-text" value="<?php echo esc_attr(WC()->customer->get_shipping_city()); ?>" placeholder="<?php esc_attr_e('City', 'sd_ongkir'); ?>" name="calc_shipping_city" id="calc_shipping_city" />
				<?php endif; ?>
			</p>
		<?php endif; ?>

		<?php if ($accountType == 'pro'): ?>
			<p class="form-row form-row-wide" id="calc_shipping_subdistrict_field">
				<select name="calc_shipping_subdistrict" class="state_select" id="calc_shipping_subdistrict" data-placeholder="<?php esc_attr_e('Subdistrict', 'sd_ongkir'); ?>">
					<option value=""><?php esc_html_e('Please Select', 'sd_ongkir'); ?></option>
					<?php foreach ($subdistricts as $subdistrict): ?>
						<option value="<?php echo esc_attr($subdistrict->name); ?>" <?php selected($current_subdistrict, $subdistrict->name); ?>><?php echo esc_attr($subdistrict->name); ?></option>
					<?php endforeach; ?>
				</select>
			</p>
		<?php endif; ?>

		<?php if (apply_filters('woocommerce_shipping_calculator_enable_postcode', true)) : ?>
			<p class="form-row form-row-wide" id="calc_shipping_postcode_field">
				<input type="text" class="input-text" value="<?php echo esc_attr(WC()->customer->get_shipping_postcode()); ?>" placeholder="<?php esc_attr_e('Postcode / ZIP', 'sd_ongkir'); ?>" name="calc_shipping_postcode" id="calc_shipping_postcode" />
			</p>
		<?php endif; ?>

		<p><button type="submit" name="calc_shipping" value="1" class="button"><?php esc_html_e('Update', 'sd_ongkir'); ?></button></p>
		<?php wp_nonce_field('woocommerce-shipping-calculator', 'woocommerce-shipping-calculator-nonce'); ?>
	</section>
</form>

<?php do_action('woocommerce_after_shipping_calculator'); ?>
