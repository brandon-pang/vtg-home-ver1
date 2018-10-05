<template>
  <div class="container-fluid">
 	<section id="section1">
		<video autoplay loop>
			<source src="http://vertigogames.s3.amazonaws.com/static/assets/images/home-banner-new.mp4" type="video/mp4" codecs="avc1.4D401E, mp4a.40.2">
			<source src="http://vertigogames.s3.amazonaws.com/static/assets/images/home-banner-new.ogv" type="video/ogv">
		</video>
		<div class="tagline">
			<h5>VERTIGO GAMES</h5>
 			<h1>Experience the<br>Pleasant Dizziness</h1>
		</div>
 	</section>

 	<section id="section2">
 		<div class="row">
 			<div class="col-xs-12 col-md-6">
 				<div>
 					<img src="http://vertigogames.s3.amazonaws.com/static/new/assets/img/shared/papaya-logo.svg" class="img-responsive" width="300" alt="papaya logo">
 					<h5 class="desc">Our Online Platform Aiming to Provide<br/>the Best Gaming Experience</h5>
 					<router-link to="/service" tag="button" class="v-btn">see more</router-link>
 				</div>
 			</div>

 			<div class="col-xs-12 col-md-6">
 				<div>
 					<img src="http://vertigogames.s3.amazonaws.com/static/new/assets/img/shared/bs-logo.png" width="300" alt="blackshot logo">
 					<h5 class="desc">massively multiplayer FPS<br/>mercenary warfare</h5>
 					<router-link to="/games" tag="button" class="v-btn">see more</router-link>
 				</div>
 			</div>
 		</div>
 	</section>

	<section id="section3">
		<div class="container">
			<div class="row">
				<div class="col-xs-12 col-md-3">
					<h1>42+</h1>
					<h5>Countries</h5>
				</div>
				<div class="col-xs-12 col-md-3">
					<h1>12</h1>
					<h5>years</h5>
				</div>
				<div class="col-xs-12 col-md-3">
					<h1>13,000,000+</h1>
					<h5>players</h5>
				</div>
				<div class="col-xs-12 col-md-3">
					<h1>4</h1>
					<h5>offices</h5>
				</div>
			</div>
		</div>
	</section>
  </div>
</template>

<script>
	export default {
    	methods: {
      		scrollDown () {
      			console.log('clicked')
        		window.scroll({ top: 500, left: 0, behavior: 'smooth' });
      		}
    	}
  	}
</script>

<style lang="scss" scoped>
	@import '../assets/css/variables.scss';
	@import '../assets/css/global.scss';
	
	.container-fluid {
		text-align: center;
	}
	
	.row {
		margin-left:0px;
		margin-right:0px;
	}
	
	.desc { text-transform: capitalize; }

	#section1 {
		position: relative;
		line-height: 0;

		background-image: url("https://d1ebd7lpcz1ubh.cloudfront.net/static/assets/images/portal/home/pixel-gold.png");

		video {
			object-fit: cover;
			-o-object-fit: cover;
			opacity: 0.5;
			width: 100%;
			min-height: 400px;
		}
		
		.tagline {
			position: absolute;
			left: 0;
			right: 0;
			bottom: -50px;
			color: $white;

			h1 { 
				opacity: 1;
				font-family: 'Permanent Marker', cursive;
				text-shadow: 2px 2px 2px $black;
				margin-bottom: 150px;
				font-size: 6.5rem;
			}
			
			span {
				font-size: 3.5rem;
				transition: all 0.2s;
				cursor: pointer;
				&:hover, &:focus, &:active {
					color: $orange;
				}
			}
		}
	}

	#section2 {
		text-align: center;
		.row {
			> div {
				@extend .flex-default;
				align-items: flex-end;
				height: 600px;
				padding-bottom: 40px;
				background-repeat: no-repeat;
				background-size: cover;
				background-position: center center;

				h1 { 
					letter-spacing: 1px;
					margin: 15px 0;
					color: $gray;
				}

				h5 { 
					color: $silver; 
					padding-top: 20px;
					line-height:130%;
				}

				button {
					margin: 0 auto;
				}
			
				&:nth-child(1) {
					background-image: url('http://vertigogames.s3.amazonaws.com/static/new/assets/img/home/publishing-bg.jpg');
				}
				&:nth-child(2) {
					background-image: url('http://vertigogames.s3.amazonaws.com/static/new/assets/img/home/development-bg.jpg');
				}
			}
		}
	}

	#section3 {
		background: linear-gradient(to right, $orange 0%, rgba($orange, 0.7) 100%);
		color: $white;
		.row {
			padding: 40px 0;

			h1 {
				font-weight: bold;
				font-size: 3.5rem; 
				margin-top: 30px;
			}
			
			h5 {
				display: inline-block;
				margin-bottom: 20px;
			}
		}
	}

	@media (min-width: 992px) {
		#section3 {
			.row {
				display: flex;
				justify-content: center;
				align-items: center;
				height: 200px;
				
				h1 {
					font-weight: bold;
					display: inline-block;
					padding: 0 15px 5px;
					margin-bottom: 15px;
					border-bottom: 1px solid $white;
				}

				h5 {
					display: block;	
				}
			}
		}
	}

	@media (max-width: 900px) {
		#section1 {
			video{
				height:500px;
			}
		}
	}
</style>
