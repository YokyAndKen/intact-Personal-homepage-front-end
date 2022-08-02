<template>
  <footer>
    <div class="left_img">
      <img src="@/assets/footer.jpg">
      <img src="@/assets/foot-factory.png" style="margin-left: 40px;">
    </div>
    <div class="center">
      <ul>
        <li>关于我们</li>
        <li> | </li>
        <li>联系我们</li>
        <li> | </li>
        <li>意见反馈</li>
        <li> | </li>
        <li>版权声明</li>
      </ul>
      <div>版权声明文字 | 邮箱：yoky599@foxmail.com | 电话号码：13903934380</div>
    </div>
    <div class="right_img">
      <ul>
        <li>
          <img src="@/assets/guanfangwx.jpg">
          <span>微信</span>
        </li>
        <li>
          <img src="@/assets/laoshiwx.png" style="margin-left: 20px;">
          <span style="margin-left: 20px;">QQ</span>
        </li>
      </ul>
    </div>
  </footer>
</template>

<script setup>

</script>

<style scoped>

  footer {
    margin-top: 50px;
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 180px;
    background: rgba(0, 0, 0, 0.8);
  }
  .left_img img {
    width: 120px;
    height: 120px;
  }
  .center {
    display: flex;
    flex-direction: column;
    padding: 0 30px;
    text-align: center;
    align-items: center;
    /* justify-content: center; */
  }
  .center ul {
    color: #fff;
    display: flex;
  }
  .center ul li {
    font-size: 14px;
    margin-right: 15px;
  }
  .center div{
    color: #fff;
    font-size: 14px;
    margin-top: 15px;
  }
  .right_img img {
    width: 60px;
    height: 60px;
  }
  .right_img ul {
    display: flex;
  }
  .right_img ul li {
    display: flex;
    flex-direction: column;
    color: #fff;
    font-size: 15px;
    align-items: center;
    justify-content: center;
  }
  .right_img ul li +li {
    margin-left: 10px;
  }
  .right_img span {
    margin-top: 10px;
  }
</style>
