<?php

if (!defined('ABSPATH')) {
    exit;
}

$activeCouriers = sdokr_shipping_cost_couriers();

?>

<form method="post" action="options.php" id="sdokr_setting_form">
    <?php settings_fields('sdokr_shipping_cost_couriers_options_group'); ?>

    <table class="form-table" role="presentation">
        <tbody>
            <tr>
                <th scope="row">
                    <label><?php esc_html_e('Available Couriers', 'sd_ongkir') ?></label>
                </th>
                <td>
                    <fieldset>
                        <legend class="screen-reader-text"><span><?php esc_html_e('Available Couriers', 'sd_ongkir') ?></span></legend>
                        <?php foreach (sdokr_available_couriers() as $code => $courier): ?>
                            <label for="sdokr_shipping_cost_courier_<?php echo esc_attr($code) ?>">
                                <input type="checkbox" id="sdokr_shipping_cost_courier_<?php echo esc_attr($code) ?>" name="sdokr_shipping_cost_couriers[]" value="<?php echo esc_attr($code) ?>" <?php checked(in_array($code, $activeCouriers)) ?>>
                                <?php echo esc_attr($courier['name']) ?>
                            </label>
                            <br>
                        <?php endforeach; ?>
                    </fieldset>
                </td>
            </tr>
        </tbody>
    </table>

    <?php submit_button(); ?>
</form>