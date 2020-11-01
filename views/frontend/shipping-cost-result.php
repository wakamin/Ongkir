<div class="sdokr-sh-res">
    <div class="sdokr-sh-res__filter">
        <ul class="sdokr-list-inline">
            <?php foreach (sdokr_available_couriers() as $code => $courier): ?>
                <li>
                    <label for="sdokr_shipping_cost_courier_<?php echo esc_attr($code) ?>">
                        <input type="checkbox" id="sdokr_shipping_cost_courier_<?php echo esc_attr($code) ?>" value="<?php echo esc_attr($code) ?>">
                        <?php echo esc_attr($courier['name']) ?>
                    </label>
                </li>
            <?php endforeach; ?>
        </ul>
    </div>
</div>