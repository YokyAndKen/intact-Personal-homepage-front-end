<template>
  <header> 
    <div class="header_main">
      <div class="header_l">
        <h1 class="logo">
          <img src="@/assets/tom_logo.png">
        </h1>
        <ul>
          <li class="active">首页</li>
          <li>课程</li>
          <li>会员</li>
        </ul>
      </div>
      <div class="header_r">
        <div class="search">
          <input type="" name="" placeholder="搜索">
          <el-icon :size="22" ><Search /></el-icon>
        </div>
        <div class="shop"> <el-icon :size="22" style="margin-top: 4px;"><ShoppingCart /></el-icon> </div>
        <div class="login">
          登录/注册
        </div>
      </div>
    </div>
  </header>
</template>

<script setup>
  import { Search } from '@element-plus/icons-vue'
  import { ShoppingCart } from '@element-plus/icons-vue'

</script>

<style scoped>
  header{
    width: 100%;
    height: 80px;
  }
  .header_main {
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 1000px;
    height: 80px;
    margin: 0 auto;
    /* background: grey; */
  }
  .logo {
     margin-right: 50px;
  }
  img {
    width: 80px;
    height: 80px;
  }
  .header_l {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
  .header_l ul{
    display: flex;
    height: 50px;

  }
  .header_l ul li {
    margin-right: 80px;
    font-size: 16px;
    letter-spacing: 5px;
    color: #808080;
    line-height: 50px;
    font-weight: 600;
    cursor: pointer;
  }
  .header_l ul li :hover {
    color: #3585FF;
  }
  .active {
    position: relative;
    color: #626aef !important;
    font-family: MicrosoftYaHei-Bold;
  }
  .active::after {
    content:'';
    position: absolute;
    bottom: 0;
    left: 0;
    width: 140%;
    height: 3px;
    margin-left: -22%;
    background: #626aef;
  }
  .header_r{
    display: flex;
    align-items: center;
  }
  .header_r .search{
      width: 300px;
      padding: 0 10px;
      height: 43px;
      background: #F0F2F4;
      opacity: 1;
      border-radius: 4px;
      display: flex;
      align-items: center;
      cursor: pointer;
  }
  .header_r .search input{
    margin-left: 5px;
    width: 270px;
    height: 100%;
    font-size: 16px;
    border: none;
    background: transparent;
    outline: none;
    /* border: red; */
  }
  .header_r .shop {
    margin-right: 40px;
    margin-left: 40px;
    cursor: pointer;
  }
  .header_r .login {
    height: 21px;
    width: 80px;
    font-size: 16px;
    font-family: MicrosoftYaHei;
    color: #808080;
    letter-spacing: 1px;
    cursor: pointer;
  }
</style>