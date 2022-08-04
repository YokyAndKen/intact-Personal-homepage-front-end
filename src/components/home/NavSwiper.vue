<template>
  <div class="nav_swiper">
    <div class="nav_swiper_main">
      <div class="swiper_t">
        <ul @mouseleave="mouseOut">
          <li v-for="item in state.firstCategoryList" :key="item.id" @mouseenter='mouseHover(item.id)'><span>{{item.categoryName}}</span>
          <el-icon><ArrowRight /></el-icon></li>
          <li @mouseenter='mouseHover(9)'><span>数据库</span>
          <el-icon><ArrowRight /></el-icon></li>
          <div class="hover_pop" v-show="state.isShowPop">
            <div class="pop_top">
              <h3 class="pop_title">基础知识</h3>
              <div>
                <div>知识点：</div>
                <ul>
                  <li>Vue.js</li>
                  <li>React.js</li>
                  <li>Typescript</li>
                  <li>HTML/CSS</li>
                </ul>
              </div>
            </div>
            <div class="pop_bottom">
              <ul>
                <li v-for="item in 4">
                  <img src="@/assets/sea_stone.jpg">
                  <div>
                    <div style="font-size: 16px; color: #333333; font-weight: 600;">介绍文字</div>
                    <div style="font-size: 14px; color: #808080;">等级</div>
                    <div style="font-size: 14px; color: #3586FF;">状态</div>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </ul>
        <div class="carousel_img">
          <el-carousel :interval="3000" arrow="always" height="370px" v-if="state.sliderImgList.length > 0">
            <el-carousel-item v-for="item in state.imgList" :key="item.name ">
              <img :src="item.src">
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
import { ArrowRight } from '@element-plus/icons-vue'
import { getSliders } from '@/api/slider.js'
import { getFirstCategorys, getSecondCategorys } from '@/api/course.js'
import { reactive } from '@vue/reactivity'
import useUtil from '@/utils/getImgMethods.js';
// import { getAssetsFile } from '@/utils/getImgMethods.js'

const state = reactive({
  sliderImgList: [],
  firstCategoryList: [],  // 一级分类数据
  isShowPop: false,
  imgList: [
    {
      name: "scroll_1",
      src: useUtil.getAssetsFile('scroll_1.png'),
    },
    {
      name: "scroll_2",
      src: useUtil.getAssetsFile('scroll_2.png'),
    },
    {
      name: "scroll_3",
      src: useUtil.getAssetsFile('scroll_3.png'),
    },
    {
      name: "scroll_4",
      src: useUtil.getAssetsFile('scroll_4.png'),
    },
    {
      name: "scroll_5",
      src: useUtil.getAssetsFile('scroll_5.png'),
    },
    {
      name: "scroll_6",
      src: useUtil.getAssetsFile('scroll_6.png'),
    },
  ]
})

//生命周期
onBeforeMount (() => {
  //轮播图数据
  getSliders().then(res=>{
    console.log(res)
    state.sliderImgList = res.data.list
    console.log('轮播图列表',state.sliderImgList)
  })

  //一级分类请求数据
  getFirstCategorys().then(res => {
    console.log(res.data.list)
    state.firstCategoryList.push(res.data.list[0])
    state.firstCategoryList.push(res.data.list[1])
    state.firstCategoryList.push(res.data.list[6])
    state.firstCategoryList.push(res.data.list[7])
    state.firstCategoryList.push(res.data.list[8])
  })
})

// 鼠标移入一级菜单，触发hover弹框
const mouseHover = (id) => {
  getSecondCategorys({
    categoryId: id
  }).then(res=>{
    console.log(res)
  })
  state.isShowPop = true;
}

//鼠标移出一级菜单，隐藏hover弹框
const mouseOut = () => {
  state.isShowPop = false;
}


</script>

<style scoped>
.nav_swiper {
  background-image: linear-gradient(to bottom,rgba(0, 0, 0, 0.8),rgba(0, 0, 0, 0));
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
.swiper_t>ul {
  position: relative;
  width: 160px;
  height: 370px;
  background: #2B283D;
  border-radius: 11px 0 0 0;
  /* border: 1px solid yellowgreen; */
  /* padding-top: 5px; */
}
.swiper_t>ul>li {
  /* border: 1px solid red; */
  border: 1px solid transparent;
  width: 138px;
  height: 40px;
  margin-top: 15px;
  /* padding-top: 10px; */
  align-items: center;
  color: #fff;
  font-size: 16px;
  display: flex;
  justify-content: space-between;
  padding-left: 10px;
  padding-right: 10px;
  cursor: pointer;
}
.swiper_t>ul>li:hover{
  background: linear-gradient(
    90deg,
    /* #0a1627 0%, */
    rgba(0, 0, 0, 0.8) 0%,
    rgba(0, 0, 0, 0.1) 90%
  );
  border: 1px solid;
  border-image: linear-gradient(
      90deg,
      rgba(23, 193, 212, 0),
      #626aef,
      #626aef,
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
.el-carousel__item img {
  width: 100%;
  height: 370px;
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
.hover_pop {
  position: absolute;
  top: 0;
  left:160px;
  z-index: 99;
  width: 725px;
  height: 370px;
  background: rgba(255, 255, 255, 0.7);
  /* background: red; */
  /* background: rgba(0, 0, 0, 0.8); */
  border-radius: 0 11px 0 0;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}
.pop_top {
  padding: 23px 30px;
  /* border: 1px solid yellowgreen; */
}
.pop_top>div {
  display: flex;
  margin-top: 11px;
}
.pop_top>div ul {
  display: flex;
  flex-wrap: wrap;
  margin-left: 7px;
}
.pop_top>div ul li+li{
  margin-left: 20px;
}
.pop_top>div ul li:hover {
  color: #626aef;
  cursor: pointer;
}
.pop_bottom {
  width: 100%;
  height: 60%;
  background: rgba(255, 255, 255, 0.6);
}
.pop_bottom>ul {
  padding : 16px 30px;
  display: flex;
  justify-content: space-around;
  flex-wrap: nowrap;
  /* border: 1px solid ; */
  flex-wrap: wrap;
}
.pop_bottom img {
  width: 150px;
  height: 81px;
}
.pop_bottom>ul li {
  display: flex;
  margin-bottom: 20px;
  width: 40%;
  /* border: 1px solid yellowgreen;*/
}
.pop_bottom>ul li>div {
  display: flex;
  flex-direction: column;
  margin-left: 5px;
  margin-top: 6px;
}
.pop_bottom>ul li div{
  margin-top: 3px;
}
</style>