<template>
  <div>
    <router-view></router-view>
    <Footer></Footer>
  </div>
</template>
<script>
import { defineComponent } from 'vue';
import Footer from './footer';

export default defineComponent({
  components:{
    Footer
  },
  name: 'HelloWorld',
  props: {
    msg: String,
  },
  data() {
    return {
      active: 0,
    }
  },
});
</script>
<style lang="less">

</style>
