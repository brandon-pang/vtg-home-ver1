<template>
	<div class="container-fluid">
		<div class="container">
			<nav>
				<!---->
				<div class="col1">
					<span class="icon-hamburger hidden-md hidden-lg" @click="menuVisible = true" aria-hidden="true"></span>
					<router-link to="/"><img src="http://vertigogames.s3.amazonaws.com/static/new/assets/img/shared/vertigo-logo.svg" class="img-responsive" width="200"></router-link>
				</div>
				<div class="col2 hidden-xs hidden-sm">
					<ul>
						<router-link to="/about" tag="li" activeClass="active">about</router-link>
						<router-link to="/games" tag="li" activeClass="active">games</router-link>
						<router-link to="/service" tag="li" activeClass="active">service</router-link>
						<router-link to="/careers" tag="li" activeClass="active">careers</router-link>
						<router-link to="/contact" tag="li" activeClass="active">contact</router-link>
					</ul>
				</div>
			</nav>
		</div>
		
		<transition name="v-animate" animate enter-active-class="pt-page-moveFromLeftFade" leave-active-class="pt-page-moveToLeftFade">
			<div class="mobile-menu hidden-md hidden-lg" v-show="menuVisible">
				<router-link to="/"><img src="http://vertigogames.s3.amazonaws.com/static/new/assets/img/shared/vertigo-logo.svg" class="img-responsive" width="200"></router-link>
				<ul class="menu-list">
					<router-link to="/about" tag="li" activeClass="active" @click.native="goto()">about</router-link>
					<router-link to="/games" tag="li" activeClass="active" @click.native="goto">games</router-link>
					<router-link to="/service" tag="li" activeClass="active" @click.native="goto">service</router-link>
					<router-link to="/careers" tag="li" activeClass="active" @click.native="goto">careers</router-link>
					<router-link to="/contact" tag="li" activeClass="active" @click.native="goto">contact</router-link>
				</ul>
				<ul class="sns">
					<li><a href="https://www.facebook.com/vertigogamesinc" target="_blank"><span class="icon-facebook"></span>Like us on Facebook</a></li>
					<li><a href="https://twitter.com/vertigogamesinc" target="_blank"><span class="icon-twitter"></span>Follow us on Twitter</a></li>
				</ul>
			</div>
		</transition>

		<div class="v-fade-bg" v-show="menuVisible" @click="menuVisible=false"></div>
	</div>
</template>

<script>
	export default {
		data () {
      		return {
        		menuVisible: false
      		}
    	},
    	methods: {
			goto () {
				this.menuVisible = false;
        	}
		}
	}
</script>

<style lang="scss" scoped>
	@import '../../assets/css/variables.scss';
	@import '../../assets/css/global.scss';
	
	.container-fluid {
		background-color: $white;
	}

	nav {
		@extend .flex-default;
		position: relative;
		height: 47px;
		span {
			position: absolute;
			left: 5px;
			cursor: pointer;
			margin-top: 1em;
			transition: all 0.2;
			&:hover, &:focus, &:active {
				color: $orange;
			}
		}
		.col1 {
			img { margin-top: -5px; }
		}
		.col2 {
			ul {
				@extend .flex-default;
				li {
					padding: 0 5px 5px;
					font-size: 1.4rem;
    				font-weight: 500;
    				line-height: 1.4;
    				text-transform: uppercase;
    				letter-spacing: 0.1rem;
    				color: $black;
    				cursor: pointer;
    				transition: all 0.2s;
    				border-bottom: 1px solid transparent;
					
					&:not(:last-child) {
						margin-right: 20px;
					}
					&:hover, &:focus, &:active, &.active {
						border-bottom: 1px solid $orange;
						color: $orange;
					}
				}
			}
		}
	}

	.v-fade-bg {
		position: fixed;
		width: 100%;
		height: 100%;
		top: 0;
		left: 0;
		z-index: 2;
		background: rgba($silver, 0.7);
	}

	.mobile-menu {
		@extend .flex-default;
		flex-direction: column;
		width: 70%;
	    height: 100%;
		position: fixed;
	    top: 0;
	    left: 0;
	    z-index: 3;
	    background: $white;
	    .menu-list {
	    	width: 80%;
	    	margin-top: 30px;
	    	li {
	    		font-size: 1.4rem;
	    		text-transform: uppercase;
	    		color: $black;
	    		padding: 10px 0;
	    		border-bottom: 1px solid #eee;
	    		text-align: center;
	    		cursor: pointer;
	    		trasition: all 0.2s;
	    		&:hover, &:focus, &:active, &.active {
	    			font-weight: bold;
	    			border-color: $black;
	    		}
	    	}
	    }

	    .sns {
	    	margin-top: 30px;
			li {
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
					font-size: 1.3rem;
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
	}

	@media (min-width: 992px) {
		nav {
			height: 94px;
			justify-content: space-between;
		}
	}
</style>
