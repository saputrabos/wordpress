<?php
if ( ! defined( 'ABSPATH' ) ) {
	exit;
}

class Annur_Hero_Widget extends WP_Widget {
	public function __construct() {
		parent::__construct(
			'annur_hero_widget',
			escape_html__( 'Annur Hero Widget', 'annur' ),
			array( 'description' => __( 'Hero section widget for the Annur child theme.', 'annur' ) )
		);
	}

	public function widget( $args, $instance ) {
		$title       = ! empty( $instance['title'] ) ? $instance['title'] : 'Pondok Pesantren Annur';
		$description = ! empty( $instance['description'] ) ? $instance['description'] : 'Membangun generasi unggul dengan ilmu, akhlak, dan semangat berbagi.';
		$button_text = ! empty( $instance['button_text'] ) ? $instance['button_text'] : 'Daftar Sekarang';
		$button_url  = ! empty( $instance['button_url'] ) ? $instance['button_url'] : '#';
		$image_url   = ! empty( $instance['image_url'] ) ? $instance['image_url'] : 'https://images.unsplash.com/photo-1501004318641-b39e6451bec6?auto=format&fit=crop&w=1600&q=80';
		$style       = "background-image: linear-gradient(90deg, rgba(17, 24, 39, 0.72), rgba(17, 24, 39, 0.24)), url('" . esc_url( $image_url ) . "');";

		echo $args['before_widget'];
		?>
		<section class="annur-hero-widget" style="<?php echo esc_attr( $style ); ?>">
			<div class="annur-hero-widget__content">
				<h1 class="annur-hero-widget__heading"><?php echo esc_html( $title ); ?></h1>
				<p class="annur-hero-widget__subheading"><?php echo esc_html( $description ); ?></p>
				<a href="<?php echo esc_url( $button_url ); ?>" class="annur-hero-widget__button"><?php echo esc_html( $button_text ); ?></a>
			</div>

			<div class="annur-hero-widget__visual">
				<img class="annur-hero-widget__image" src="<?php echo esc_url( $image_url ); ?>" alt="<?php echo esc_attr( $title ); ?>" />
				<div class="annur-hero-widget__awards">
					<div class="annur-hero-widget__award">
						<strong class="annur-hero-widget__award-title">Prestasi</strong>
						<p class="annur-hero-widget__award-text">Berprestasi dalam akademik dan karakter islami.</p>
					</div>
					<div class="annur-hero-widget__award">
						<strong class="annur-hero-widget__award-title">Kurikulum</strong>
						<p class="annur-hero-widget__award-text">Integrasi ilmu umum, agama, dan pengembangan potensi santri.</p>
					</div>
					<div class="annur-hero-widget__award">
						<strong class="annur-hero-widget__award-title">Lingkungan</strong>
						<p class="annur-hero-widget__award-text">Suasana belajar yang aman, nyaman, dan penuh inspirasi.</p>
					</div>
				</div>
			</div>
		</section>
		<?php
		echo $args['after_widget'];
	}

	public function update( $new_instance, $old_instance ) {
		$instance = array();
		$instance['title']       = sanitize_text_field( $new_instance['title'] );
		$instance['description'] = sanitize_textarea_field( $new_instance['description'] );
		$instance['button_text'] = sanitize_text_field( $new_instance['button_text'] );
		$instance['button_url']  = esc_url_raw( $new_instance['button_url'] );
		$instance['image_url']   = esc_url_raw( $new_instance['image_url'] );
		return $instance;
	}

	public function form( $instance ) {
		$title       = ! empty( $instance['title'] ) ? $instance['title'] : 'Pondok Pesantren Annur';
		$description = ! empty( $instance['description'] ) ? $instance['description'] : 'Membangun generasi unggul dengan ilmu, akhlak, dan semangat berbagi.';
		$button_text = ! empty( $instance['button_text'] ) ? $instance['button_text'] : 'Daftar Sekarang';
		$button_url  = ! empty( $instance['button_url'] ) ? $instance['button_url'] : '#';
		$image_url   = ! empty( $instance['image_url'] ) ? $instance['image_url'] : 'https://images.unsplash.com/photo-1501004318641-b39e6451bec6?auto=format&fit=crop&w=1600&q=80';
		?>
		<p>
			<label for="<?php echo esc_attr( $this->get_field_id( 'title' ) ); ?>"><?php esc_html_e( 'Judul:', 'annur' ); ?></label>
			<input class="widefat" id="<?php echo esc_attr( $this->get_field_id( 'title' ) ); ?>" name="<?php echo esc_attr( $this->get_field_name( 'title' ) ); ?>" type="text" value="<?php echo esc_attr( $title ); ?>" />
		</p>
		<p>
			<label for="<?php echo esc_attr( $this->get_field_id( 'description' ) ); ?>"><?php esc_html_e( 'Deskripsi:', 'annur' ); ?></label>
			<textarea class="widefat" rows="4" id="<?php echo esc_attr( $this->get_field_id( 'description' ) ); ?>" name="<?php echo esc_attr( $this->get_field_name( 'description' ) ); ?>"><?php echo esc_textarea( $description ); ?></textarea>
		</p>
		<p>
			<label for="<?php echo esc_attr( $this->get_field_id( 'button_text' ) ); ?>"><?php esc_html_e( 'Teks tombol:', 'annur' ); ?></label>
			<input class="widefat" id="<?php echo esc_attr( $this->get_field_id( 'button_text' ) ); ?>" name="<?php echo esc_attr( $this->get_field_name( 'button_text' ) ); ?>" type="text" value="<?php echo esc_attr( $button_text ); ?>" />
		</p>
		<p>
			<label for="<?php echo esc_attr( $this->get_field_id( 'button_url' ) ); ?>"><?php esc_html_e( 'URL tombol:', 'annur' ); ?></label>
			<input class="widefat" id="<?php echo esc_attr( $this->get_field_id( 'button_url' ) ); ?>" name="<?php echo esc_attr( $this->get_field_name( 'button_url' ) ); ?>" type="url" value="<?php echo esc_attr( $button_url ); ?>" />
		</p>
		<p>
			<label for="<?php echo esc_attr( $this->get_field_id( 'image_url' ) ); ?>"><?php esc_html_e( 'URL gambar:', 'annur' ); ?></label>
			<input class="widefat" id="<?php echo esc_attr( $this->get_field_id( 'image_url' ) ); ?>" name="<?php echo esc_attr( $this->get_field_name( 'image_url' ) ); ?>" type="url" value="<?php echo esc_attr( $image_url ); ?>" />
		</p>
		<?php
	}
}
