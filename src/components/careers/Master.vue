<template>
	<div class="container-fluid">
		<section id="section1">
			<div class="container">
				<h5>careers</h5>
	 			<h1>Be A Part of Vertigo<br>Join Our Team</h1>
	 		</div>
		</section>
		
		<section id="section2">
			<div class="container">
				<h3>our values</h3>
				<hr class="v-hr">
				<p>We are always on the lookout for creative and talented people. While working together to achieve common goals, we strive to provide our employees with plenty of opportunities for professional growth.</p>

				<div class="row">
					<div class="col-xs-12 col-md-4">
						<figure>
							<img src="http://vertigogames.s3.amazonaws.com/static/new/assets/img/careers/icon1.png" alt="pleasant">
							<figcaption>Pleasant</figcaption>
						</figure>
						<p>Just as we try to offer the pleasant sensation of Vertigo to our players, we strive to provide our employees with a pleasant work environment. We believe that employees are most productive in a pleasant, friendly environment.</p>
					</div>

					<div class="col-xs-12 col-md-4">
						<figure>
							<img src="http://vertigogames.s3.amazonaws.com/static/new/assets/img/careers/icon2.png" alt="pleasant">
							<figcaption>Diversity</figcaption>
						</figure>
						<p>With four offices spread out across the globe, and our games being serviced in more than 50 countries, we understand the importance of diversity better than most. We respect and cherish diversity in all forms at Vertigo.</p>
					</div>

					<div class="col-xs-12 col-md-4">
						<figure>
							<img src="http://vertigogames.s3.amazonaws.com/static/new/assets/img/careers/icon3.png" alt="pleasant">
							<figcaption>Synergy</figcaption>
						</figure>
						<p>1 + 1 = 2? We don't think so. We believe we can achieve more than the sum of all parts when we combine the strengths of our employees. That's why we strive to promote a strong culture of teamwork and synergy in the office.</p>
					</div>
				</div>
				<hr>
			</div>
		</section>

		<section id="section3">
			<div class="container">
				<h3>open positions</h3>
				<hr class="v-hr">
				<div class="row">
				<router-link :to="{ name: 'CareersDetail', params: { id: 0 } }" tag="div" >
					<div class="col-xs-12 col-md-6">
						<router-link :to="{ name: 'CareersDetail', params: { id: 0 } }" tag="div" class="subline">
							<div class="title">IT Team Lead</div>
							<div class="location">Seoul,Korea / Singapore,Singapore</div>
							<br/>
							<a href="#" class="v-btn">Apply now</a>
						</router-link>
					</div>
				</router-link>
				<router-link :to="{ name: 'CareersDetail', params: { id: 1 } }" tag="div">
					<div class="col-xs-12 col-md-6 planning">
						<router-link :to="{ name: 'CareersDetail', params: { id: 1 } }" tag="div" class="subline">
							<div class="title">Game Designer</div>
							<div class="location">Seoul, Korea</div>
							<br/>
							<a href="#" class="v-btn">Apply now</a>
						</router-link>
					</div>
				</router-link>
				<router-link :to="{ name: 'CareersDetail', params: { id: 2 } }" tag="div">
					<div class="col-xs-12 col-md-6 planning">
						<router-link :to="{ name: 'CareersDetail', params: { id: 2 } }" tag="div" class="subline">
							<div class="title">Client Programmer</div>
							<div class="location">Seoul, Korea</div>
							<br/>
							<a href="#" class="v-btn">Apply now</a>
						</router-link>
					</div>
				</router-link>				
				<router-link :to="{ name: 'CareersDetail', params: { id: 3 } }" tag="div">
					<div class="col-xs-12 col-md-6 planning">
						<router-link :to="{ name: 'CareersDetail', params: { id: 3 } }" tag="div" class="subline">
							<div class="title">Client Programmer (PC)</div>
							<div class="location">Seoul, Korea</div>
							<br/>
							<a href="#" class="v-btn">Apply now</a>
						</router-link>
					</div>
				</router-link>
				<router-link :to="{ name: 'CareersDetail', params: { id: 4 } }" tag="div" >
					<div class="col-xs-12 col-md-6">
						<router-link :to="{ name: 'CareersDetail', params: { id: 4 } }" tag="div" class="subline">
							<div class="title">Front-End Developer</div>
							<div class="location">Seoul, Korea</div>
							<br/>
							<a href="#" class="v-btn">Apply now</a>
						</router-link>
					</div>
				</router-link>
				<router-link :to="{ name: 'CareersDetail', params: { id: 5 } }" tag="div">
					<div class="col-xs-12 col-md-6 planning">
						<router-link :to="{ name: 'CareersDetail', params: { id: 5 } }" tag="div" class="subline">
							<div class="title">DevOps Engineer</div>
							<div class="location">Seoul, Korea</div>
							<br/>
							<a href="#" class="v-btn">Apply now</a>
						</router-link>
					</div>
				</router-link>				
<!--
				<router-link :to="{ name: 'CareersDetail', params: { id: 2 } }" tag="div" >
					<div class="col-xs-12 col-md-6">
						<router-link :to="{ name: 'CareersDetail', params: { id: 2 } }" tag="div" class="subline">
							<div class="title">Graphic Designer</div>
							<div class="location">Seoul, Korea</div>
							<br/>
							<a href="#" class="v-btn">Apply now</a>
						</router-link>
					</div>
				</router-link>
				<router-link :to="{ name: 'CareersDetail', params: { id: 3 } }" tag="div">
					<div class="col-xs-12 col-md-6 planning">
						<router-link :to="{ name: 'CareersDetail', params: { id: 3 } }" tag="div" class="subline">
							<div class="title">Junior Animator</div>
							<div class="location">Seoul, Korea</div>
							<br/>
							<a href="#" class="v-btn">Apply now</a>
						</router-link>
					</div>
				</router-link>
				<router-link :to="{ name: 'CareersDetail', params: { id: 4 } }" tag="div">
					<div class="col-xs-12 col-md-6 planning">
						<router-link :to="{ name: 'CareersDetail', params: { id: 4 } }" tag="div" class="subline">
							<div class="title">Assistant Product Manager</div>
							<div class="location">Seoul, Korea</div>
							<br/>
							<a href="#" class="v-btn">Apply now</a>
						</router-link>
					</div>
				</router-link>				
				<router-link :to="{ name: 'CareersDetail', params: { id: 5 } }" tag="div">
					<div class="col-xs-12 col-md-6 planning">
						<router-link :to="{ name: 'CareersDetail', params: { id: 5 } }" tag="div" class="subline">
							<div class="title">Game Operations Associate</div>
							<div class="location">Vancouver, Canada</div>
							<br/>
							<a href="#" class="v-btn">Apply now</a>
						</router-link>
					</div>
				</router-link>				
-->

				</div>
			</div>
		</section>
	</div>
</template>

<style lang="scss" scoped>
	@import '../../assets/css/variables.scss';
	@import '../../assets/css/global.scss';

	#section1 {
		@extend .top-banner;
		background-image: url('http://vertigogames.s3.amazonaws.com/static/new/assets/img/careers/banner-master.jpg');
	}

	#section2 {
		padding-top: 40px;

		figure {
			text-align: center;
			margin-top: 70px;
			img {
				width: 150px;
				height: 150px;
				display: block;
				margin: 0 auto;
			}
			figcaption {
				display: inline-block;
				font-size: 1.8rem;
				color: $orange;
				border-bottom: 1px solid $orange;
				padding-top: 30px;
				padding-bottom: 5px;
			}
		}
		p {
			width: 80%;
			margin: 20px auto 0;
			text-align: center;
		}
	}

	#section3 {
		padding-top: 40px;
		
		.row {
			margin: auto;
		}
		
		.container
		{
			max-width:970px;
		}
		
		[class*="col"] {
			@extend .flex-default;
			height: 180px;
			text-align: center;
			cursor: pointer;
			opacity: 0.9;
			transition: all 0.1s;

			-webkit-box-sizing: border-box;
			-moz-box-sizing: border-box;
			box-sizing: border-box;
		}

		.subline{
			padding: 26px 30px;
			border:1px solid #e7e7e7;
		}

		@media (min-width: 500px) {
			.subline{
				padding: 26px 94px;
				border:1px solid #e7e7e7;
			}
		}

		.title {
			font-size: 2rem;
			font-weight: 300;
		}

		.location {
			font-size: 1.6rem;
			color: $gray;
		}

	}
	
</style>