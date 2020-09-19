<?php

if (!defined('ABSPATH')) {
    exit;
}

/**
 * Database interaction class
 */
if (!class_exists('SDONGKIR_Db')) {
    class SDONGKIR_Db
    {
        /**
         * Get table names
         *
         * @return Array
         */
        public static function tables()
        {
            global $wpdb;

            return [
                'province' => $wpdb->prefix . 'sdongkir_provinces',
                'city' => $wpdb->prefix . 'sdongkir_cities',
                'subdistrict' => $wpdb->prefix . 'sdongkir_subdistricts',
                'intl_origin' => $wpdb->prefix . 'sdongkir_intl_origin',
                'intl_destination' => $wpdb->prefix . 'sdongkir_intl_destination',
            ];
        }

        /**
         * Insert many record into database
         *
         * @param String $tableName
         * @param array $dataArray
         * @param array $columns
         * @return Int
         */
        public function insert_many(String $tableName, array $rows)
        {
            global $wpdb;

            // Extract column list from first row of data
            $columns = array_keys($rows[0]);
            asort($columns);
            $columnList = '`' . implode('`, `', $columns) . '`';

            // Start building SQL, initialise data and placeholder arrays
            $sql = "INSERT INTO `$tableName` ($columnList) VALUES\n";
            $placeholders = array();
            $data = array();

            foreach ($rows  as $row) {
                ksort($row);
                $rowPlaceholders = array();
                foreach ($row as $key => $value) {
                    $data[] = $value;
                    $rowPlaceholders[] = is_numeric($value) ? '%d' : '%s';
                }

                $placeholders[] = '(' . implode(', ', $rowPlaceholders) . ')';
            }

            // Stitch all rows together
            $sql .= implode(",\n", $placeholders);

            // Run the query.  Returns number of affected rows.
            $result =  $wpdb->query($wpdb->prepare($sql, $data));

            if ($result) {
                return $result;
            } else {
                throw new \Exception("Error saving many records into database", 400);
            }
        }

        /**
         * Count stored provinces
         *
         * @return Int
         */
        public function count_stored_provinces()
        {
            global $wpdb;
            $tableName = $this->tables()['province'];
            return $wpdb->get_var($wpdb->prepare("SELECT COUNT(*) FROM $tableName"));
        }

        /**
         * Count stored city
         *
         * @return Int
         */
        public function count_stored_cities()
        {
            global $wpdb;
            $tableName = $this->tables()['city'];
            return $wpdb->get_var($wpdb->prepare("SELECT COUNT(*) FROM $tableName"));
        }

        /**
         * Count stored subdistricts
         *
         * @return Int
         */
        public function count_stored_subdistricts()
        {
            global $wpdb;
            $tableName = $this->tables()['subdistrict'];
            return $wpdb->get_var($wpdb->prepare("SELECT COUNT(*) FROM $tableName"));
        }

        /**
         * Count stored intl_origin
         *
         * @return Int
         */
        public function count_stored_intl_origins()
        {
            global $wpdb;
            $tableName = $this->tables()['intl_origin'];
            return $wpdb->get_var($wpdb->prepare("SELECT COUNT(*) FROM $tableName"));
        }

        /**
         * Count stored intl_destination
         *
         * @return Int
         */
        public function count_stored_intl_destinations()
        {
            global $wpdb;
            $tableName = $this->tables()['intl_destination'];
            return $wpdb->get_var($wpdb->prepare("SELECT COUNT(*) FROM $tableName"));
        }

        public function get_locations()
        {
            global $wpdb;
            $accountType = sdongkir_account_type();

            $transient = get_transient('sdongkir_locations');
            $results = [];
            if ($transient && $transient['account_type'] == $accountType) {
                $results = $transient['data'];
            } elseif (!$transient || $transient['account_type'] != $accountType) {
                if ($accountType == 'pro') {
                    $tableName = $this->tables()['subdistrict'];
                    $subdistricts = $wpdb->get_results(
                        $wpdb->prepare("SELECT * FROM $tableName")
                    );

                    foreach ($subdistricts as $subdistrict) {
                        $results[] = [
                            'id' => $subdistrict->subdistrict_id,
                            'name' => "$subdistrict->name - $subdistrict->city_type $subdistrict->city_name"
                        ];
                    }
                } else {
                    $tableName = $this->tables()['city'];
                    $cities = $wpdb->get_results(
                        $wpdb->prepare("SELECT * FROM $tableName")
                    );

                    foreach ($cities as $city) {
                        $results[] = [
                            'id' => $city->city_id,
                            'name' => "$city->type $city->name"
                        ];
                    }
                }

                // Set cache transient data for 2 days
                set_transient(
                    'sdongkir_locations',
                    [
                        'account_type' => $accountType,
                        'data' => $results
                    ],
                    172800
                );
            }

            return $results;
        }
    }

    $SDONGKIR_Db = new SDONGKIR_Db();
}
