<template>
  <!-- Hero Section  -->
  <section id="hero">
    <!-- Flex Container  -->
    <div class="container flex flex-col-reverse md:flex-row items-center px-6 mx-auto mt-10 space-y-0 md:space-y-0">
      <!-- Left-item  -->
      <div class="flex flex-col mb-32 space-y-12 md:w-1/2">
        <h1 class="max-w-md text-4xl font-bold text-center md:text-5xl md:text-left">
          Bring everyone together to build better products.
        </h1>
        <p data-aos="zoom-in" data-aos-delay="1500" class="max-w-sm text-center text-DarkGrayishBlue md:text-left">
          Manage makes it simple for software teams to plan day-to-day 
          tasks while keeping the larger team goals in view.
        </p>
        <div class="flex justify-center md:justify-start">
          <a href="#" class="p-3 px-6 text-white bg-brightRed rounded-full baseline hover:bg-brightRedLight">Get Started</a>
        </div>
      </div>

      <!-- Right-item (Image) -->
      <div class="md:w-1/2 animate__animated animate__fadeInRight animate__delay-1s">
        <img src="/illustration-intro.svg" alt="">
      </div>
    </div>
  </section>
</template>

<script>
export default {

}
</script>

<style>

</style>