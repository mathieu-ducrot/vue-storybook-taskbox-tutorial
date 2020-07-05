<template>
  <div id="app">
    <inbox-screen />
  </div>
</template>

<script>
import store from '@/store'
import InboxScreen from '@/components/InboxScreen.vue'

export default {
  name: 'app',
  store,
  components: {
    InboxScreen
  }
}
</script>

<style>
@import './assets/css/index.css';
</style>
