<?php
/**
 * Template for the Annur front page.
 */
get_header();

if ( is_active_sidebar( 'annur-hero' ) ) {
	dynamic_sidebar( 'annur-hero' );
}

get_footer();
