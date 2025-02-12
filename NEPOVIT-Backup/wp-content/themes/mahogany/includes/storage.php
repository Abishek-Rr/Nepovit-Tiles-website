<?php
/**
 * Theme storage manipulations
 *
 * @package WordPress
 * @subpackage MAHOGANY
 * @since MAHOGANY 1.0
 */

// Disable direct call
if ( ! defined( 'ABSPATH' ) ) { exit; }

// Get theme variable
if (!function_exists('mahogany_storage_get')) {
	function mahogany_storage_get($var_name, $default='') {
		global $MAHOGANY_STORAGE;
		return isset($MAHOGANY_STORAGE[$var_name]) ? $MAHOGANY_STORAGE[$var_name] : $default;
	}
}

// Set theme variable
if (!function_exists('mahogany_storage_set')) {
	function mahogany_storage_set($var_name, $value) {
		global $MAHOGANY_STORAGE;
		$MAHOGANY_STORAGE[$var_name] = $value;
	}
}

// Check if theme variable is empty
if (!function_exists('mahogany_storage_empty')) {
	function mahogany_storage_empty($var_name, $key='', $key2='') {
		global $MAHOGANY_STORAGE;
		if (!empty($key) && !empty($key2))
			return empty($MAHOGANY_STORAGE[$var_name][$key][$key2]);
		else if (!empty($key))
			return empty($MAHOGANY_STORAGE[$var_name][$key]);
		else
			return empty($MAHOGANY_STORAGE[$var_name]);
	}
}

// Check if theme variable is set
if (!function_exists('mahogany_storage_isset')) {
	function mahogany_storage_isset($var_name, $key='', $key2='') {
		global $MAHOGANY_STORAGE;
		if (!empty($key) && !empty($key2))
			return isset($MAHOGANY_STORAGE[$var_name][$key][$key2]);
		else if (!empty($key))
			return isset($MAHOGANY_STORAGE[$var_name][$key]);
		else
			return isset($MAHOGANY_STORAGE[$var_name]);
	}
}

// Inc/Dec theme variable with specified value
if (!function_exists('mahogany_storage_inc')) {
	function mahogany_storage_inc($var_name, $value=1) {
		global $MAHOGANY_STORAGE;
		if (empty($MAHOGANY_STORAGE[$var_name])) $MAHOGANY_STORAGE[$var_name] = 0;
		$MAHOGANY_STORAGE[$var_name] += $value;
	}
}

// Concatenate theme variable with specified value
if (!function_exists('mahogany_storage_concat')) {
	function mahogany_storage_concat($var_name, $value) {
		global $MAHOGANY_STORAGE;
		if (empty($MAHOGANY_STORAGE[$var_name])) $MAHOGANY_STORAGE[$var_name] = '';
		$MAHOGANY_STORAGE[$var_name] .= $value;
	}
}

// Get array (one or two dim) element
if (!function_exists('mahogany_storage_get_array')) {
	function mahogany_storage_get_array($var_name, $key, $key2='', $default='') {
		global $MAHOGANY_STORAGE;
		if (empty($key2))
			return !empty($var_name) && !empty($key) && isset($MAHOGANY_STORAGE[$var_name][$key]) ? $MAHOGANY_STORAGE[$var_name][$key] : $default;
		else
			return !empty($var_name) && !empty($key) && isset($MAHOGANY_STORAGE[$var_name][$key][$key2]) ? $MAHOGANY_STORAGE[$var_name][$key][$key2] : $default;
	}
}

// Set array element
if (!function_exists('mahogany_storage_set_array')) {
	function mahogany_storage_set_array($var_name, $key, $value) {
		global $MAHOGANY_STORAGE;
		if (!isset($MAHOGANY_STORAGE[$var_name])) $MAHOGANY_STORAGE[$var_name] = array();
		if ($key==='')
			$MAHOGANY_STORAGE[$var_name][] = $value;
		else
			$MAHOGANY_STORAGE[$var_name][$key] = $value;
	}
}

// Set two-dim array element
if (!function_exists('mahogany_storage_set_array2')) {
	function mahogany_storage_set_array2($var_name, $key, $key2, $value) {
		global $MAHOGANY_STORAGE;
		if (!isset($MAHOGANY_STORAGE[$var_name])) $MAHOGANY_STORAGE[$var_name] = array();
		if (!isset($MAHOGANY_STORAGE[$var_name][$key])) $MAHOGANY_STORAGE[$var_name][$key] = array();
		if ($key2==='')
			$MAHOGANY_STORAGE[$var_name][$key][] = $value;
		else
			$MAHOGANY_STORAGE[$var_name][$key][$key2] = $value;
	}
}

// Merge array elements
if (!function_exists('mahogany_storage_merge_array')) {
	function mahogany_storage_merge_array($var_name, $key, $value) {
		global $MAHOGANY_STORAGE;
		if (!isset($MAHOGANY_STORAGE[$var_name])) $MAHOGANY_STORAGE[$var_name] = array();
		if ($key==='')
			$MAHOGANY_STORAGE[$var_name] = array_merge($MAHOGANY_STORAGE[$var_name], $value);
		else
			$MAHOGANY_STORAGE[$var_name][$key] = array_merge($MAHOGANY_STORAGE[$var_name][$key], $value);
	}
}

// Add array element after the key
if (!function_exists('mahogany_storage_set_array_after')) {
	function mahogany_storage_set_array_after($var_name, $after, $key, $value='') {
		global $MAHOGANY_STORAGE;
		if (!isset($MAHOGANY_STORAGE[$var_name])) $MAHOGANY_STORAGE[$var_name] = array();
		if (is_array($key))
			mahogany_array_insert_after($MAHOGANY_STORAGE[$var_name], $after, $key);
		else
			mahogany_array_insert_after($MAHOGANY_STORAGE[$var_name], $after, array($key=>$value));
	}
}

// Add array element before the key
if (!function_exists('mahogany_storage_set_array_before')) {
	function mahogany_storage_set_array_before($var_name, $before, $key, $value='') {
		global $MAHOGANY_STORAGE;
		if (!isset($MAHOGANY_STORAGE[$var_name])) $MAHOGANY_STORAGE[$var_name] = array();
		if (is_array($key))
			mahogany_array_insert_before($MAHOGANY_STORAGE[$var_name], $before, $key);
		else
			mahogany_array_insert_before($MAHOGANY_STORAGE[$var_name], $before, array($key=>$value));
	}
}

// Push element into array
if (!function_exists('mahogany_storage_push_array')) {
	function mahogany_storage_push_array($var_name, $key, $value) {
		global $MAHOGANY_STORAGE;
		if (!isset($MAHOGANY_STORAGE[$var_name])) $MAHOGANY_STORAGE[$var_name] = array();
		if ($key==='')
			array_push($MAHOGANY_STORAGE[$var_name], $value);
		else {
			if (!isset($MAHOGANY_STORAGE[$var_name][$key])) $MAHOGANY_STORAGE[$var_name][$key] = array();
			array_push($MAHOGANY_STORAGE[$var_name][$key], $value);
		}
	}
}

// Pop element from array
if (!function_exists('mahogany_storage_pop_array')) {
	function mahogany_storage_pop_array($var_name, $key='', $defa='') {
		global $MAHOGANY_STORAGE;
		$rez = $defa;
		if ($key==='') {
			if (isset($MAHOGANY_STORAGE[$var_name]) && is_array($MAHOGANY_STORAGE[$var_name]) && count($MAHOGANY_STORAGE[$var_name]) > 0) 
				$rez = array_pop($MAHOGANY_STORAGE[$var_name]);
		} else {
			if (isset($MAHOGANY_STORAGE[$var_name][$key]) && is_array($MAHOGANY_STORAGE[$var_name][$key]) && count($MAHOGANY_STORAGE[$var_name][$key]) > 0) 
				$rez = array_pop($MAHOGANY_STORAGE[$var_name][$key]);
		}
		return $rez;
	}
}

// Inc/Dec array element with specified value
if (!function_exists('mahogany_storage_inc_array')) {
	function mahogany_storage_inc_array($var_name, $key, $value=1) {
		global $MAHOGANY_STORAGE;
		if (!isset($MAHOGANY_STORAGE[$var_name])) $MAHOGANY_STORAGE[$var_name] = array();
		if (empty($MAHOGANY_STORAGE[$var_name][$key])) $MAHOGANY_STORAGE[$var_name][$key] = 0;
		$MAHOGANY_STORAGE[$var_name][$key] += $value;
	}
}

// Concatenate array element with specified value
if (!function_exists('mahogany_storage_concat_array')) {
	function mahogany_storage_concat_array($var_name, $key, $value) {
		global $MAHOGANY_STORAGE;
		if (!isset($MAHOGANY_STORAGE[$var_name])) $MAHOGANY_STORAGE[$var_name] = array();
		if (empty($MAHOGANY_STORAGE[$var_name][$key])) $MAHOGANY_STORAGE[$var_name][$key] = '';
		$MAHOGANY_STORAGE[$var_name][$key] .= $value;
	}
}

// Call object's method
if (!function_exists('mahogany_storage_call_obj_method')) {
	function mahogany_storage_call_obj_method($var_name, $method, $param=null) {
		global $MAHOGANY_STORAGE;
		if ($param===null)
			return !empty($var_name) && !empty($method) && isset($MAHOGANY_STORAGE[$var_name]) ? $MAHOGANY_STORAGE[$var_name]->$method(): '';
		else
			return !empty($var_name) && !empty($method) && isset($MAHOGANY_STORAGE[$var_name]) ? $MAHOGANY_STORAGE[$var_name]->$method($param): '';
	}
}

// Get object's property
if (!function_exists('mahogany_storage_get_obj_property')) {
	function mahogany_storage_get_obj_property($var_name, $prop, $default='') {
		global $MAHOGANY_STORAGE;
		return !empty($var_name) && !empty($prop) && isset($MAHOGANY_STORAGE[$var_name]->$prop) ? $MAHOGANY_STORAGE[$var_name]->$prop : $default;
	}
}
?>