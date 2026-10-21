<?php
/**
 * Plugin Name: NUR Builder
 * Description: Lightweight page builder by NUR.
 * Version: 0.3.0
 * Author: Fadli Saputra
 */

if ( ! defined( 'ABSPATH' ) ) {
	exit;
}

/**
 * Register NUR blocks.
 */
function nur_builder_register_blocks() {

	register_block_type(
		__DIR__ . '/blocks/test'
	);

}

add_action( 'init', 'nur_builder_register_blocks' );