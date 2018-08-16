<template>
  <div id="app">

  <vue-progress-bar></vue-progress-bar>
  <transition name="fade">
    <router-view></router-view>
  </transition>

  </div>
</template>

<script>

export default {
  name: 'app',
  components: {

  }
}
</script>

<style>
@import './assets/css/default.css';

</style>
