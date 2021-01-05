<template>
  <div class="hello">
    <van-tabbar v-model="active" @change="onChange">
      <van-tabbar-item icon="home-o">首页</van-tabbar-item>
      <van-tabbar-item icon="search">商品</van-tabbar-item>
      <van-tabbar-item icon="friends-o">购物车</van-tabbar-item>
      <van-tabbar-item icon="setting-o">我的</van-tabbar-item>
    </van-tabbar>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'Footer',
  props: {
    msg: String,
  },
  data() {
    return {
      active: 0,
    }
  },
  methods: {
    onChange(index: number) {
      switch(index) {
        case 0:
          this.$router.push('/index');
          break;
        case 1:
          this.$router.push('/product');
          break;
        case 2:
          this.$router.push('/shop');
          break;
        case 3:
          this.$router.push('/my');
          break;
        default:
          break;
      }
    }
  },
  mounted() {
    console.log(location)
  },
});
</script>

<style scoped lang="less">
.van-tabbar-item--active {
  color: rgb(41 216 125);
}
</style>
