<template>
	<div class="container-fluid">
		<section id="section1">
			<div class="container">
				<h5>contact</h5>
	 			<h1>Striving to Provide<br>Utmost User Satisfaction</h1>
	 		</div>
		</section>

		<section id="section2">

			<gmap-map :center="center"
					  :zoom="zoom"
					  :options="{
					      styles: styles,
					      streetViewControl: false,
					      mapTypeControl: false,
					      zoomControl:zoomConFlag,
					      scrollwheel:wheelFlag
					  }">
				<gmap-marker
						v-for="(m, index) in markers"
						:position="m.position"
						:clickable="true"
						:icon="iconUrl"
						@click="locate(index)"
						:key="m">
				</gmap-marker>

				<div slot="visible" v-if="statusText != ''">
					<div id="mapinfo-wrapper" v-html="statusText"></div>
				</div>
			</gmap-map>
			
			<div class="row">
				<div class="col-xs-12 col-md-3 korea" @click="locate(0)">
					<div class="v-btn2">
						<h4>Seoul, Korea</h4>
						<p>Vertigo Games, Inc. HQ</p>
					</div>
				</div>
				<div class="col-xs-12 col-md-3 canada" @click="locate(1)">
					<div class="v-btn2">
						<h4>Vancouver, Canada</h4>
						<p>Vertigo Games America, Inc.</p>
					</div>
					
				</div>
				<div class="col-xs-12 col-md-3 usa" @click="locate(2)">
					<div class="v-btn2">
						<h4>Garden Grove, USA</h4>
						<p>Vertigo Games America, Inc.</p>
					</div>
				</div>
				<div class="col-xs-12 col-md-3 singapore" @click="locate(3)">
					<div class="v-btn2">
						<h4>Singapore</h4>
						<p>Vertigo Games Intl Pte, LTD.</p>
					</div>
				</div>
			</div>

		</section>

		<section id="section3">
			<div class="container">
<!--				
				<div class="row">
					<div class="col-xs-12 col-md-6 heading">
						<h4>For Media Inquiry</h4>
					</div>
					<div class="col-xs-12 col-md-6">
						<a href="mailto:pr@vertigogames.com" target="_top">pr@vertigogames.com</a>
					</div>
				</div>
-->
				
				<div class="row">
					<div class="col-xs-12 col-md-6 heading">
						<h4>For General Inquiry</h4>
					</div>
					<div class="col-xs-12 col-md-6">
						<a href="mailto:info@vertigogames.com" target="_top">contact@vertigogames.com</a>
					</div>
				</div>
				<div class="row">
					<div class="col-xs-12 col-md-6 heading">
						<h4>For Business Inquiry</h4>
					</div>
					<div class="col-xs-12 col-md-6">
						<a href="mailto:biz@vertigogames.com" target="_top">biz@vertigogames.com</a>
					</div>
				</div>

			</div>
		</section>
	</div>
</template>

<script>
	import Vue from 'vue';
	import * as VueGoogleMaps from 'vue2-google-maps';
  	
	Vue.use(VueGoogleMaps, {
		load: {
			key: 'AIzaSyDVuul172-04GIR7sm6nDMPDebqHhbyyc8',
			v: '3.26',
			region: 'KR'
	    }
	});

	export default {
    	data:function () {
      		return {
      			iconUrl: 'http://vertigogames.s3.amazonaws.com/static/new/assets/img/contact/vertigo-symbol.png',
        		center: {lat: 37.4971833, lng: 127.0392488},
        		zoom: 3,
                statusText: '',
        		zoomConFlag:false,
        		wheelFlag:false,
        		markers: [{ position: {lat: 37.503829, lng: 127.045659} },
        			{ position: {lat: 49.265109, lng: -123.0002047} },
        			{ position: {lat: 33.7689621, lng: -118.0039088} },
        			{ position: {lat: 1.3147298, lng: 103.7769793} }
        		],

        		styles: [{"featureType":"water", "elementType":"geometry", "stylers":[{"color":"#e9e9e9"}, {"lightness":17}]},
					     {"featureType":"landscape", "elementType":"geometry", "stylers":[{"color":"#f5f5f5"}, {"lightness":20}]},
					     {"featureType":"road.highway", "elementType":"geometry.fill", "stylers":[{"color":"#ffffff"}, {"lightness":17}]},
					     {"featureType":"road.highway","elementType":"geometry.stroke","stylers":[{"color":"#ffffff"}, {"lightness":29},{"weight":0.2}]},
					     {"featureType":"road.arterial","elementType":"geometry","stylers":[{"color":"#ffffff"},{"lightness":18}]},
					     {"featureType":"road.local","elementType":"geometry","stylers":[{"color":"#ffffff"},{"lightness":16}]},
					     {"featureType":"poi","elementType":"geometry","stylers":[{"color":"#f5f5f5"},{"lightness":21}]},
					     {"featureType":"poi.park","elementType":"geometry","stylers":[{"color":"#dedede"},{"lightness":21}]},{"elementType":"labels.text.stroke","stylers":[{"visibility":"on"},{"color":"#ffffff"},{"lightness":16}]}, {"elementType":"labels.text.fill","stylers":[{"saturation":36},{"color":"#333333"},{"lightness":40}]},{"elementType":"labels.icon","stylers":[{"visibility":"off"}]},
					     {"featureType":"transit","elementType":"geometry","stylers":[{"color":"#f2f2f2"},{"lightness":19}]},
					     {"featureType":"administrative","elementType":"geometry.fill","stylers":[{"color":"#fefefe"},{"lightness":20}]},
					     {"featureType":"administrative","elementType":"geometry.stroke","stylers":[{"color":"#fefefe"},{"lightness":17},{"weight":1.2}]}]
			}
		},
		methods: {
			locate (index) {
                this.statusText= "";
                this.zoomConFlag=false;
			    if(index === 0){
                    this.zoom = 18;
                    this.statusText= "<b>SEOUL, KOREA - HQ</b>" +
						"<div style='font-size:13px;'><span style='color:#FF8300;'>Vertigo Games, Inc.</span>" +
						"<br>19F Dong Hoon Tower, 317, Teheran-ro, " +
						"<br> Gangnam-gu, Seoul, Korea 06151 " +
						"<br><br><a href='contact@vertigogames.com'>contact@vertigogames.com</a>" +
						"<br> TEL +82+2-2051-9599</div>";
					this.zoomConFlag=true;
				}else{
                    this.zoom = 12;

				}

				this.center = this.markers[index].position
        	}
		}
    }
</script>

<style lang="scss" scoped>
	@import '../assets/css/variables.scss';
	@import '../assets/css/global.scss';

	#section1 {
		@extend .top-banner;
		background-image: url('http://vertigogames.s3.amazonaws.com/static/new/assets/img/contact/banner.jpg');
	}

	#section2 {
		.vue-map-container {
			width: 100%;
			height: 500px;
		}

		.korea, .canada, .usa, .singapore {
			background-size: cover;
			background-repeat: no-repeat;
			background-position: center;
		}

		.korea {  background-image: url('http://vertigogames.s3.amazonaws.com/static/new/assets/img/contact/korea.jpg'); }
		.canada { background-image: url('http://vertigogames.s3.amazonaws.com/static/new/assets/img/contact/canada.jpg'); }
		.usa { background-image: url('http://vertigogames.s3.amazonaws.com/static/new/assets/img/contact/usa.jpg'); }
		.singapore { background-image: url('http://vertigogames.s3.amazonaws.com/static/new/assets/img/contact/singapore.jpg'); }

		.row {
			margin-left: 0px;
			margin-right: 0px;
			text-align: center;
			[class*="col"] {
				@extend .flex-default;
				height: 180px;
				border: 1px solid $white;
				cursor: pointer;
				transition: all 0.1s;
				opacity: 0.9;
				&:hover, &:focus, &:active {
					opacity: 1.0;
				}
			}

			h4, p {
				text-shadow: 2px 2px 2px $black;
			}

			h4 { color: $white; }
			p {
				font-size: 1.8rem;
				color: $white;
			}
		}
	}

	#section3 {
		justify-content: center;
		align-items: center;
		height: 250px;
		background-color: $light-gray;
		text-align: center;
		
		.container {
			padding-top:80px;
		}

		.row { margin-bottom: 20px; }

		a {
			font-size: 1.6rem;
			color: $orange;
		}
	}

	#mapinfo-wrapper{
		top: 20px;
		left: 20px;
		border: 1px solid $light-gray;
		background-color: white;
		box-shadow: 3px 3px 0px rgba(0,0,0,0.1);
		color: black;
		position: absolute;
		z-index: 100;
		width:280px;
		text-align:left;padding:15px;
	}
</style>