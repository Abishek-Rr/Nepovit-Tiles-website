<?php
/* ThemeREX Updater support functions
------------------------------------------------------------------------------- */


// Theme init priorities:
// 9 - register other filters (for installer, etc.)
if ( ! function_exists( 'mahogany_trx_updater_theme_setup9' ) ) {
    add_action( 'after_setup_theme', 'mahogany_trx_updater_theme_setup9', 9 );
    function mahogany_trx_updater_theme_setup9() {
        if ( is_admin() ) {
            add_filter( 'mahogany_filter_tgmpa_required_plugins', 'mahogany_trx_updater_tgmpa_required_plugins', 8 );
        }
    }
}


// Filter to add in the required plugins list
if ( ! function_exists( 'mahogany_trx_updater_tgmpa_required_plugins' ) ) {
    
    function mahogany_trx_updater_tgmpa_required_plugins( $list = array() ) {
        if ( mahogany_storage_isset( 'required_plugins', 'trx_updater' ) ) {
            $path = mahogany_get_file_dir( 'plugins/trx_updater/trx_updater.zip' );
            if ( ! empty( $path ) || mahogany_get_theme_setting( 'tgmpa_upload' ) ) {
                $list[] = array(
                    'name'     => mahogany_storage_get_array( 'required_plugins', 'trx_updater' ),
                    'slug'     => 'trx_updater',
                    'version'  => '1.9.6',
                    'source'   => ! empty( $path ) ? $path : 'upload://trx_updater.zip',
                    'required' => false,
                );
            }
        }
        return $list;
    }
}


// Check if plugin installed and activated
if ( ! function_exists( 'mahogany_exists_trx_updater' ) ) {
    function mahogany_exists_trx_updater() {
        return defined( 'TRX_UPDATER_VERSION' );
    }
}
