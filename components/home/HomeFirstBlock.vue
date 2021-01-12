<template>
  <article class="bg-gradient-to-r from-page-primary relative overflow-hidden">
    <div class="mx-auto px-8 md:px-16 lg:px-24 xl:px-32 lg:container relative">
      <h1 class="font-bold text-primary text-4xl leading-10 max-w-xl md:text-6xl md:leading-16">
        Powerful DeFi Management
      </h1>
      <p class="text-quaternary text-lg leading-7 mt-8 max-w-lg">
        We allow developers of all stripes to start leveraging the full potential of Decentralised Finance.
      </p>
      <div class="flex justify-center sm:justify-start items-center flex-wrap mt-8">
        <a
          small
          class="sm:mr-8 px-4 h-8 transition duration-150 cursor-pointer font-semibold items-center bg-primary-blue rounded text-sm flex text-white hover:text-font-primary"
          >Dashboard<svg
            class="ml-2"
            width="12"
            height="10"
            viewBox="0 0 12 10"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path class="stroke-current" d="M6.5 1L10.5 5M10.5 5L6.5 9M10.5 5H0" stroke-width="1.7" />
          </svg>
        </a>
        <nuxt-link
          class="sm:mr-8 px-4 h-8 bg-tertiary-blue text-primary-blue text-sm w-full mt-4 sm:mt-0 sm:w-auto text-center flex rounded items-center"
          to="/documentation"
          >Documentation</nuxt-link
        >
      </div>
      <div class="dashboard-screenshot absolute hidden md:block shadow-xl z-20 xl:right-0">
        <img
          srcset="/images/dashboard-w850.png, /images/dashboard-w1275.png 1.5x, /images/dashboard-w1700.png 2x"
          src="/images/dashboard-w1700.png"
          alt="dashboard image"
          class="w-full rounded-xl"
        />
      </div>
    </div>
  </article>
</template>

<script>
export default {}
</script>

<style lang="scss" scoped>
.dashboard-screenshot {
  width: 650px;
  top: -60px;
  right: -470px;
}

@media screen and (min-width: 880px) {
  .dashboard-screenshot {
    right: -350px;
  }
}
@media screen and (min-width: 1024px) {
  .dashboard-screenshot {
    right: -220px;
  }
}
@media screen and (min-width: 1140px) {
  .dashboard-screenshot {
    width: 850px;
    right: -500px;
  }
}
@media screen and (min-width: 1440px) {
  .dashboard-screenshot {
    right: -200px;
  }
}
</style>
