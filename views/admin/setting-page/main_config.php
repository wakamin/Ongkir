<?php

if (!defined('ABSPATH')) {
    exit;
}

$apiKey = sdongkir_api_key();
$accountType = sdongkir_account_type();
$locationCount = sdongkir_count_location_data();

?>

<form method="post" action="options.php" id="sdokr_setting_form">
    <?php settings_fields('sdokr_options_group'); ?>

    <table class="form-table" role="presentation">
        <tbody>
            <tr>
                <th scope="row">
                    <label for="sdokr_rajaongkir_api_key"><?php esc_html_e('RajaOngkir Api Key', 'sd_ongkir') ?></label>
                </th>
                <td>
                    <input type="text" id="sdokr_rajaongkir_api_key" class="regular-text" name="sdokr_rajaongkir_api_key" value="<?php echo esc_attr($apiKey); ?>" aria-describedby="sdokr_rajaongkir_api_key-description">
                    <p class="description" id="sdokr_rajaongkir_api_key-description">
                        <?php printf(__('Get your RajaOngkir api key <a href="%s" target="_blank">here</a>.', 'sd_ongkir'), esc_url('https://rajaongkir.com/akun/panel')) ?>
                    </p>
                </td>
            </tr>
            <tr>
                <th scope="row">
                    <label for="sdokr_rajaongkir_account_type"><?php esc_html_e('Account Type', 'sd_ongkir') ?></label>
                </th>
                <td>
                    <select name="sdokr_rajaongkir_account_type" id="sdokr_rajaongkir_account_type">
                        <option value="" <?php selected($accountType, '') ?>>Please Select</option>
                        <option value="starter" <?php selected($accountType, 'starter') ?>>Starter</option>
                        <option value="basic" <?php selected($accountType, 'basic') ?>>Basic</option>
                        <option value="pro" <?php selected($accountType, 'pro') ?>>Pro</option>
                    </select>
                </td>
            </tr>
            <?php if ($accountType !== '' && $apiKey !== ''): ?>
                <tr>
                    <th scope="row">
                        <label><?php esc_html_e('Stored Location Count', 'sd_ongkir') ?></label>
                    </th>
                    <td>
                        <ol class="sdokr_stored_location">
                            <li><?php esc_html_e('Province', 'sd_ongkir') ?>: <span class="sdokr_province"><?php echo number_format_i18n($locationCount['province']) ?></span></li>
                            <li><?php esc_html_e('City', 'sd_ongkir') ?>: <span class="sdokr_city"><?php echo number_format_i18n($locationCount['city']) ?></span></li>
                            <?php if ($accountType == 'pro'): ?>
                                <li><?php esc_html_e('Subdistrict', 'sd_ongkir') ?>: <span class="sdokr_subdistrict"><?php echo number_format_i18n($locationCount['subdistrict']) ?></span></li>
                            <?php endif; ?>
                            <?php if ($accountType != 'starter'): ?>
                                <li><?php esc_html_e('International Origin', 'sd_ongkir') ?>: <span class="sdokr_intl_origin"><?php echo number_format_i18n($locationCount['intl_origin']) ?></span></li>
                                <li><?php esc_html_e('International Destination', 'sd_ongkir') ?>: <span class="sdokr_intl_destination"><?php echo number_format_i18n($locationCount['intl_destination']) ?></span></li>
                            <?php endif; ?>
                        </ol>
                    </td>
                </tr>
                <tr>
                    <th scope="row">
                        <label><?php esc_html_e('Get Location Data', 'sd_ongkir') ?></label>
                    </th>
                    <td>
                        <button type="button" id="sdokr-get-location" class="button">
                            <?php esc_html_e('Get Location Data', 'sd_ongkir') ?>
                            <span class="spinner is-active sdokr-hide"></span>
                        </button>
                        <span class="sdokr-get-location-msg sdokr-hide"><?php esc_html_e('All done!', 'sd_ongkir') ?></span>
                    </td>
                </tr>
            <?php endif; ?>
        </tbody>
    </table>

    <div class="sdokr-loading sdokr-hide">
        <div class="sdokr-loading__img">
            <img src="<?php echo esc_url(sdongkir_loading_image_url()) ?>" alt="<?php esc_html_e('Loading...', 'sd_ongkir')?>">
        </div>
        <div class="sdokr-loading__text"><?php esc_html_e('Loading...', 'sd_ongkir')?></div>
        <div class="sdokr-loading__text-static"><?php esc_html_e('Don\'t close or refresh window until finish!', 'sd_ongkir')?></div>
    </div>

    <?php submit_button(); ?>
</form>