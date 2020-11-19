<template>
  <div class="swiper-container">
    <div class="swiper-wrapper">
      <!--<div class="swiper-slide">sliadaac</div>
      <div class="swiper-slide">casc</div>
      <div class="swiper-slide">sacascacc</div>-->

      <div class="swiper-slide" v-for="item in banner">
        <a :href="item.link">
          <img :src="item.image">
        </a>
<!--        <img src="../../assets/img/3.jpg" alt="">-->
      </div>
    </div>
  </div>
</template>

<script>

import Swiper from 'swiper'
import 'swiper/dist/css/swiper.css'

    export default {
      name:'SwiperA',
      props:{
        banner:{
          type:Array
        }
      },
      updated() {
          let mySwiper = new Swiper('.swiper-container',{
            autoplay:3000,
            loop:true
          })
         },
    }
</script>

<style scoped>
  .swiper-container{
    width: 100%;
    height: 250px;
    margin-top: 46px;
  }
  .swiper-slide a img{
    width: 100%;
  }
</style>
