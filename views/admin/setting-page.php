<?php

if (!defined('ABSPATH')) {
    exit;
}

?>


<div class="wrap">
    <h2><?php esc_html_e('Ongkir Configuration', 'sd_ongkir') ?></h2>
    <hr />

    <h2 class="nav-tab-wrapper">
        <a class="nav-tab<?php echo $tab == 'main_config' ? ' nav-tab-active' : '' ?>" href="?page=ongkir&tab=main_config"><?php esc_html_e('Main Configuration', 'sd_ongkir') ?></a>
    </h2>

    <?php include_once SDONGKIR_PLUGIN_PATH . "views/admin/setting-page/$tab.php"; ?>
</div>