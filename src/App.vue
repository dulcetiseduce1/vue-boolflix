<template>
  <div id="app">
    <VHeader/>
    <VMain/>
    <VCard/>
  </div>
</template>

<script>
import VHeader from './components/VHeader.vue'
import VMain from './components/VMain.vue'
import VCard from './components/VCard.vue'

export default {
  name: 'App',
  components: {
    VHeader,
    VMain,
    VCard
}
}
</script>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
}
</style>