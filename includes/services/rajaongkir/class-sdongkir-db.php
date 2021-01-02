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
            return $wpdb->get_var("SELECT COUNT(*) FROM $tableName");
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
            return $wpdb->get_var("SELECT COUNT(*) FROM $tableName");
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
            return $wpdb->get_var("SELECT COUNT(*) FROM $tableName");
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
            return $wpdb->get_var("SELECT COUNT(*) FROM $tableName");
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
            return $wpdb->get_var("SELECT COUNT(*) FROM $tableName");
        }

        /**
         * Search for location
         *
         * @param String $keyword
         * @return Array
         */
        public function search_location($keyword)
        {
            global $wpdb;
            $accountType = sdongkir_account_type();
            $results = array();
            if ($accountType == 'pro') {
                $tableName = $this->tables()['subdistrict'];
                $subdistricts = $wpdb->get_results(
                    $wpdb->prepare("SELECT * FROM $tableName WHERE name LIKE %s OR city_name LIKE %s", "%$keyword%", "%$keyword%")
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
                    $wpdb->prepare("SELECT * FROM $tableName WHERE name LIKE  %s", "%$keyword%")
                );

                foreach ($cities as $city) {
                    $results[] = [
                        'id' => $city->city_id,
                        'name' => "$city->type $city->name"
                    ];
                }
            }

            return $results;
        }

        /**
         * Get all provinces
         *
         * @return Array
         */
        public static function get_provinces()
        {
            global $wpdb;
            $tableName = self::tables()['province'];
            $provinces = $wpdb->get_results("SELECT * FROM $tableName");

            return $provinces;
        }

        /**
         * Get province by id
         *
         * @param Int $id
         * @return Object
         */
        public static function get_province_by_id($id)
        {
            global $wpdb;
            $tableName = self::tables()['province'];
            $province = $wpdb->get_row(
                $wpdb->prepare("SELECT * FROM $tableName WHERE id = %d", $id)
            );

            return $province;
        }

        /**
         * Get province by name
         *
         * @param String $provinceName
         * @return Object
         */
        public static function get_province_by_name($provinceName)
        {
            global $wpdb;
            $tableName = self::tables()['province'];
            $province = $wpdb->get_row(
                $wpdb->prepare("SELECT * FROM $tableName WHERE name = %s", $provinceName)
            );

            return $province;
        }

        /**
         * Get all cities
         *
         * @return Array
         */
        public static function get_all_cities()
        {
            global $wpdb;
            $tableName = self::tables()['city'];
            $cities = $wpdb->get_results("SELECT * FROM $tableName");

            return $cities;
        }

        /**
         * Get cities by province id
         *
         * @param Int $provinceId
         * @return Array
         */
        public static function get_cities_by_province_id($provinceId)
        {
            global $wpdb;
            $tableName = self::tables()['city'];
            $cities = $wpdb->get_results(
                $wpdb->prepare("SELECT * FROM $tableName WHERE province_id = %d", $provinceId)
            );

            return $cities;
        }

        /**
         * Get city by id
         *
         * @param Int $id
         * @return Object
         */
        public static function get_city_by_id($id)
        {
            global $wpdb;
            $tableName = self::tables()['city'];
            $city = $wpdb->get_row(
                $wpdb->prepare("SELECT * FROM $tableName WHERE id = %d", $id)
            );

            return $city;
        }

        /**
         * Get city by full name
         *
         * @param String $fullName
         * @return Object
         */
        public static function get_city_by_full_name($fullName)
        {
            $nameArr = explode(' ', $fullName);
            $type = $nameArr[0];
            unset($nameArr[0]);
            $name = implode(' ', $nameArr);

            global $wpdb;
            $tableName = self::tables()['city'];
            $city = $wpdb->get_row(
                $wpdb->prepare("SELECT * FROM $tableName WHERE type = %s AND name = %s", $type, $name)
            );

            return $city;
        }

        /**
         * Get all subdistricts
         *
         * @return Array
         */
        public static function get_all_subdistricts()
        {
            global $wpdb;
            $tableName = self::tables()['subdistrict'];
            $subdistricts = $wpdb->get_results("SELECT * FROM $tableName");

            return $subdistricts;
        }

        /**
         * Get subdistricts by city ID
         *
         * @param Int $cityId
         * @return Array
         */
        public static function get_subdistricts_by_city_id($cityId)
        {
            global $wpdb;
            $tableName = self::tables()['subdistrict'];
            $subdistricts = $wpdb->get_results(
                $wpdb->prepare("SELECT * FROM $tableName WHERE city_id = %d", $cityId)
            );

            return $subdistricts;
        }

        /**
         * Get subdistrict by id
         *
         * @param Int $id
         * @return Object
         */
        public static function get_subdistrict_by_id($id)
        {
            global $wpdb;
            $tableName = self::tables()['subdistrict'];
            $subdistrict = $wpdb->get_row(
                $wpdb->prepare("SELECT * FROM $tableName WHERE id = %d", $id)
            );

            return $subdistrict;
        }

        /**
         * Get subdistrict by name
         *
         * @param String $name
         * @return Object
         */
        public static function get_subdistrict_by_name($name)
        {
            global $wpdb;
            $tableName = self::tables()['subdistrict'];
            $subdistrict = $wpdb->get_row(
                $wpdb->prepare("SELECT * FROM $tableName WHERE name = %s", $name)
            );

            return $subdistrict;
        }
    }

    $SDONGKIR_Db = new SDONGKIR_Db();
}
