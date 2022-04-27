<template>
  <div>
    <Navbar/>
    <HeroSection/>
    <Features/>
    <Testmonials/>
    <Cta/>
    <Footer/>
  </div>
</template>

<script>
import Navbar from '../components/Navbar.vue'
import HeroSection from '../components/HeroSection.vue'
import Features from '../components/Features.vue';
import Testmonials from '../components/Testimonials.vue';
import Cta from '../components/Cta.vue';
import Footer from '../components/Footer.vue'

export default {
  components: {
    Navbar,
    HeroSection,
    Features,
    Testmonials,
    Cta,
    Footer
  }
}
</script>

<style>

</style>

