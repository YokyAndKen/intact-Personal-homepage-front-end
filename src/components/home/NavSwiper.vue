<template>
  <div class="nav_swiper">
    <div class="nav_swiper_main">
      <div class="swiper_t">
        <ul>
          <li><span>HTML/CSS</span>
          <el-icon><ArrowRight /></el-icon></li>
          <li><span>Typescript</span>
          <el-icon><ArrowRight /></el-icon></li>
          <li><span>ReactJS</span>
          <el-icon><ArrowRight /></el-icon></li>
          <li><span>Javascript</span>
          <el-icon><ArrowRight /></el-icon></li>
          <li><span>Angular</span>
          <el-icon><ArrowRight /></el-icon></li>
          <li><span>Java</span>
          <el-icon><ArrowRight /></el-icon></li>
        </ul>
        <div class="carousel_img">
          <el-carousel :interval="5000" arrow="always" height="370px">
            <el-carousel-item v-for="item in 4" :key="item">
              <h3 text="2xl" justify="center">{{ item }}</h3>
            </el-carousel-item>
          </el-carousel>
        </div>
      </div>
      <ul class="swiper_b">
          <li>
            <h3>
              <img src="@/assets/chuji.png" alt="">
            </h3>
            <div>
              <h4>Beginner</h4>
              <span>Introduction</span>
            </div>
          </li>
          <li>
            <h3>
              <img src="@/assets/zhongji.png" alt="">
            </h3>
            <div>
              <h4>Intermediate</h4>
              <span>Introduction</span>
            </div>
          </li>
          <li>
            <h3>
              <img src="@/assets/gaoji.png" alt="">
            </h3>
            <div>
              <h4>Senior</h4>
              <span>Introduction</span>
            </div>
          </li>
          <li>
            <h3>
              <img src="@/assets/xiangmu.png" alt="">
            </h3>
            <div>
              <h4>Project</h4>
              <span>Introduction</span>
            </div>
          </li>
          <li>
            <h3>
              <img src="@/assets/suanfa.png" alt="">
            </h3>
            <div>
              <h4>Algorithm</h4>
              <span>Introduction</span>
            </div>
          </li>
      </ul>
    </div>
  </div>
</template>

<script setup>
import {ArrowRight} from '@element-plus/icons-vue'

</script>

<style scoped>
  .nav_swiper {
    background: url('@/assets/transitionbg.png') no-repeat;
    width: 100vw;
    height: 600px;
    margin: 0 auto;
  }
  .nav_swiper_main {
    width: 1000px;
    margin: 0 auto;
    /* height: 200px; */
    /* background: gray; */
    padding: 47px 0;
  }
  .swiper_t {
    height: 370px;
    width: 100%;
    display: flex;
    justify-content: flex-start;
    flex-wrap: nowrap;
    border-radius: 11px 11px 0 0 ;
  }
  .swiper_t ul {
    width: 160px;
    height: 370px;
    background: #2B283D;
    border-radius: 11px 0 0 0;
    /* border: 1px solid yellowgreen; */
    /* padding-top: 5px; */
  }
  .swiper_t ul li {
    /* border: 1px solid red; */
    border: 1px solid transparent;
    width: 138px;
    height: 37px;
    margin-top: 20px;
    /* padding-top: 10px; */
    align-items: center;
    color: #fff;
    font-size: 16px;
    display: flex;
    justify-content: space-between;
    padding-left: 10px;
    padding-right: 10px;
  }
  .swiper_t ul li:hover{
    background: linear-gradient(
      90deg,
      /* #0a1627 0%, */
      #3585FF 0%,
      #2B283D 90%
    );
    border: 1px solid;
    border-image: linear-gradient(
        90deg,
        rgba(23, 193, 212, 0),
        rgb(23, 193, 212),
        rgb(23, 193, 212),
        rgba(23, 193, 212, 0)
      )
      1 1;
      /* background: yellowgreen; */
  }
  .carousel_img {
    width: 840px;
    height: 370px;
  }
  .el-carousel__item h3 {
  color: #475669;
  opacity: 0.75;
  line-height: 370px;
  margin: 0;
  text-align: center;
}

.el-carousel__item:nth-child(2n) {
  background-color: #99a9bf;
}

.el-carousel__item:nth-child(2n + 1) {
  background-color: #d3dce6;
}
.swiper_b {
  display: flex;
  justify-content: space-around;
  background: #fff;
  box-shadow: 0px 10px 30px #99a9bf;
}
.swiper_b li {
  display: flex;
  width: 200px;
  height: 120px;
  /* border:1px solid red; */
  justify-content: space-space;
  align-items: center;  
}
.swiper_b img {
  width: 50px;
  height: 50px;
  margin-right: 10px;
  margin-left: 25px;
}
.swiper_b li span {
  color:rgba(51, 51, 51, 1);
  font-size: 14px;
}
</style>