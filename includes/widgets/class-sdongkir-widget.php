<?php

if (!class_exists('SDONGKIR_Widget')) {
    /**
     * SDONGKIR Widget class
     */
    class SDONGKIR_Widget extends WP_Widget
    {
        /**
         * Class constructor
         */
        public function __construct()
        {
            parent::__construct(
                'sdongkir_widget',
                'Ongkir',
                array(
                    'description' => esc_html__('Shipping cost and tracking widget.', 'sd_ongkir')
                )
            );
        }

        /**
         * Widget form
         *
         * @param Array $instance
         * @return void
         */
        public function form($instance)
        {
            if (isset($instance['title'])) {
                $title = $instance['title'];
            } else {
                $title = 'Ongkir & Tracking';
            }
            
            if (isset($instance['style'])) {
                $style = $instance['style'];
            } else {
                $style = 'small';
            } ?>
            <p>
                <label for="<?php echo $this->get_field_id('title') ?>"><?php esc_html_e('Title', 'sd_ongkir') ?></label>
                <input type="text" id="<?php echo $this->get_field_id('title') ?>" class="widefat" name="<?php echo $this->get_field_name('title') ?>" value="<?php echo esc_attr($title) ?>" />
            </p>
            <p>
                <label for="<?php echo $this->get_field_id('style') ?>"><?php esc_html_e('Style', 'sd_ongkir') ?></label>
                <select name="<?php echo $this->get_field_name('style') ?>" id="<?php echo $this->get_field_id('style') ?>" class="widefat">
                    <option value="small" <?php selected($style, 'small'); ?>><?php esc_html_e('Small', 'sd_ongkir'); ?></option>
                    <option value="wide" <?php selected($style, 'wide'); ?>><?php esc_html_e('Wide', 'sd_ongkir'); ?></option>
                </select>
            </p>
            <?php
        }

        /**
         * Widget html
         *
         * @param Array $args
         * @param Array $instance
         * @return void
         */
        public function widget($args, $instance)
        {
            echo $args['before_widget'];
            if (isset($instance['title']) && !empty($instance['title'])) {
                $title = apply_filters('widget_title', $instance['title']);
                echo $args['before_title'] . esc_html($title) . $args['after_title'];
            }

            $style = $instance['style'];

            include SDONGKIR_PLUGIN_PATH . 'views/frontend/ongkir.php';

            echo $args['after_widget'];
        }

        /**
         * Update wudget
         *
         * @param Array $new_instance
         * @param Array $old_instance
         * @return Array
         */
        public function update($new_instance, $old_instance)
        {
            $instance = array();
            $instance['title'] = sanitize_text_field($new_instance['title']);
            $instance['style'] = sanitize_text_field($new_instance['style']);
            return $instance;
        }
    }

    if (!function_exists('sd_ongkir_register_widget')) {
        /**
         * Register ongkir widget
         *
         * @return void
         */
        function sd_ongkir_register_widget()
        {
            register_widget('SDONGKIR_Widget');
        }
        add_action('widgets_init', 'sd_ongkir_register_widget');
    }
}
