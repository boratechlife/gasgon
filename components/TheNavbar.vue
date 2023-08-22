<template>
  <nav
    :class="isFixed ? 'fixed-header' : ''"
    class="md:h-[99px] flex z-50 bg-white flex-col md:flex-row items-center px-3 md:px-12 lg:px-20"
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
        class="flex gap-5 lg:gap-10 items-center text-base md:text-lg lg:text-2xl"
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
onMounted(() => {
  window.addEventListener("scroll", handleScroll);
});

let isFixed = ref(false);

function handleScroll() {
  isFixed.value = window.pageYOffset > 100; // Adjust the scroll threshold as needed
}

onBeforeUnmount(() => {
  window.removeEventListener("scroll", handleScroll);
});
const navLinks = ref<Nav[]>([
  {
    title: "Home",
    href: "/",
  },
  {
    title: "About",
    href: "#about",
  },
  {
    title: "Programs",
    href: "#causes",
  },
  {
    title: "Contact ",
    href: "#contact-us",
  },
  {
    title: "Donate",
    href: "#donate",
  },
]);
</script>

<style scoped>
.fixed-header {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  background-color: #fff; /* Set your desired background color */
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1); /* Add a shadow if desired */
  z-index: 1000; /* Ensure it's above other content */
}
</style>
