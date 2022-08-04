<template>
	<Header></Header>
  <!-- 头部带背景标题 -->
	<div class='detail-title'>
		<div class='detail-main'>
			<div class='detail-map'>
				 <el-breadcrumb :separator-icon="ArrowRight">
			    <el-breadcrumb-item>课程</el-breadcrumb-item>
			    <el-breadcrumb-item>免费课</el-breadcrumb-item>
			    <el-breadcrumb-item>{{ detail.courseName }}</el-breadcrumb-item>
			  </el-breadcrumb>
			</div>
			<div class='detail-name'>{{ detail.courseName }}</div>
			<div class='detail-content'>难度 入门</div>
		</div>
	</div>
  <!-- 主要内容 -->
	<div class='detail-container'>
    <!-- 切换模块栏 -->
		<div class='tab-name'>
			<ul>
				<li 
					@click='isActive=1'	
					:class=' isActive==1 ? "active":"" ' 
				>章节</li>
				<li 
					@click='isActive=2'
					:class=' isActive==2 ? "active":"" ' 
				>下载笔记代码</li>
			</ul>
		</div>
    <!-- 课程介绍 -->
		<div class='tab-chapters' v-if='isActive==1'>
			<div class='tab-txt'>
				<div class='txt-content'>{{ detail.bizCourseDetail ? detail.bizCourseDetail :'暂无课程介绍...' }}    
				</div>
				<div class='txt-btn'>
					<div class='payment'>立即购买</div>
					<div class='add-cart'>加入购物车</div>
				</div>
			</div>
      <!-- 课程详细章节 -->
			<div class='detail-list'>
				<div class='item' 
					v-for='item in bizCourseChapters'
					:key='item.id'
				>
					<div class='item-title'>
						<div class='item-name'>{{ item.chapterName }}</div>
						<div class='item-key'>{{ item.description }}</div>
					</div>
					<ul>
						<li
							v-for='k in item.children'
							:key='k.id'
						>
							<div class='course'>
								<img src="@/assets/detail-video.png" />
								<div>视频：{{ k.chapterName }}</div>
							</div>
							<div class='course-video'>开始学习</div>
						</li>
					</ul>
				</div>
			</div>
		</div>
		<div class='tab-main' v-if='isActive==2'>
			<ul>
				<li
					v-for='item in bizCourseAttachments'
					:key='item.id'
				>
					<div>{{ item.attachmentName }}</div>
					<div class='download'>下载资料</div>
				</li>
			</ul>
		</div>
	</div>
	<Footer></Footer>
</template>

<script setup>
//引入组件
import Header from '@/components/common/Header.vue'
import Footer from '@/components/common/Footer.vue'
//element
import { ArrowRight } from '@element-plus/icons-vue'
//api
import { getDetail } from '@/api/course.js'
//路由
let route = useRoute();

//章节 和 下载笔记代码切换数据
let isActive = ref(1);

//课程详情数据
let detail = reactive({
	courseName:''
})
//课程章节
let bizCourseChapters = ref([]);
//课程资料
let bizCourseAttachments = ref([]);

//生命周期
onBeforeMount(()=>{
	getDetail({
		courseId:route.query.id
	}).then(res=>{
		let data = res.data.data;
		detail.courseName = data.courseName;
		detail.bizCourseDetail = data.bizCourseDetail.description;
		bizCourseChapters.value = data.bizCourseChapters;
		bizCourseAttachments.value = data.bizCourseAttachments;
		console.log( data.bizCourseAttachments )
	})
})
</script>

<style scoped>
.detail-title{
	width: 100%;
	height: 183px;
	background: url('@/assets/detail-bg.png') no-repeat;
	background-size: 100% 100%;
}
.detail-main{
	display: flex;
	flex-direction: column;
	justify-content: space-around;
	width: 1000px;
	margin: 0 auto;
	height: 100%;
}
::v-deep .el-breadcrumb__separator{
	color: #fff;
}
::v-deep .el-breadcrumb__inner{
		color: #fff;
}
::v-deep .el-breadcrumb__item:last-child .el-breadcrumb__inner, .el-breadcrumb__item:last-child .el-breadcrumb__inner a, .el-breadcrumb__item:last-child .el-breadcrumb__inner a:hover, .el-breadcrumb__item:last-child .el-breadcrumb__inner:hover{
	color: #fff;
	font-weight: 500;
}
.detail-name{
	font-size: 27px;
	font-weight: 500;
	color: #FFFFFF;
}
.detail-content{
	font-size: 12px;
	font-weight: 400;
	color: #FFFFFF;
}
.tab-name{
	width: 100%;
	height: 57px;
	background: #FFFFFF;
	box-shadow: 0px 2px 4px rgba(0,0,0,0.1600);
}
.tab-name ul{
	display: flex;
	align-items: center;
	height: 57px;
	width: 1000px;
	margin: 0 auto;
	font-size: 16px;
	cursor: pointer;
}
.tab-name ul li + li{
	margin-left: 67px;
}
.tab-name ul li.active{
	position: relative;
	color: #388FFF;
	font-weight: bold;
}
.tab-name ul li.active:after{
	content: '';
	position: absolute;
	left: 50%;
	margin-left: -20%;
	bottom: -6px;
	width: 40%;
	height: 3px;
	background: #388FFF;
	border-radius: 1px;
}
.tab-chapters{
	width: 1000px;
	margin: 0 auto;
}
.tab-txt{
	margin: 29px 0;
	width: 100%;
	height: 147px;
	background: #FFFFFF;
	box-shadow: 0px 2px 4px rgba(0,0,0,0.0900);
	border-radius: 5px;
}
.txt-content{
	padding: 24px 27px;
}
.txt-btn{
	display: flex;
	justify-content: flex-end;
}
.payment{
	margin-right: 13px;
	width: 99px;
	height: 30px;
	line-height: 30px;
	text-align: center;
	font-size: 12px;
	color: #FFFFFF;
	background: #F11D1D;
	border-radius: 15px;
}
.add-cart{
	margin-right: 33px;
	width: 99px;
	height: 30px;
	line-height: 30px;
	text-align: center;
	font-size: 12px;
	color: #F11D1D;
	background: #FDE7E7;
	border-radius: 15px;
}
.detail-list{
	margin-top: 30px;
}
.item{
	margin-bottom: 10px;
	width: 100%;
	background: #FFFFFF;
	box-shadow: 0px 2px 4px rgba(0,0,0,0.0900);
	border-radius: 5px;
}
.item-title{
	padding: 16px 27px;
}
.item-name{
	font-size: 16px;
	font-weight: bold;
	color: #333333;
}
.item-key{
	margin-top: 10px;
	font-size: 12px;
	font-weight: 400;
	color: #5C5C5C;
}
.item ul li{
	display: flex;
	justify-content: space-between;
	padding: 16px 27px;
}
.item ul li .course{
	display: flex;
}
.course{
	display: flex;
	align-items: center;
	font-size: 14px;
	font-weight: 400;
	color: #333333;
}
.course img{
	width: 13px;
	height: 11px;
	margin-right: 7px;
}
.course-video{
	width: 73px;
	height: 20px;
	text-align: center;
	font-size: 12px;
	color: #FFFFFF;
	line-height:20px;
	background: #388FFF;
	border-radius: 8px;
}
.tab-main{
	width: 1000px;
	margin: 0 auto;
}
.tab-main ul{
	display: flex;
	flex-direction: column;
	width: 100%;
}
.tab-main ul li{
	display: flex;
	justify-content: space-between;
	padding: 10px;
	margin: 10px 0;
	line-height: 35px;
	font-size: 14px;
    background: #ffffff;
    border-radius: 8px;
    box-shadow: 0px 3px 6px rgb(0 0 0 / 9%);
}
.download{
	width: 100px;
    border: none;
    border-radius: 8px;
    font-size: 12px;
    text-align: center;
    color: #fff;
    background-color: #007bff;
}
</style>
