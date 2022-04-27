<template>
  <!-- Testimonials  -->
  <section id="testimonials">
    <!-- Container  -->
    <div class="max-w-6xl px-5 mx-auto mt-32 text-center">
      <!-- Haeding  -->
      <h2 class="text-4xl font-bold text-center">
        What they’ve said 
      </h2>
      <!-- Testimonial Container large screen -->
      <div class="hidden flex-col mt-24 md:flex md:flex-row md:space-x-6">
        <!-- Testimonials -->
        <div v-for="testimonial in testimonials" :key="testimonial.name" class=" flex-col items-center p-6 space-y-6 rounded-lg bg-veryLightGray md:flex md:w-1/3">
          <img :src="testimonial.img" class="w-16 -mt-14" alt="">
          <h5 class="text-lg font-bold">{{ testimonial.name }}</h5>
          <p class="text-sm text-DarkGrayishBlue">{{ testimonial.quote }}</p>
        </div>
      </div>

      <!-- Testimonial Container mobile -->
      <swiper :autoplay="{
        delay: 2000,
        disableOnInteraction: false,
      }"
      :pagination="{
        clickable: true,
      }"
      :modules="modules"
      class="flex flex-col mt-24 md:flex-row md:space-x-6 md:hidden" >
        <!-- Testimonials -->
        <swiper-slide v-for="testimonial in testimonials" :key="testimonial.name" class=" flex flex-col justify-center items-center p-8 space-y-6 rounded-lg bg-veryLightGray md:flex md:w-1/3">
          <img :src="testimonial.img" class="w-16 mt-1" alt="">
          <h5 class="text-lg font-bold">{{ testimonial.name }}</h5>
          <p class="text-sm text-DarkGrayishBlue ">{{ testimonial.quote }}</p>
        </swiper-slide>
      </swiper>


      <!-- Button  -->
      <div class="my-16">
        <a href="#" class="p-3 px-6 text-white bg-brightRed rounded-full baseline hover:bg-brightRedLight">Get Started</a>
      </div>
    </div>

  </section>
</template>

<script>
import {  Swiper, SwiperSlide } from "swiper/vue";
import { Autoplay, Pagination } from "swiper"
import "swiper/css/pagination";

import 'swiper/css';
export default {
  components: {
    Swiper,
    SwiperSlide,
  },
  setup() {
    return {
      modules: [Autoplay, Pagination]
    };
  },
  data() {
    return {
      testimonials: [
        {
          img: '../../public/avatar-anisha.png',
          name: 'Anisha Li',
          quote: '“Manage has supercharged our team’s workflow. The ability to maintain visibility on larger milestones at all times keeps everyone motivated.”'
        },
        {
          img: '../../public/avatar-ali.png',
          name: 'Ali Bravo',
          quote: '“We have been able to cancel so many other subscriptions since using Manage. There is no more cross-channel confusion and everyone is much more focuse”'
        },
        {
          img: '../../public/avatar-richard.png',
          name: 'Richard Watts',
          quote: '“Manage allows us to provide structure and process. It keeps us organized and focused. I can’t stop recommending them to everyone I talk to!”'
        },
        {
          img: '../../public/avatar-shanai.png',
          name: 'Shanai Gough',
          quote: '“Their software allows us to track, manage and collaborate on our projects from anywhere. It keeps the whole team in-sync without being intrusive.”'
        },
      ]
    }
  }

}
</script>

<style>

</style>