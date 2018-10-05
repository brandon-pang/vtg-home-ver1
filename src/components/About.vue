<template>
	<div class="container-fluid">
		<section id="section1">
			<div class="container">
	 			<h5>about</h5>
	 			<h1>Bringing the Pleasant Sensation<br>of Vertigo to Gaming</h1>
	 		</div>
	 	</section>

		<section id="section2">
			<div class="container">
				<img src="http://vertigogames.s3.amazonaws.com/static/new/assets/img/shared/vertigo-logo.svg" alt="logo" class="img-responsive">
				<h3>"Have you ever experienced lightheadedness from the rush of riding a rollercoaster?"</h3>
				<p>What you felt is called vertigo. Vertigo Games is a game developer and publisher based in Seoul, Korea and we aim to bring such pleasant feeling of dizziness to gaming.</p>
			</div>
		</section>

		<section id="section3">
			<div class="container">
				<div class="row">
					<div class="col-xs-12 col-md-6">
						<img src="http://vertigogames.s3.amazonaws.com/static/new/assets/img/about/development.png" alt="game development" class="img-responsive">
					</div>
					<div class="col-xs-12 col-md-6">
						<h3>Game Development</h3>
						<p>Beginning as a small start-up, we set our main focus on quality game development. Driven by our love of gaming, we create unique experiences that can be enjoyed by a wide spectrum of gamers, from the casual to the hardcore. Since our company’s founding in 2006, we have developed three games: KwonHo, BlackShot, and War of Zombie.</p>
					</div>
				</div>
			</div>
		</section>

		<section id="section4">
			<div class="container">
				<div class="row">
					<div class="col-xs-12 col-md-6">
						<img src="http://vertigogames.s3.amazonaws.com/static/new/assets/img/about/publishing.png" alt="game publishing" class="img-responsive">
					</div>
					<div class="col-xs-12 col-md-6">
						<h3>Game Publishing</h3>
						<p>In 2015, in order to have full control over our game service and ensure player satisfaction, Vertigo Games stepped into game publishing with the opening of our Vancouver, Canada office. Our publishing platform, Papaya Play, launched in 2016, is currently home to BlackShot and Dekaron, and is continuing to expand into both the web and mobile markets.</p>
 
						<p>As a publisher, Vertigo Games strives to create new user experiences and explore untapped markets. Instead of blindly following hot trends that quickly fade away, we put users first, consistently reaching out to our gaming communities and keeping communication open.</p>
					</div>
				</div>
			</div>
		</section>

		<section id="section5">
			<div class="container">
				<h3>our story</h3>
				<hr class="v-hr">
				<div class="carousel-wrapper">
					<div class="timeline hidden-xs hidden-sm"></div>
					<swiper :options="swiperOptionThumbs" class="gallery-thumbs hidden-xs hidden-sm" ref="swiperThumbs">
						<swiper-slide>
							<h5>2006</h5>
							<span class="dots"></span>
						</swiper-slide>
						<swiper-slide>
							<h5>2007</h5>
							<span class="dots"></span></swiper-slide>
						<swiper-slide>
							<h5>2008</h5>
							<span class="dots"></span></swiper-slide>
						<swiper-slide>
							<h5>2009</h5>
							<span class="dots"></span></swiper-slide>
						<swiper-slide>
							<h5>2010</h5>
							<span class="dots"></span></swiper-slide>
						<swiper-slide>
							<h5>2011</h5>
							<span class="dots"></span></swiper-slide>
						<swiper-slide>
							<h5>2012</h5>
							<span class="dots"></span></swiper-slide>
						<swiper-slide>
							<h5>2013</h5>
							<span class="dots"></span></swiper-slide>
						<swiper-slide>
							<h5>2014</h5>
							<span class="dots"></span></swiper-slide>
						<swiper-slide>
							<h5>2015</h5>
							<span class="dots"></span></swiper-slide>
						<swiper-slide>
							<h5>2016</h5>
							<span class="dots"></span></swiper-slide>
						<swiper-slide>
							<h5>2017</h5>
							<span class="dots"></span></swiper-slide>
					</swiper>

					<swiper :options="swiperOptionTop" class="gallery-top" ref="swiperTop">
			        	<swiper-slide>
			        		<div class="row">
			        			<div class="col-xs-12 col-md-6 col-md-push-6">
				        			<img src="http://vertigogames.s3.amazonaws.com/static/new/assets/img/about/timeline/2006.png" alt="2006">
				        		</div>
				        		<div class="col-xs-12 col-md-6 col-md-pull-6">
			        				<h3>Vertigo Games Founded</h3>			        			
			        				<p>Vertigo Games, Inc. established with a small, but dedicated Staff. Develops and launches first game, Kwon Ho.</p>
			        			</div>
			        		</div>
			        	</swiper-slide>
			        	<swiper-slide>
			        		<div class="row">
			        			<div class="col-xs-12 col-md-6 col-md-push-6">
			        				<img src="http://vertigogames.s3.amazonaws.com/static/new/assets/img/about/timeline/2007.png" alt="2007">
			        			</div>
				        		<div class="col-xs-12 col-md-6 col-md-pull-6">
				        			<h3>BlackShot Launches in Korea</h3>
				        			<p>Vertigo Games in-house project, BlackShot, launches in Korea.</p>
				        		</div>
				        	</div>
			        	</swiper-slide>
			        	<swiper-slide>
			        		<div class="row">
			        			<div class="col-xs-12 col-md-6 col-md-push-6">
			        				<img src="http://vertigogames.s3.amazonaws.com/static/new/assets/img/about/timeline/2008.png" alt="2008">
			        			</div>
			        			<div class="col-xs-12 col-md-6 col-md-pull-6">
			        				<h3>Partnership with THQ</h3>
			        				<p>Vertigo establishes partnership with THQ to develop Smackdown VS Raw Online.</p>
			        			</div>
			        		</div>
			        	</swiper-slide>
			        	<swiper-slide>
			        		<div class="row">
			        			<div class="col-xs-12 col-md-6 col-md-push-6">
			        				<img src="http://vertigogames.s3.amazonaws.com/static/new/assets/img/about/timeline/2009.png" alt="2009">
			        			</div>
								<div class="col-xs-12 col-md-6 col-md-pull-6">
			        				<h3>Development Begins for War of Zombie</h3>
			        				<p>Began developing War of Zombie in partnership with Tencent China. BlackShot launched in additional regions including Singapore and Malaysia.</p>
			        			</div>
			        		</div>
			        	</swiper-slide>
			        	<swiper-slide>
			        		<div class="row">
			        			<div class="col-xs-12 col-md-6 col-md-push-6">
			        				<img src="http://vertigogames.s3.amazonaws.com/static/new/assets/img/about/timeline/2010.png" alt="2010">
			        			</div>
			        			<div class="col-xs-12 col-md-6 col-md-pull-6">
			        				<h3>BlackShot Becomes #1 FPS In Singapore And Malaysia</h3>
			        				<p>BlackShot becomes the #1 FPS game in both Singapore and Malaysia.</p>
			        			</div>
			        		</div>
			        	</swiper-slide>
			        	<swiper-slide>
			        		<div class="row">
			        			<div class="col-xs-12 col-md-6 col-md-push-6">
			        				<img src="http://vertigogames.s3.amazonaws.com/static/new/assets/img/about/timeline/2011.png" alt="2011">
			        			</div>
			        			<div class="class-col-xs-12 col-md-6 col-md-pull-6">
			        				<h3>BlackShot Launches in Europe</h3>
			        				<p>BlackShot global service is further extended by launching into Europe.</p>
			        			</div>
			        		</div>
			        	</swiper-slide>
						<swiper-slide>
			        		<div class="row">
			        			<div class="col-xs-12 col-md-6 col-md-push-6">
			        				<img src="http://vertigogames.s3.amazonaws.com/static/new/assets/img/about/timeline/2012.png" alt="2012">
			        			</div>
			        			<div class="class-col-xs-12 col-md-6 col-md-pull-6">
			        				<h3>War of Zombie Completed</h3>
			        				<p>Vertigo completes War of Zombie development and partners with Tencent for commercial launch in China.</p>
			        			</div>
			        		</div>
			        	</swiper-slide>
			        	<swiper-slide>
			        		<div class="row">
			        			<div class="col-xs-12 col-md-6 col-md-push-6">
			        				<img src="http://vertigogames.s3.amazonaws.com/static/new/assets/img/about/timeline/2013.png" alt="2013">
			        			</div>
			        			<div class="class-col-xs-12 col-md-6 col-md-pull-6">
			        				<h3>War of Zombie Launches in China</h3>
			        				<p>War of Zombie is launched in China. Branch offices opened in USA and Singapore.</p>
			        			</div>
			        		</div>
			        	</swiper-slide>
			        	<swiper-slide>
			        		<div class="row">
			        			<div class="col-xs-12 col-md-6 col-md-push-6">
			        				<img src="http://vertigogames.s3.amazonaws.com/static/new/assets/img/about/timeline/2014.png" alt="2014">
			        			</div>
			        			<div class="class-col-xs-12 col-md-6 col-md-pull-6">
			        				<h3>Vertigo Games America Opens in USA</h3>
			        				<p>Vertigo Games America opens and begins to directly publish BlackShot Global service.</p>
			        			</div>
			        		</div>
			        	</swiper-slide>
			        	<swiper-slide>
			        		<div class="row">
			        			<div class="col-xs-12 col-md-6 col-md-push-6">
			        				<img src="http://vertigogames.s3.amazonaws.com/static/new/assets/img/about/timeline/2015.png" alt="2015">
			        			</div>
			        			<div class="class-col-xs-12 col-md-6 col-md-pull-6">
			        				<h3>Expands Business into Game Publishing</h3>
			        				<p>Vertigo broadens scope to game publication and fully takes over BlackShot Global service. Opened branch office in Canada.</p>
			        			</div>
			        		</div>
			        	</swiper-slide>
			        	<swiper-slide>
			        		<div class="row">
			        			<div class="col-xs-12 col-md-6 col-md-push-6">
			        				<img src="http://vertigogames.s3.amazonaws.com/static/new/assets/img/about/timeline/2016.png" alt="2016">
			        			</div>
			        			<div class="class-col-xs-12 col-md-6 col-md-pull-6">
			        				<h3>Launches The Papaya Play Game Portal </h3>
			        				<p>Vertigo launches its own game portal, Papaya Play; service begins with titles BlackShot Global and Dekaron.</p>
			        			</div>
			        		</div>
			        	</swiper-slide>
			        	<swiper-slide>
			        		<div class="row">
			        			<div class="col-xs-12 col-md-6 col-md-push-6">
			        				<img src="http://vertigogames.s3.amazonaws.com/static/new/assets/img/about/timeline/2017.png" alt="2017">
			        			</div>
			        			<div class="class-col-xs-12 col-md-6 col-md-pull-6">
			        				<h3>Expands Business to Mobile Games</h3>
			        				<p>Vertigo expands into the mobile marketplace under the Papaya Play brand.</p>
			        			</div>
			        		</div>
			        	</swiper-slide>

	        			<div class="swiper-button-prev icon-chevron2 sAboutPrevBtn sFontSize50 sArrowBtnBox white-chevron" slot="button-prev"></div>
	        			<div class="swiper-button-next icon-chevron1 sAboutNextBtn sFontSize50 sArrowBtnBox white-chevron" slot="button-next"></div>
					</swiper>
				</div>
			</div>
		</section>
	</div>
</template>

<script>
	export default {
    	data() {
      		return {
                swiperOptionTop: {
          			notNextTick: true,
          			nextButton: '.swiper-button-next',
          			prevButton: '.swiper-button-prev',
          			spaceBetween: 10,
          			initialSlide: 11
        		},
        		swiperOptionThumbs: {
          			notNextTick: true,
          			spaceBetween: 0,
          			centeredSlides: true,
          			slidesPerView: 7,
          			touchRatio: 0.2,
          			slideToClickedSlide: true,
          			initialSlide: 11
        		}
      		}
    	},
    	mounted() {
      		const swiperTop = this.$refs.swiperTop.swiper
      		const swiperThumbs = this.$refs.swiperThumbs.swiper
      		swiperTop.params.control = swiperThumbs
      		swiperThumbs.params.control = swiperTop
    	}
	}
</script>

<style lang="scss" scoped>
	@import '../assets/css/variables.scss';
	@import '../assets/css/global.scss';

	h3 { color: $orange; }

	#section1 {
		@extend .top-banner;
		background-image: url('http://vertigogames.s3.amazonaws.com/static/new/assets/img/about/banner.jpg');
	}

	#section2 {
		text-align: center;
		padding: 60px 0;
		
		h3 { 
			padding-top: 40px;
			padding-bottom: 20px;
		}
		img {
			max-width: 500px;
			margin: 0 auto;
		}
	}

	#section3, #section4 {
		padding: 40px 0;
		h3 { 
			text-align: center; 
			padding-bottom: 20px;
		}
		img {
			max-width: 60%;
			padding: 50px 0;
			margin: 0 auto;
		}
	}

	#section3 {
		background-color: $light-gray;
	}

	#section5 {
		background-color: $light-gray;
		padding: 40px 0;
		h3 { color: $silver; }

		.carousel-wrapper { position: relative; }

		.swiper-slide {
    		h3 {
    			font-size: 2.5rem;
    			text-align: center;
    			color: $orange;
    			padding-top: 40px;
    			padding-bottom: 20px;
    		}

    		p { text-align: center; }

    		img {
    			display: block;
    			max-width: 100%;
    			margin: 0 auto;
    		}
  		}

  		.gallery-thumbs {
    		box-sizing: border-box;
    		padding: 10px 0;
    		text-align: center;

    		h5 {
    			padding: 15px;
    			color: $silver;
    			font-size: 1.6rem;
    			height: 10px;
    			margin-bottom:20px;
    		}

    		.dots { 
    			display: block;
    			width: 10px;
    			height: 10px;
    			margin: 0 auto;
    			background: $white;
    			border: 2px solid $silver;
    			opacity: 1;
    			border-radius: 100%;
    		}

    		.swiper-slide-active {
    			h5 {
    				color: $orange;
    				font-size: 3.0rem;
    				margin-top: -10px;
    			}
    			.dots {
    				margin-top: 30px;
    				background: $orange;
    				border-color: $orange;
    			}
    		}
  		}

		.timeline {
			position: absolute;
			left: 0px;
			right: 0;
			top: 64px;
			width: 100%;
			height: 3px;
			background: linear-gradient(to right, rgba($orange, 0.1) 10%, $orange 50%, rgba($orange, 0.1) 90%);
		}
	}

	@media (min-width: 992px) {
		#section2 {
			h3, p {
				width: 670px;
				margin: 0 auto;
			}
		}

		#section3, #section4 {
			.row { 
				display: flex;
				justify-content: center;
				align-items: center;
			}

			h3 { text-align: left; }

			img { max-width: 80%; }
		}

		#section5 {
			.gallery-top {
				.swiper-slide {
					padding-left: 80px;
					.row {
						display: flex;
						justify-content: center;
						align-items: center;
					}

					h3 { padding-top: 0; }
					
					h3, p { text-align: left; }
				}
			}
		}
	}
</style>