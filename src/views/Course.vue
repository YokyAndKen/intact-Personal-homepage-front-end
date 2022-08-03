<template>
	<Header></Header>
	<div class='course-filter'>
		<div class="filter-main">
			<div class='filter-item'>
				<div class='item-title'>课程方向：</div>
				<ul>
					<li class='filter-all'>全部</li>
					<li 
						v-for='item in firstList'
						:key='item.id'
						@click='evtFirst(item.id)'
            :class="currentId == item.id? 'filter-all':''"
					>{{ item.categoryName }}</li>
				</ul>
			</div>
			<div class='filter-item'>
				<div class='item-title'>课程分类：</div>
				<ul>
					<li class='filter-all'>全部</li>
					<li
						v-for='item in secondList'
						:key='item.id'
						@click='evtSecond(item.id)'
            :class="currentId == item.id? 'filter-all':''"
					>{{ item.categoryName }}</li>
				</ul>
			</div>
			<div class='filter-item'>
				<div class='item-title'>课程难度：</div>
				<ul>
					<li class='filter-all'>全部</li>
					<li
						v-for='item in levelList'
						:key='item.id'
						@click='evtLevel(item.id)'
            :class="currentId == item.id? 'filter-all':''"
					>{{ item.name }}</li>
				</ul>
			</div>
		</div>
	</div>
	<div class='course-list'>
		<div class='list-main'>
			<div class='list-t'>
				<ul>
					<li
						v-for='item in courseFilter'
						:key='item.id'
						:class='item.id!=4?"line":""'
						@click='evtFilter(item.id,item.status)'
					>
						<span
							:class='currentIdx == item.id ? "active":""'
						>{{ item.name }}</span>
						<div class='caret' v-if='item.id==4'>
							<el-icon :size='8' :color=' item.status == "price-desc"?"#2C81FF":"" '><CaretTop /></el-icon>
							<el-icon :size='8' :color=' item.status == "price-asc"?"#2C81FF":"" '><CaretBottom /></el-icon>
						</div>
					</li>
				</ul>
				<div>
					<el-radio-group v-model="radio" @change='tabCourse'>
					    <el-radio :label="1">免费课程</el-radio>
					    <el-radio :label="2">会员免费课程</el-radio>
					</el-radio-group>
				</div>
			</div>
			<ul class='list-c'>
				<li
					v-for='item in courseList'
					:key='item.id'
				>
					<img :src="item.courseCover" />
					<div class='course-content'>
						<h3>{{ item.courseName }}</h3>
						<div>{{courseTypeFn( item.courseLevel )}} · {{ item.clicks }}人报名</div>
						<div class='price'>
							<div class='price-vip'>会员专享</div>
							<div class='price-total'>¥ {{ item.discountPrice }}</div>
						</div>
					</div>
				</li>
			</ul>
			<div class='list-b'>
				<el-pagination background layout="prev, pager, next" :total="courseTotal" @current-change="currentChange"/>
			</div>
		</div>
	</div>
	<Footer></Footer>
</template>


<script setup>
//引入组件
import Header from '@/components/common/Header.vue'
import Footer from '@/components/common/Footer.vue'
//mixin
import courseType from '@/mixins/courseType.js'
let { courseTypeFn } = courseType();
//element
import { CaretTop , CaretBottom  } from '@element-plus/icons-vue'
//api
import {  getFirstCategorys , getSecondCategorys , courseSearch } from '@/api/course.js'
//一级分类的数据
let firstList = ref([]);
//二级分类的数据
let secondList = ref([]);
//课程数据
let courseList = ref([]);
//课程总数量
let courseTotal = ref(0);
//课程难度
let levelList = ref([
	{name:'初阶',id:1},
	{name:'中阶',id:2},
	{name:'高阶',id:3}
]);
//切换class
let currentId = ref(null)
//查询课程的参数
let courseParams = reactive({
	pageNum:1,
	pageSize:8,
	entity:{
		firstCategory:'',
		secondCategory:'',
		courseLevel:'',
		sortBy:'',
		isMember:'',
		isFree:''
	}
})
//生命周期
onBeforeMount(()=>{
	//获取一级分类
	getFirstCategorys().then(res=>{
		firstList.value.push(res.data.list[0]);
		firstList.value.push(res.data.list[1]);
		firstList.value.push(res.data.list[6]);
		firstList.value.push(res.data.list[7]);
		firstList.value.push(res.data.list[8]);
	})
	//获取二级分类
	secondCategorys({
		categoryId:-1
	})
	//查询课程
	getCourseSearch(courseParams);
})
//获取二级分类
const secondCategorys = (params)=>{
	getSecondCategorys(params).then(res=>{
		secondList.value = res.data.list;
	})
}
//查询课程
const getCourseSearch = (params)=>{
	courseSearch(params).then(res=>{
		courseList.value = res.data.pageInfo.list;
		//课程总数量
		courseTotal.value = res.data.pageInfo.total;
	})
}

//点击一级分类
const evtFirst = ( id )=>{
  currentId.value = id;
	//获取二级分类
	secondCategorys({
		categoryId:id
	})
	//查询课程
	courseParams.entity.firstCategory = id;
	courseParams.entity.courseLevel = '';
	courseParams.entity.secondCategory = '';
	courseParams.entity.isMember = '';
	courseParams.entity.isFree = '';
	getCourseSearch(courseParams);
}
//点击二级分类
const evtSecond = ( id )=>{
  currentId.value = id;
	courseParams.entity.secondCategory = id;
	courseParams.entity.courseLevel = '';
	courseParams.entity.isMember = '';
	courseParams.entity.isFree = '';
	getCourseSearch(courseParams);
}
//点击课程难度
const evtLevel = ( id )=>{
  currentId.value = id;
	courseParams.entity.courseLevel = id;
	getCourseSearch(courseParams);
}

//课程条件筛选的数据
let courseFilter = ref([
	{id:1,name:'综合'},
	{id:2,name:'最新课程'},
	{id:3,name:'最多购买'},
	{id:4,name:'价格',status:''},
]);

//控制class切换
let currentIdx = ref(1);
//点击课程筛选
const evtFilter = ( id , status )=>{

	//切换class
	currentIdx.value = id;

	if( id == 1 ){
		courseParams.entity.sortBy = '';
		courseFilter.value[3].status = '';
		courseParams.entity.isMember = '';
		courseParams.entity.isFree = '';
	}else if( id == 2 ){
		courseParams.entity.sortBy = 'time-desc';
		courseFilter.value[3].status = '';
		courseParams.entity.isMember = '';
		courseParams.entity.isFree = '';
	}else if( id == 3 ){
		courseParams.entity.sortBy = 'clicks-desc';
		courseFilter.value[3].status = '';
		courseParams.entity.isMember = '';
		courseParams.entity.isFree = '';
	}else if( id == 4 ){
		courseParams.entity.isMember = '';
		courseParams.entity.isFree = '';
		if( status == 'price-desc' || status == '' ){
			courseFilter.value[3].status = 'price-asc';
			status = 'price-asc';
		}else{
			courseFilter.value[3].status = 'price-desc';
			status = 'price-desc';
		}
		courseParams.entity.sortBy = status;
	}
	getCourseSearch(courseParams);
}

//免费课程 和 会员课程筛选
const radio = ref(3);

//点击免费课程 和 会员课程
let tabCourse = ( val )=>{
	if( val == '1' ){
	    courseParams.entity.isMember = '';
	    courseParams.entity.isFree = '1';
	}else if( val =='2' ){
	    courseParams.entity.isFree = '';
	    courseParams.entity.isMember = '1';
	}
	getCourseSearch(courseParams);
}

//切换页数
const currentChange = (val) => {
  courseParams.pageNum = val;
  getCourseSearch(courseParams);
}
</script>

<style scoped>
.course-filter{
	width: 100%;
	height: 197px;
	background: #F3F5F9;
}
.filter-main{
	display: flex;
	flex-direction: column;
	justify-content: space-around;
	width: 1000px;
	height: 197px;
	margin: 0 auto;
}
.filter-item{
	display: flex;
	align-items: center;
}
.item-title{
	margin-left: 20px;
	font-size: 14px;
	font-weight: bold;
	color: #333333;
}
.filter-item ul{
	display: flex;
	align-items: center;
	justify-content: center;
}
.filter-item ul li{
	margin-right: 30px;
	font-size: 14px;
	font-weight: 400;
	color: #515759;
	cursor: pointer;
  padding: 0 3px;
}
.filter-item ul li.filter-all{
	/* width: 50px; */
	line-height: 30px;
	text-align: center;
	color: #388fff;
    font-size: 14px;
    background: rgba(44,128,255,.1);
    border-radius: 5px;
}
.course-list{
	padding: 50px 0;
	background: #fff;
}
.list-main{
	width: 1000px;
	margin: 0 auto;
}
.list-t{
	display: flex;
	align-items: center;
	justify-content: space-between;
	width: 100%;
}
.list-t ul{
	display: flex;
}
.list-t ul li{
	display: flex;
	align-items: center;
	margin-right: 16px;
	font-size: 14px;
	font-weight: 400;
	color: #515759;
	cursor: pointer;
}
.list-t ul li + li{
	margin-left: 16px;
}
.list-t ul li.line{
	position: relative;
}
.list-t ul li.line:after{
	content: '';
	position: absolute;
	right: -16px;
	top: 0;
	width: 1px;
	height: 100%;
	background: #DBD9D9;
}
.list-t ul li .active{
	color: #2C81FF;
}
.caret{
	display: flex;
	flex-direction: column;
}
.list-c{
	display: flex;
	justify-content: space-between;
	flex-wrap: wrap;
}
.list-c li {
	float: left;
	margin-top: 38px;
	width: 240px;
	height: 275px;
	background: #FFFFFF;
	box-shadow: 1px 3px 3px rgba(27, 39, 94, 0.1);
	border-radius: 5px;
}
.list-c li:last-child:nth-child(4n+2){
  margin-right: calc((100% - 240px) / 3 * 2)
}
.list-c li:last-child:nth-child(4n+3){
  margin-right: calc((100% - 240px) / 3 * 1)
}
.list-c li img{
	width: 240px;
	height: 153px;
}
.course-content{
	padding: 7px 16px;
}
.course-content h3{
	font-size: 12px;
	color: #333333;
}
.course-content >div{
	padding: 7px 0;
	font-size: 12px;
	color: #808080;
}
.price{
	display: flex;
}
.price-vip{
	width: 64px;
	height: 16px;
	margin-right: 3px;
	text-align: center;
	color: #fff;
	background: linear-gradient(90deg, #FF928E 0%, #FE7062 99%);
	border-radius: 16px 0px 16px 0px;
}
.price-total{
	font-size: 12px;
	color: #FF727F;
}
.list-b{
	padding-top: 50px;
	width: 100%;
	display: flex;
	align-items: center;
	justify-content: center;
}
</style>