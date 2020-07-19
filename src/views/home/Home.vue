<template>
  <div id="home">
    <Navabr class="home-nav">
    <div slot="center">购物车</div>
    </Navabr>
  </div>
</template>
<script>
import  Navabr from 'components/common/navbar/NavBar'
export default {
  name: 'Home',
  components:{
    Navabr
  }
}
</script>
<style>
.home-nav {
  background-color: var(--color-tint);
  color:seashell;
}
</style>