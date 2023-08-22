<template>
  <main class="flex flex-col h-full font-inter">
    <TheNavbar />
    <slot />
    <TheFooter />
  </main>
</template>

<script setup>
useHead({
  titleTemplate: (pageTitle) => {
    return pageTitle ? `${pageTitle} - GasGon` : "GasGon";
  },
  meta: [
    {
      name: "description",
      content:
        "Welcome to Gasgon a nonprofit organization dedicated to making transformational change on the lives of children, vulnerable individuals and the elderly.",
    },
  ],
});
</script>

<style>
html {
  scroll-behavior: smooth;
}
</style>
