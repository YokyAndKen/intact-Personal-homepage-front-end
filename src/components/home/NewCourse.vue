<template>
  <div class="new_course">
    <div class="new_course_main">
      <div class="new_course_t">

          <div class="title_hot">
            <div class="hot">HOT</div>
            <div class="hot_c"></div>
          </div>
          <div class="title_txt">
            newCourse
          </div>

        <div class="showCard" >
          <div class="card_self" v-for="item in 4" @click='goDetail(item.id)'>
              <div class="card_img">
                <img src="@/assets/card_img.png" alt="">
              </div>
              <div class="card_title">
                <h3>SouthWest University</h3>
              </div>
              <div class="card_intro">
                <p>Chongqing·Beibei</p>
              </div>
              <div class="card_tag">
                <el-tag>大学</el-tag>
                <el-button type="primary" size="small" color="#626aef" round>查看详情</el-button>
              </div>
              
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { onBeforeMount, ref } from 'vue'
import { mostNew } from '@/api/course.js'

//混入mixin
import courseType from '@/mixins/courseType.js'
let { courseTypeFn } = courseType()
let router = useRouter()

//生命周期获取数据
onBeforeMount(() => {
  mostNew({
    pageNum:1,
    pageSize:8
  }).then(res => {
    console.log(res)
  })
})


//进入课程详情页
const goDetail = (id) => {
  router.push({
    path: '/detail',
    query: {
      // 这里带参的value值要用字符串形式，不能用number类型
      id: '9515f28152db46cab430d17e7b061e54'
    }
  })
}
const currentDate = ref(new Date())
</script>

<style scoped>
  .new_course_main {
    width: 1000px;
    margin: 0 auto;
  }
  .new_course_t {
    display: flex;
    flex-wrap: wrap;
  }
  .title_hot {
    display: flex;
  }
  .title_hot .hot {
    width: 65px;
    line-height: 32px;
    text-align: center;
    color: #fff;
    background: linear-gradient(90deg, #FF727F 0%, #FC685C 100%);
    opacity: 1;
    border-radius: 5px 0 5px 5px;
  }
  .hot_c {
    width: 0px;
    height: 0;
    border: 3px solid #FC685C;
    border-bottom-color: transparent;
    border-right-color: transparent;
  }
  .title_txt {
    position: relative;
    margin-left: 5px;
    font-size: 23px;
    width: 800px;
    color: #333333;
  }
  .title_txt:after {
    content: '';
    position: absolute;
    margin-left: -5px;
    width: 20%;
    bottom:0;
    left: 0;
    z-index: -1;
    height: 9px;
    background: linear-gradient(90deg, #FBF84F 0%, #FEA935 100%);
    border-radius: 5px;
  }
  .time {
    font-size: 12px;
    color: #999;
  }

  .bottom {
    margin-top: 13px;
    line-height: 12px;
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  .button {
    padding: 0;
    min-height: auto;
  }

  .image {
    width: 100%;
    display: block;
  }
  .showCard {
    width: 1000px;
    /* border: 1px solid red; */
    /* margin-top: 10px; */
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
  }
  .card_self {
    width:300px;
    /* border: 1px solid yellowgreen; */
    height: 400px;
    margin-top: 30px;
    box-shadow: #ccc 0px 0px 10px;
  }
  .card_img {
    width: 100%;
    height: 300px;
    border-bottom: 1px solid #ccc;
  }
  .card_img img{
    width: 100%;
    height: 300px;
  }
  .card_title {
    padding-left: 15px;
    margin-top:10px;
  }
  .card_intro {
    padding-left: 15px;
    margin-top: 6px;
    font-size: 16px;
    color: #666;
  }
  .card_tag {
    margin-top: 8px;
    display: flex;
    justify-content: space-between;
    padding-left: 15px;
    padding-right: 15px;
  }
</style>