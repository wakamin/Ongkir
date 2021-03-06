<?php

if (!defined('ABSPATH')) {
    exit;
}

$defaultTab = 'main_config';
$tab = isset($_GET['tab']) ? $_GET['tab'] : $defaultTab;

?>


<div class="wrap">
    <h2><?php esc_html_e('Ongkir Configuration', 'sd_ongkir') ?></h2>
    <hr />

    <h2 class="nav-tab-wrapper">
        <a class="nav-tab<?php echo $tab == 'main_config' ? ' nav-tab-active' : '' ?>" href="?page=ongkir&tab=main_config"><?php esc_html_e('Main Configuration', 'sd_ongkir') ?></a>
        <a class="nav-tab<?php echo $tab == 'shipping_cost' ? ' nav-tab-active' : '' ?>" href="?page=ongkir&tab=shipping_cost"><?php esc_html_e('Shipping Cost', 'sd_ongkir') ?></a>
        <?php if (sdongkir_account_type() != 'starter'): ?>
            <a class="nav-tab<?php echo $tab == 'tracking' ? ' nav-tab-active' : '' ?>" href="?page=ongkir&tab=tracking"><?php esc_html_e('Tracking', 'sd_ongkir') ?></a>
        <?php endif; ?>
    </h2>

    <?php include_once SDONGKIR_PLUGIN_PATH . "views/admin/setting-page/$tab.php"; ?>
</div>