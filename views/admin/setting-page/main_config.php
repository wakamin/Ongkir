<?php

if (!defined('ABSPATH')) {
    exit;
}

$apiKey = SDONGKIR_Rajaongkir::api_key();
$accountType = SDONGKIR_Rajaongkir::account_type();

?>

<form method="post" action="options.php">
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
                        <option value="starter" <?php selected($accountType, 'starter') ?>>Starter</option>
                        <option value="basic" <?php selected($accountType, 'basic') ?>>Basic</option>
                        <option value="pro" <?php selected($accountType, 'pro') ?>>Pro</option>
                    </select>
                </td>
            </tr>
        </tbody>
    </table>

    <?php submit_button(); ?>
</form>