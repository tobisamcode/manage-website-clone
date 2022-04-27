<template>
  <!-- Features Section  -->
  <section id="features">
    <!-- Flex container  -->
    <div class="container flex flex-col px-4 mx-auto mt-10 space-y-12 md:space-y-0 md:flex-row">

      <!-- left-items  -->
      <div class="flex flex-col space-y-12 md:w-1/2">
        <h2 class="max-w-md text-4xl font-bold text-center md:text-left">
          What’s different about Manage?
        </h2>
        <p class="max-w-sm text-center text-DarkGrayishBlue md:text-left">
          Manage provides all the functionality your team needs, without 
          the complexity. Our software is tailor-made for modern digital 
          product teams. 
        </p>
      </div>

      <!-- right-items  -->
      <div class="flex flex-col space-y-8 md:w-1/2">
        <!-- list Items -->
        <div v-for="item in items" :key="item.id" class="flex flex-col space-y-3 md:space-y-0 md:space-x-6 md:flex-row">
          <!-- Heading -->
          <div class="rounded-l-full bg-brightRedSupLight md:bg-transparent">
            <div class="flex items-center space-x-2">
              <div class="px-4 py-2 text-white rounded-full md:py-1 bg-brightRed">
                {{ item.id }}
              </div>
              <h3 class="text-base font-bold md:mb-4 md:hidden">
                {{ item.title }}
              </h3>
            </div>
          </div>
          <div>
            <h3 class="hidden mb-4 text-lg font-bold md:block">
              {{ item.title }}
            </h3>
            <p class="text-DarkGrayishBlue"> {{ item.paragraph }}} </p>
          </div>
        </div>
   
      </div>
    </div>
  </section>
</template>

<script>
export default {
  data() {
    return {
      items: [
        {
          id: '01',
          title: 'Track company-wide progress',
          paragraph: 'See how your day-to-day tasks fit into the wider vision. Go from tracking progress at the milestone level all the way done to the smallest of details. Never lose sight of the bigger picture again.'
        },
        {
          id: '02',
          title: 'Advanced built-in reports',
          paragraph: 'Set internal delivery estimates and track progress toward company goals. Our customisable dashboard helps you build out the reports you need to keep key stakeholders informed.'
        },
        {
          id: '03',
          title: 'Everything you need in one place',
          paragraph: 'Set internal delivery estimates and track progress toward company goals. Our customisable dashboard helps you build out the reports you need to keep key stakeholders informed.'
        }
        
        
      ]
    }
  }
}
</script>

<style>

</style>