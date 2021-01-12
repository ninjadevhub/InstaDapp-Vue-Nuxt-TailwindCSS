<template>
  <header :class="{ 'bg-white': menuOpened }">
    <nav class="px-8 md:px-16 lg:px-24 xl:px-32 mx-auto lg:container">
      <div class="mx-auto">
        <div class="flex items-center justify-between h-20">
          <nuxt-link
            to="/"
            class="flex items-center text-xl font-semibold"
            :class="menuOpened ? 'text-primary-blue' : 'text-white'"
          >
            <img class="h-6" src="../static/images/logo.svg" />
          </nuxt-link>
          <ul class="items-center justify-around hidden lg:flex flex-grow px-8 xl:px-16 max-w-screen-md">
            <li class="text-sm text-font-primary">Use Cases</li>
            <li class="text-sm text-font-primary">Documentation</li>
            <li class="text-sm text-font-primary">Articles</li>
            <li class="text-sm text-font-primary">Old Portal</li>
          </ul>
          <a
            small
            class="ml-8 px-4 h-8 transition duration-150 cursor-pointer font-semibold items-center bg-primary-blue rounded text-sm bg-opacity-25 hidden lg:flex text-white hover:bg-opacity-75"
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

          <AppBtnSecondary small class="bg-opacity-50 bg-primary-blue lg:hidden" @click="toggleMenu">
            <div
              class="flex justify-center items-center h-6 w-6 px-1"
              :class="menuOpened ? 'text-primary-blue' : 'text-white'"
            >
              <svg
                v-if="menuOpened"
                class="fill-current flex-grow"
                viewBox="0 0 14 14"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M13.6777 2.36392L2.36398 13.6776L0.949768 12.2634L12.2635 0.949707L13.6777 2.36392Z" />
                <path d="M2.36398 0.949707L13.6777 12.2634L12.2635 13.6776L0.949768 2.36392L2.36398 0.949707Z" />
              </svg>

              <svg
                v-else
                class="fill-current flex-grow"
                viewBox="0 0 16 10"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M0 0H16V2H0V0Z" />
                <path d="M0 4H16V6H0V4Z" />
                <path d="M0 8H16V10H0V8Z" />
              </svg>
            </div>
          </AppBtnSecondary>
        </div>
      </div>
    </nav>

    <div v-if="menuOpened" ref="menu" class="dropdown-menu flex flex-col pt-8 items-center">
      <ul class="items-center justify-center flex flex-col max-w-screen-md">
        <li class="font-semibold py-6">Use Cases</li>
        <li class="font-semibold py-6">Documentation</li>
        <li class="font-semibold py-6">Articles</li>
        <li class="font-semibold py-6">Old Portal</li>
      </ul>
      <a
        small
        class="mt-10 px-4 h-10 flex-shrink transition duration-150 cursor-pointer flex font-semibold items-center bg-primary-blue rounded text-sm text-white hover:bg-primary-blue-hover"
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
    </div>
  </header>
</template>

<script>
import { ref } from '@nuxtjs/composition-api'
export default {
  setup() {
    const menuOpened = ref(false)

    function toggleMenu() {
      menuOpened.value = !menuOpened.value
    }
    return { toggleMenu, menuOpened }
  },
}
</script>

<style lang="scss" scoped>
.dropdown-menu {
  height: calc(100vh - 80px);
}
</style>
