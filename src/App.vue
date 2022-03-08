<script setup>
import 'vfonts/Lato.css'
import 'vfonts/FiraCode.css'

import Header from './components/Header.vue'
</script>

<template>
  <n-space vertical size="large">
    <n-layout>
      <Header />
      <n-layout-content>
        <router-view></router-view>
      </n-layout-content>
      <n-layout-footer></n-layout-footer>
    </n-layout>
  </n-space>
</template>

<style lang="scss">
#app {
  font-family: v-sans, v-mono, other-fallbacks;
}

a {
  text-decoration: none !important;
}
</style>
