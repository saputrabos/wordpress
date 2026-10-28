<?php
if ( ! defined( 'ABSPATH' ) ) {
	exit;
}

require_once __DIR__ . '/widgets/class-annur-hero-widget.php';

function annur_child_theme_setup() {
	add_theme_support( 'title-tag' );
	add_theme_support( 'post-thumbnails' );
	add_theme_support( 'custom-logo' );
	add_theme_support(
		'html5',
		array(
			'search-form',
			'comment-form',
			'comment-list',
			'gallery',
			'caption',
			'style',
			'script',
		)
	);
}
add_action( 'after_setup_theme', 'annur_child_theme_setup' );

function annur_child_theme_enqueue_assets() {
	wp_enqueue_style( 'parent-style', get_template_directory_uri() . '/style.css' );
	wp_enqueue_style( 'annur-style', get_stylesheet_directory_uri() . '/style.css', array( 'parent-style' ), wp_get_theme()->get( 'Version' ) );
}
add_action( 'wp_enqueue_scripts', 'annur_child_theme_enqueue_assets' );

function annur_register_widgets() {
	register_sidebar(
		array(
			'name'          => __( 'Annur Hero', 'annur' ),
			'id'            => 'annur-hero',
			'before_widget' => '<section id="%1$s" class="widget annur-widget %2$s">',
			'after_widget'  => '</section>',
			'before_title'  => '<h2 class="widget-title">',
			'after_title'   => '</h2>',
		)
	);

	register_widget( 'Annur_Hero_Widget' );
}
add_action( 'widgets_init', 'annur_register_widgets' );
