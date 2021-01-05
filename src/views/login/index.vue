<template>
  <div class="Login">
    <div>
      <p><input type="text" v-model="username" placeholder="请输入用户名"></p>
      <p><input type="password" v-model="password" placeholder="请输入密码"></p>
      <p><button @click="onSubmit">提交</button></p>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue';
import { useRouter } from 'vue-router';
export default defineComponent({
  name: 'Login',
  props: {
    msg: String,
  },
  setup(props,context) {
    const router = useRouter();
    console.log(props, 'props')
    console.log(context, 'context')
    const username=ref('');
    const password=ref('');
    // 提交事件
    const onSubmit = (values: object) => {
      console.log('submit', values);
      console.log(username, password);
      localStorage.setItem('token', '11111111111111111')
      router.push("/index");
    }
    return {
      username,
      password,
      onSubmit
    }
  }
});
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="less">
.Login {
  width: 100%;
  height: 100vh;
  background: url('../../assets/bg.png') no-repeat top;
  background-size: 100% 120px;
  padding: 10px;
  box-sizing: border-box;
  display: flex;
  align-items: center;
  div {
    width: 400px;
    height: 400px;
    position: relative;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
  }
  input {
    display: block;
    width: 100%;
    height: 30px;
    line-height: 30px;
    color: #000;
    font-size: 14px;
    padding: 0 16px;
    box-sizing: border-box;
    border-radius: 10px;
    border: none;
    border: 1px solid rgb(41 216 125);
    margin-bottom: 10px;
  }
  button {
    width: 100%;
    height: 40px;
    background-color: rgb(41 216 125);
    border-radius: 10px;
    border: none;
    color: #fff;
  }
}
</style>
