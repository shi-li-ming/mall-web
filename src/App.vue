<template>
  <div id="app">
   <maintabar></maintabar>
   <router-view></router-view>
  </div>
</template>

<script>

import maintabar from './components/content/mainTabbar/MainTabBar'

export default {
  name: 'App',
  components: {
   maintabar
  }
}
</script>

<style>
 @import './assets/css/base.css'
</style>
