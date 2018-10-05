<template>
	<div class="container">
		<ul>
			<router-link to="about" tag="li">About</router-link>
			<router-link to="games"  tag="li">Games</router-link>
			<router-link to="service" tag="li">Service</router-link>
			<router-link to="careers" tag="li">Careers</router-link>
			<router-link to="contact" tag="li">Contact</router-link>
		</ul>
		<div class="row">
			<div class="col-xs-12 col-md-3 col-md-offset-3">
				<a href="https://www.facebook.com/vertigogamesinc" target="_blank"><span class="icon-facebook"></span>Like us on Facebook</a>
			</div>
			<div class="col-xs-12 col-md-3">
				<a href="https://twitter.com/vertigogamesinc" target="_blank"><span class="icon-twitter"></span>Follow us on Twitter</a>
			</div>
		</div>
		<hr>
		<p>All trademarks referenced herein are the properties of their respective owners.<br>
		&copy;2017 Vertigo Games Inc. All Rights Reserved</p>
	</div>

</template>

<style lang="scss" scoped>
	@import '../../assets/css/variables.scss';
	@import '../../assets/css/global.scss';
	
	.container { padding-bottom: 50px; padding-top: 20px; }

	ul {
		@extend .flex-default;
		padding-top: 30px;
		li {
			&:not(:last-child) {
				margin-right: 15px;
			}
			cursor: pointer;
			transition: all 0.2s;

			&:hover, &:focus, &:active {
				color: $orange;
			}
		}
	}

	.row {
		padding-top: 30px;
		[class*="col"] {
			text-align: center;
			&:first-child {
				a span {
					color: #3B5998;
				}
			}

			&:last-child {
				a span {
					color: #1DA1F2;
				}
			}

			a {
				text-decoration: none;
				font-size: 1.4rem;
				color: $silver;
				span {
					font-size: 2.2rem;
					margin-right: 15px;
					vertical-align: middle;
				}

				transition: all 0.2s;

				&:hover, &:focus, &:active {
					color: $orange;
				}
			}
		}
	}

	p {
		font-size: 1.3rem;
		text-align: center;
	}
</style>