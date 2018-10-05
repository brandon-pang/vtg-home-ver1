<template>
  <div id="app">
    <app-header></app-header>
    <transition name="v-animate" animate enter-active-class="pt-page-moveFromLeftFade" leave-active-class="pt-page-moveToRightFade">
      <router-view></router-view>
    </transition>
    <app-footer></app-footer>
  </div>
</template>

<script>
  import Header from './components/shared/Header.vue';
  import Footer from './components/shared/Footer.vue';
  export default {
    components: {
      'app-header': Header,
      'app-footer': Footer
    }
  };
</script>
  
<style lang="scss">
  @import './assets/css/variables.scss';
  @import './assets/css/global.scss';
  @import './assets/css/animation.scss';

  @font-face {
    font-family: 'Vertigo Website';
    src: url('./assets/fonts/Glyphter.eot');
    src: url('./assets/fonts/Glyphter.eot?#iefix') format('embedded-opentype'),
         url('./assets/fonts/Glyphter.woff') format('woff'),
         url('./assets/fonts/Glyphter.ttf') format('truetype'),
         url('./assets/fonts/Glyphter.svg#Glyphter') format('svg');
    font-weight: normal;
    font-style: normal;
  }

  [class*='icon-']:before{
    display: inline-block;
    font-family: 'Vertigo Website';
    font-style: normal;
    font-weight: normal;
    line-height: 1;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale
  }

.icon-mouse:before{content:'\0041';}
.icon-facebook:before{content:'\0042';}
.icon-twitter:before{content:'\0043';}
.icon-hamburger:before{content:'\0044';}
.icon-close:before{content:'\0045';}
.icon-chevron1:before{content:'\0046';}
.icon-chevron2:before{content:'\0047';}
.icon-end-service:before{content:'\0048';}

  html {font-size: 10px;}

  body {
    font-family: $base-font;
    font-weight: 300;
    color: $black;
    background-color: $white;
    min-width: 320px;
    max-width: 1920px;
  }
  
  h1, h2, h3, h4, h5, h6 { margin: 0; }

  h1 { 
    font-size: 2.4rem;
    font-weight: 200;
    letter-spacing: 2px;
    text-align: center;
    text-transform: none;
    color: $white;
  }

  h2 { font-size: 3.6rem; }

  h3 { 
    font-size: 3.2rem;
    font-weight: 100;
    text-transform: capitalize;
    text-align: center;
    color: $gray;
  }
  
  h4 { 
    font-size: 2.4rem; 
    font-weight: 100;
    color: $gray;
  }

  h5 { 
    font-size: 1.8rem;
    font-weight: 100;
    text-transform: uppercase;
    color: $white;
    padding-bottom: 20px;
  }

  h6 { font-size: 1.3rem; }

  p {
    font-size: 1.6rem;
    line-height: 1.8;
    color: $silver;
  }

  ul {
    margin: 0;
    padding: 0;
  }

  li { 
    list-style: none;
    color: $silver;
  }

  a {
    color: $orange;
    &:hover, &:focus, &:active {
      color: #7ED321;
      text-decoration: none;
    }
  }

  .container-fluid { padding: 0; }

  .careers-detail {
    strong {
      display: block;
      color: $silver;
      font-weight: 500;
    }
    p {
      line-height: 1.8;
    }
    ul {
      padding: 0 0 10px 40px;
      li {
        font-size: 1.6rem;
        list-style: disc;
        line-height: 1.8;
      }
    }
  }

  .v-btn {
    @extend .flex-default;
    width: 270px;
    height: 40px;
    font-size: 1.5rem;
    text-transform: uppercase;
    letter-spacing: 2px;
    color: $silver;
    background-color: transparent;
    border: 1px solid $silver;
    border-radius: 2px;
    transition: all 0.2s;
    &:hover, &:focus, &:active {
      background-color: $orange;
      border-color: $orange;
      color: $white;
      text-decoration: none;
    }
  }

  .v-hr { 
    width: 65px; 
    border-color: $orange; 
  }

  .swiper-pagination-bullet { 
    background: $white !important;
    border: 2px solid $silver !important;
    opacity: 1 !important;
    margin: 0 30px !important;
    position: relative;
    .year {
      position: absolute;
      left: -15px;
      top: -30px;
    }
  }

  .swiper-button-prev, .swiper-button-next {
    background-image: none !important;
  }

  .icon-chevron1, .icon-chevron2 {
    &:hover, &:focus, &:active {
      color: $orange;
    }
  }

  .white-chevron { color: $white; }
    
  .swiper-pagination-bullet-active { 
    background: $orange !important;
    border-color: $orange !important;
    .year {
      font-size: 3.2rem;
      color: $orange;
      left: -35px;
      top: -50px;
    }
  }

  @media (min-width: 992px) {
    h1 { font-size: 4.5rem; }
  }

</style>
