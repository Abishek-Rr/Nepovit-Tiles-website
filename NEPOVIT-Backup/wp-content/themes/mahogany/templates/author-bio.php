<?php
/**
 * The template to display the Author bio
 *
 * @package WordPress
 * @subpackage MAHOGANY
 * @since MAHOGANY 1.0
 */
?>

<div class="author_info scheme_default author vcard" itemprop="author" itemscope itemtype="//schema.org/Person">

	<div class="author_avatar" itemprop="image">
		<?php 
		$mahogany_mult = mahogany_get_retina_multiplier();
		echo get_avatar( get_the_author_meta( 'user_email' ), 120*$mahogany_mult ); 
		?>
	</div><!-- .author_avatar -->

	<div class="author_description">
		<h5 class="author_title" itemprop="name"><span class="author_title_about"><?php
			// Translators: Add the author's name in the <span> 
			echo wp_kses_data(sprintf(__('About Author', 'mahogany')));
		?></span><span class="author_title_name"><?php
			// Translators: Add the author's name in the <span> 
			echo wp_kses_data(sprintf(__('%s', 'mahogany'), '<span class="fn">'.get_the_author().'</span>'));
		?></span></h5>

		<div class="author_bio" itemprop="description">
			<?php echo wp_kses(wpautop(get_the_author_meta( 'description' )), 'mahogany_kses_content'); ?>
			<?php do_action('mahogany_action_user_meta'); ?>
		</div><!-- .author_bio -->

	</div><!-- .author_description -->

</div><!-- .author_info -->
