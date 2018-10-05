<template>
	<div class="container-fluid">
		<section id="section1">
			<div class="container">
				<h5>Games</h5>
	 			<h1>Staying True to Our Passion<br>We Love Making Games</h1>
	 		</div>
		</section>

		<section id="section2">
			<div class="row">
				<div class="col-xs-12 col-md-6 blackshot">
					<img src="http://vertigogames.s3.amazonaws.com/static/assets/images/blackshot-logo.png" class="img-responsive">
				</div>
				<div class="col-xs-12 col-md-6 text-block">
					<h1>BlackShot</h1>
					<p>Vertigo's first and most commercially successful FPS, BlackShot was developed completely in-house. BlackShot is also the first game Vertigo published through Papaya Play.</p>
					<ul>
						<li><strong>GENRE:</strong> Military F2P MMOFPS</li>
						<li><strong>FEATURES:</strong> Quick and aggressive game play, tactical skill upgrade system, numerous game modes, character customization</li>
						<li><strong>RELEASE DATE:</strong> November 2007</li>
					</ul>
					<div class="center-div-btn">
						<a href="https://blackshot.papayaplay.com/bsglb.do" target="_blank" class="v-btn">global website</a>
						<a href="http://bs.sea.papayaplay.com/bssea.do" target="_blank" class="v-btn">SE Asia website</a>
					</div>

				</div>
			</div>

			<div class="row">
				<div class="col-xs-12 col-md-6 col-md-push-6 woz">
					<img src="http://vertigogames.s3.amazonaws.com/static/assets/images/woz-logo.png" class="img-responsive">
				</div>
				<div class="col-xs-12 col-md-6 col-md-pull-6 text-block woz-text-block">
					<h1>War Of Zombie</h1>
					<p>War of Zombie featured enhanced AI alongside standard FPS gameplay to differentiate itself from other "Zombie" games.</p>
 
					<ul>
						<li><strong>GENRE:</strong> Military F2P MMOFPS</li>
						<li><strong>FEATURES:</strong> Exceptional friend & foe differentiation, <br/>highly intelligent AI, PVP/PVZ/PVE game modes</li>
						<li><strong>RELEASE DATE:</strong> May 2013</li>
					</ul>
					<h5><span class="icon-end-service">end of service</span></h5>
				</div>
			</div>

			<div class="row">
				<div class="col-xs-12 col-md-6 kwonho">
					<img src="http://vertigogames.s3.amazonaws.com/static/assets/images/kwonho-logo.png" class="img-responsive">
				</div>
				<div class="col-xs-12 col-md-6 text-block">
					<h1>KwonHo</h1>
					<p>The first game developed in-house by Vertigo Games was also the first of its kind a 3D based web fighting game where players could face off in real-time.</p>
 
					<ul>
						<li><strong>GENRE:</strong> Online Fighting</li>
						<li><strong>FEATURES:</strong> Customizable characters</li>
						<li><strong>RELEASE DATE:</strong> Mid-2006</li>
					</ul>
					<h5><span class="icon-end-service">end of service</span></h5>
				</div>
			</div>
		</section>
	</div>
</template>

<style lang="scss" scoped>
	@import '../assets/css/variables.scss';
	@import '../assets/css/global.scss';

	.icon-end-service {
		padding-right: 10px;
	}
	
	.row {
		margin-left:0px;
		margin-right:0px;
	}
		
	#section1 {
		@extend .top-banner;
		background-image: url('http://vertigogames.s3.amazonaws.com/static/new/assets/img/games/banner.jpg');
	}

	[class*="icon-"]::before {
		padding-right: 10px;
    	vertical-align: top;		
	}

	#section2 {
		h1 {
			color: $silver;
			text-align: left;
			padding-bottom: 15px;
		}
		h5 { color: $silver; margin-top:20px; }

		.row { 
			height: 400px; 
		}

		[class*="col"] { background-color: $light-gray; }
		
		.text-block {
			min-height: 400px;
			padding: 30px 30px;

			ul {
				padding: 20px 0;
				li { margin-bottom: 5px; }
			}
			
			a {
				float: left;
				width: 230px;
				margin-right: 10px;
				margin-bottom: 10px;
			}
		}

		.blackshot, .woz, .kwonho {
			height: 100%;
			background-size: cover;
			background-repeat: no-repeat;
			background-position: center;
			//
			position:relative;
		}

		.blackshot {
			background-image: url('http://vertigogames.s3.amazonaws.com/static/new/assets/img/games/blackshot.jpg');
		}
		.woz {
			background-image: url('http://vertigogames.s3.amazonaws.com/static/new/assets/img/games/woz.jpg');
		}
		.kwonho {
			background-image: url('http://vertigogames.s3.amazonaws.com/static/new/assets/img/games/kwonho.jpg');
		}

		img {
			position:absolute;
			bottom:30px;
			left:50%;
			transform: translateX(-50%);
		}
	}
	@media (max-width:538px){
		#section2 {
			.center-div-btn{
				margin: 0 auto;
				width:220px;
			}
		}
	}
	@media (min-width: 992px) {

		#section2 {
			.row {
				height: 550px;
				display: flex;
				justify-content: center;
				align-items: center;
				background-color: $light-gray;
			}

			.text-block {
				padding-left: 30px;
				padding-right: 30px;
			}

			.woz-text-block {
				text-align: right;
				h1 { text-align: right; }

				p, ul { 
					width: auto; 
					padding-left: 25%;
				}

			}
		}
	}

	@media (min-width: 1200px) {
		#section2 {
			.text-block {
				padding-left: 90px;
				padding-right: 90px;
			}

			p, ul { width: 70%;}
		}
	}
</style>