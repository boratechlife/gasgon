<template>
  <nav
    class="md:h-[99px] flex flex-col md:flex-row items-center px-3 md:px-12 lg:px-20"
  >
    <div class="flex items-center justify-between w-full md:w-max">
      <img src="/logo.png" class="h-14 md:h-auto" alt="Gasgon logo" />
      <button
        @click="showNav = !showNav"
        class="p-0.5 border border-black/5 h-max md:hidden"
      >
        <svg
          v-show="!showNav"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke-width="1.5"
          stroke="currentColor"
          class="w-6 h-6"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            d="M3.75 5.25h16.5m-16.5 4.5h16.5m-16.5 4.5h16.5m-16.5 4.5h16.5"
          />
        </svg>

        <svg
          v-show="showNav"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke-width="1.5"
          stroke="currentColor"
          class="w-6 h-6"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            d="M6 18L18 6M6 6l12 12"
          />
        </svg>
      </button>
    </div>

    <div class="md:ml-auto py-5 md:p-0 hidden md:block">
      <ul
        class="flex gap-5 lg:gap-10 items-center text-base md:text-lg lg:text-3xl"
      >
        <li
          v-for="(link, index) in navLinks"
          class="text-[#696E71] font-poppins"
        >
          <NuxtLink :to="link.href">{{ link.title }}</NuxtLink>
        </li>
      </ul>
    </div>
    <div v-show="showNav" class="md:hidden mobile-nav py-5">
      <ul
        class="flex flex-col gap-5 lg:gap-10 items-center text-base md:text-lg lg:text-3xl"
      >
        <li
          v-for="(link, index) in navLinks"
          class="text-[#696E71] font-poppins"
        >
          <NuxtLink :to="link.href">{{ link.title }}</NuxtLink>
        </li>
      </ul>
    </div>
  </nav>
</template>

<script setup lang="ts">
interface Nav {
  title: string;
  href: string;
}

const showNav = ref(false);

const navLinks = ref<Nav[]>([
  {
    title: "Home",
    href: "/",
  },
  {
    title: "Aboutus",
    href: "/",
  },
  {
    title: "Programs",
    href: "/",
  },
  {
    title: "Contactus ",
    href: "/",
  },
  {
    title: "Donate",
    href: "/",
  },
]);
</script>
