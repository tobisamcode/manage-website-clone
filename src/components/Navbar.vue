<template>
  <!-- Navbar -->
  <nav class="relative container mx-auto  p-6">
    <!-- Flex container -->
    <div class="flex items-center justify-between">
      <!-- Logo -->
      <div class="pt-2">
        <img src="/public/logo.svg">
      </div>

      <!-- Menu Items for desktop-->
      <div class="hidden space-x-6 md:flex">
        <router-link class="hover:text-DarkGrayishBlue" to="#">Product</router-link>
        <router-link class="hover:text-DarkGrayishBlue" to="#">Pricing</router-link>
        <router-link class="hover:text-DarkGrayishBlue" to="#">About Us</router-link>
        <router-link class="hover:text-DarkGrayishBlue" to="#">Careers</router-link>
        <router-link class="hover:text-DarkGrayishBlue" to="#">Community</router-link>
      </div>

      <!-- Menu Items for mobile -->
      <div class="md:hidden z-10">
        <transition name="mobile-nav" v-show="mobileNav" class="absolute flex flex-col items-center self-end py-8 mt-10 space-y-6 font-bold bg-white sm:w-auto sm:self-center left-6 right-6 drop-shadow-md">
          <div>
            <router-link  class="hover:text-DarkGrayishBlue" to="#" ><p @click="toggleMenu()" >Product</p></router-link>
            <router-link class="hover:text-DarkGrayishBlue" to="#"><p @click="toggleMenu()">Pricing</p></router-link>
            <router-link class="hover:text-DarkGrayishBlue" to="#"><p @click="toggleMenu()">About Us</p></router-link>
            <router-link class="hover:text-DarkGrayishBlue" to="#"><p @click="toggleMenu()">Careers</p></router-link>
            <router-link class="hover:text-DarkGrayishBlue" to="#"><p @click="toggleMenu()">Community</p></router-link>
          </div>
        </transition>
      </div>

      <!-- Button  -->
      <a href="#" class="hidden p-3 px-6 text-white bg-brightRed rounded-full baseline hover:bg-brightRedLight md:block">
        Get Started
      </a>

      <!-- Hamburger Icon -->
      <button :class="[isActive ? 'is-active' : '']" @click="toggleMenu()"  class="block hamburger hamburger--spin md:hidden overflow-hidden" type="button">
        <span class="hamburger-box">
          <span class="hamburger-inner"></span>
        </span>
      </button>  
    </div>
  </nav>
</template>

<script>
export default {
  data() {
    return {
      isActive: null,
      mobileNav: null,
      windowWidth: null
    }
  },
  methods: {
    toggleMenu() {
      this.isActive = !this.isActive;
      this.mobileNav = !this.mobileNav;
    }
  }

}
</script>

<style lang="css">
.mobile-nav-enter-active,
.mobile-nav-leave-active{
    transition: all 1s ease;
}
.mobile-nav-enter{
    transform: translateX(-250px);
}
.mobile-nav-enter-to{
    transform: translateX(0);
}
.mobile-nav-leave-to{
    transform: translateX(-700px);
    opacity: .5;
}
</style>