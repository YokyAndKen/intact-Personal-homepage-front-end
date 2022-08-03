<template>
	<Header></Header>
	<div class='detail-title'>
		<div class='detail-main'>
			<div class='detail-map'>
				 <el-breadcrumb :separator-icon="ArrowRight">
			    <el-breadcrumb-item>课程</el-breadcrumb-item>
			    <el-breadcrumb-item>免费课</el-breadcrumb-item>
			    <el-breadcrumb-item>2021Android从零入门到实战</el-breadcrumb-item>
			  </el-breadcrumb>
			</div>
			<div class='detail-name'>2021Android从零入门到实战</div>
			<div class='detail-content'>难度 入门</div>
		</div>
	</div>
	<div class='detail-container'>
		<div class='tab-name'>
			<ul>
				<li class='active'>章节</li>
				<li>下载笔记代码</li>
			</ul>
		</div>
		<div class='tab-chapters'>
			<div class='tab-txt'>
				<div class='txt-content'>简介：全面系统地介绍国有资产管理的基本理论、基本知识、基本方法和我国现行国有资产管理方面的政策与制度，努力反映我国国有资产管理体制改革的最新成果和国内外国有资产。    
				</div>
				<div class='txt-btn'>
					<div class='payment'>立即购买</div>
					<div class='add-cart'>加入购物车</div>
				</div>
			</div>
			<div class='detail-list'>
				<div class='item'>
					<div class='item-title'>
						<div class='item-name'>第1章 开发语言内容各有不同</div>
						<div class='item-key'>从零开始完整的讲解了力推且备受万千开发者喜爱的语言</div>
					</div>
					<ul>
						<li>
							<div class='course'>
								<img src="@/assets/detail-video.png" />
								<div>视频：1-1开发语言必会知识（10:44）</div>
							</div>
							<div class='course-video'>开始学习</div>
						</li>
						<li>
							<div class='course'>
								<img src="@/assets/detail-video.png" />
								<div>视频：1-1开发语言必会知识（10:44）</div>
							</div>
							<div class='course-video'>开始学习</div>
						</li>
						<li>
							<div class='course'>
								<img src="@/assets/detail-video.png" />
								<div>视频：1-1开发语言必会知识（10:44）</div>
							</div>
							<div class='course-video'>开始学习</div>
						</li>
						<li>
							<div class='course'>
								<img src="@/assets/detail-video.png" />
								<div>视频：1-1开发语言必会知识（10:44）</div>
							</div>
							<div class='course-video'>开始学习</div>
						</li>
					</ul>
				</div>
				<div class='item'>
					<div class='item-title'>
						<div class='item-name'>第1章 开发语言内容各有不同</div>
						<div class='item-key'>从零开始完整的讲解了力推且备受万千开发者喜爱的语言</div>
					</div>
					<ul>
						<li>
							<div class='course'>
								<img src="@/assets/detail-video.png" />
								<div>视频：1-1开发语言必会知识（10:44）</div>
							</div>
							<div class='course-video'>开始学习</div>
						</li>
						<li>
							<div class='course'>
								<img src="@/assets/detail-video.png" />
								<div>视频：1-1开发语言必会知识（10:44）</div>
							</div>
							<div class='course-video'>开始学习</div>
						</li>
					</ul>
				</div>
			</div>
		</div>
		<!-- <div class='tab-main'></div> -->
	</div>
	<Footer></Footer>
</template>

<script setup>
//引入组件
import Header from '@/components/common/Header.vue'
import Footer from '@/components/common/Footer.vue'
//element
import { ArrowRight } from '@element-plus/icons-vue'
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
  font-weight: 600;
  letter-spacing: 2px;
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
.item ul{

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
</style>
