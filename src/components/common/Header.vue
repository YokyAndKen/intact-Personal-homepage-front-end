<template>
	<header>
		<div class='header-main'>
			<div class='header-l'>
				<h1 class='logo'>
					<img src="@/assets/tom_logo.png" />
				</h1>
				<ul>
					<li 
						v-for='item in topBar' 
						:key='item.id'
						:class=' item.id == currentId ? "active":"" '
						@click='tabBar(item)'
					>
						{{ item.title }}
					</li>
				</ul>
			</div>
			<div class='header-r'>
				<div class='search'>
					<input type="text" placeholder="搜索想要的课程" />
					<el-icon color='#999' :size='20'><Search /></el-icon>
				</div>
				<div class='shop'>
					<el-icon :size='20'><ShoppingCart /></el-icon>
				</div>
				<div class='login'>
					<router-link to='/login' style="color: #808080">登录/注册</router-link>
				</div>
			</div>
		</div>
	</header>
</template>

<script setup>
//element
import { Search , ShoppingCart } from '@element-plus/icons-vue'
//路由
let router = useRouter();
//topbar
let topBar = ref([
	{id:1,title:'首 页',name:'Home'},
	{id:2,title:'课 程',name:'Course'},
	{id:3,title:'会 员',name:'Vip'}
])
//切换头部class类
let currentId = ref(1);
//点击跳转
const tabBar = ( item )=>{
	currentId.value = item.id;
	router.push({
		name:item.name
	})
}
watch(()=> router.currentRoute.value.name,(toPath)=>{
	if( toPath =='Home'){
		currentId.value = 1;	
	}else if(  toPath =='Course' ){
		currentId.value = 2;	
	}else if(  toPath =='Vip' ){
		currentId.value = 3;	
	}
},{immediate:true})
</script>
<style scoped>
header{
	position: relative;
	z-index: 999;
	width: 100%;
	height: 80px;
	box-shadow: 0px 2px 4px rgba(0,0,0,0.1600);
}
.header-main{
	display: flex;
	justify-content: space-between;
	align-items: center;
	width: 1000px;
	height: 80px;
	margin: 0 auto;
}
.header-l {
	display: flex;
	justify-content: space-between;
	align-items: center;
}
.logo{
	width: 127px;
	height: 50px;
	margin-right: 51px;
}
.logo img{
  margin-top: -10px;
  margin-left: 20px;
	width: 70px;
	height: 70px;
}
.header-l ul{
	display: flex;
	height: 50px;
}
.header-l ul li{
	line-height: 50px;
	cursor: pointer;
	color: #808080;
}
.header-l ul li + li{
	margin-left: 79px;
	font-size: 16px;
  font-weight: 600;
}
.header-l ul li.active{
	position: relative;
	color: #626aef;
  font-weight: 600;
}
.header-l ul li.active:after{
	content: '';
	position: absolute;
	bottom: 0;
	left: 0;
	width: 140%;
	margin-left: -20%;
	height: 3px;
	background: #626aef;
}

.header-r{
	display: flex;
	align-items: center;
}
.header-r .search{
	display: flex;
	align-items: center;
	padding: 0 10px;
	width: 300px;
	height: 43px;
	background: #F0F2F4;
	border-radius: 5px;
}
.header-r .search input{
	width: 270px;
	height: 43px;
	border: none;
	background: transparent;
	outline: none;
}
.header-r .shop{
	display: flex;
	align-items: center;
	margin-left: 42px;
}
.header-r .login{
	margin-left: 39px;
	font-size: 16px;
	color: #808080;
	cursor: pointer;
  text-decoration: none;
}
.login router-link{
  text-decoration: none;
}
</style>

