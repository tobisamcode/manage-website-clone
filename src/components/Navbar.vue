<template>
  <!-- Navbar -->
  <nav class="relative container mx-auto  p-6">
    <!-- Flex container -->
    <div class="flex items-center justify-between">
      <!-- Logo -->
      <div class="pt-2">
        <img src="/public/logo.svg">
      </div>

      <!-- Menu Items -->
      <div class="hidden space-x-6 md:flex">
        <router-link class="hover:text-DarkGrayishBlue" to="#">Product</router-link>
        <router-link class="hover:text-DarkGrayishBlue" to="#">Pricing</router-link>
        <router-link class="hover:text-DarkGrayishBlue" to="#">About Us</router-link>
        <router-link class="hover:text-DarkGrayishBlue" to="#">Careers</router-link>
        <router-link class="hover:text-DarkGrayishBlue" to="#">Community</router-link>
      </div>

      <!-- Button  -->
      <a href="#" class="hidden p-3 px-6 text-white bg-brightRed rounded-full baseline hover:bg-brightRedLight md:block">
        Get Started
      </a>

      <!-- Hamburger Icon -->
      <button id="menu"></button>
    </div>
  </nav>
</template>

<script>
export default {

}
</script>

<style>

</style>