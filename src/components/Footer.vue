<template>
  <!-- Footer  -->
  <footer class="bg-veryDarkBlue">
    <!-- flex container  -->
    <div class="container flex flex-col-reverse justify-between px-6 py-10 mx-auto space-y-8 md:flex-row md:space-y-0">
      <!-- Logo and social links container  -->
      <div class="flex flex-col-reverse items-center justify-between space-y-12 md:flex-col md:space-y-0 md:items-start">
        <div class="mx-auto my-6 text-center text-white md:hidden">Copyright &copy; 2020. All Rights Reserved</div>
        <!-- logo  -->
        <img src="/public/logo-white.svg" class="h-8"  alt="">
         <!-- Social links container  -->
        <div class="flex justify-center space-x-4">
          <!-- links  -->
          <a v-for="logo in logos" :key="logo" href="#">
            <img :src="logo" alt="">
          </a>
        </div>
      </div>

      <!-- list container  -->
      <div class="flex justify-around space-x-32">
        <div class="flex flex-col space-y-3 text-white ">
          <a v-for="nav in navs" :key="nav" href="#" class="hover:text-brightRed">{{ nav }}</a>
        </div>

        <div class="flex flex-col space-y-3 text-white ">
          <a v-for="list in lists" :key="list" href="#" class="hover:text-brightRed">{{ list }}</a>
        </div>
      </div>

      <!-- input container  -->
      <div class="flex flex-col justify-between">
        <form>
          <div class="flex space-x-3">
            <input type="text" class="flex-1 px-4 rounded-full focus:outline-none" placeholder="Updates in your inbox…">
            <button class="px-6 py-2 text-white rounded-full bg-brightRed hover:bg-brightRedLight focus:outline-none">Go</button>
          </div>
        </form>
        <div class="hidden text-white md:block">Copyright &copy; 2020. All Rights Reserved</div>
      </div>

    </div>
  </footer>
</template>

<script>
export default {
  data() {
    return {
      logos: [
        '/public/icon-facebook.svg',
        '/public/icon-youtube.svg',
        '/public/icon-twitter.svg',
        '/public/icon-pinterest.svg',
        '/public/icon-instagram.svg',
      ],
      navs: [
        'Home',
        'Pricing',
        'Products',
        "About Us"
      ],
      lists: [
        'Careers',
        'Community',
        'Privacy Policy'
      ]
    }
  }
}
</script>

<style>

</style>