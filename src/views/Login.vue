<template>
	<div class='container'>
		<section>
			<div class="login-box">
	            <!-- 登录框右侧 -->
	            <div class="login-right">
	                            <!-- 账号登录 -->
                            <el-form
                              ref="ruleFormRef"
                              :model="ruleForm"
                              :rules="rules"
                              >
                                <el-form-item class="login-user" prop="username">
                                  <el-icon color="red"><avatar /></el-icon>
                                    <el-input v-model="ruleForm.username" placeholder="请输入您的用户名"/>
                                  </el-form-item>
                                  <el-form-item class="login-password" prop="userpwd">
                                  <el-icon><lock /></el-icon>
                                    <el-input type='password' v-model="ruleForm.userpwd" placeholder="请输入您的密码"/>
                                  </el-form-item>
                                  <el-form-item class="login-submit">
                                    <el-button type="primary" @click='userBtn(ruleFormRef)' color="#626aef">登录</el-button>
                                  </el-form-item>
                                </el-form>
	            </div>
	        </div>
		</section>
	</div>
    <Verify
        ref="verify"
        :captcha-type="'blockPuzzle'"
        :img-size="{width:'400px',height:'200px'}"
        @success="onSuccess"
    >
    </Verify>
</template>

<script setup>
//element-ui
import { Avatar , Lock , Iphone } from "@element-plus/icons-vue";
import { ElMessage } from 'element-plus'
//api
import { loginByJson , sendCaptcha , loginByMobile } from '../api/login'
//加密
import { Encrypt } from '../utils/aes'
//pinia
import { useUserStore } from '../store/user'
const userStore = useUserStore();
//路由
import { useRouter } from 'vue-router'
const router = useRouter()

//账号登录和短信登录切换
let current = ref(1);
//账号登录和短信登录
let loginTxt = ref([
	{id:1,text:'账号登录'},
	{id:2,text:'短信登录'}
])
const loginChange = ( id )=>{
	current.value = id;
}	
//账号密码登录
const ruleFormRef = ref('');
let ruleForm = reactive({
	username:'',
	userpwd:''
})
let rules = reactive({
  username: [
  	{ required: true, message: '请输入用户名', trigger: 'blur' },
    { min: 3, max: 11, message: '请输入3-11位用户名', trigger: 'blur' },
  ],
  userpwd:[
  	{ required: true, message: '请输入密码', trigger: 'blur' },
    { min: 3, max: 11, message: '请输入3-11位密码', trigger: 'blur' },
  ]
});
//账号密码点击登录
const userBtn = (formEl) => {
	if (!formEl) return
 	formEl.validate((valid, fields) => {
	    if (valid) {
			loginByJson({
				username:Encrypt(ruleForm.username),
				password:Encrypt(ruleForm.userpwd)
			}).then(res=>{
				//登录成功
				if( res.meta.code!="10006" ){
					ElMessage({
					    showClose: true,
					    message: res.meta.msg,
					    type: 'error',
					})
					return;
				} 
				userStore.setToken(res.data.accessToken);
        ElMessage({
            showClose: true,
            message: "登录成功!",
            type: 'success',
        })
        router.push('/');
			})
	    } else {
	      	ElMessage({
			    showClose: true,
			    message: '请输入正确格式',
			    type: 'warning',
			})
	    }
	})
}
//短信登录
let captcha = ref('发送验证码');
const ruleFormRefPhone = ref('');
let ruleFormPhone = reactive({
    phone:'',
    captcha:''
})
let rulesPhone = reactive({
  phone: [
    {required: true,message: '请输入手机号',trigger: 'blur',},
    {pattern: /^1[3456789]\d{9}$/,message: '目前只支持中国大陆的手机号码',},
  ],
  captcha:[
    { required: true,message: '请输入验证码', trigger: 'blur',}
  ]
});
//引入滑块组件
import Verify from '../components/verifition/Verify.vue'
let verify = ref();
let phoneTimer = null;
//验证码倒计时
const interCode = ()=>{
    let timer = 10;
    captcha.value = `重新发送10秒`;
    clearInterval( phoneTimer );
    phoneTimer = setInterval(()=>{
      timer--;
      if( timer <= 0 ){
        clearInterval( phoneTimer );
        captcha.value = '重新发送';
        timer = 10;
      }else{
        captcha.value = `重新发送${timer}秒`;
      }
    },1000);
}
//滑动成功
const onSuccess = ()=>{
    sendCaptcha({
        mobile:ruleFormPhone.phone
    }).then(res=>{
        if( res.meta.code == '200' ){
            //开始倒计时
            interCode();
        }
    })
}
//发送验证码
const sendCode = ()=>{
    //用户输入的手机号
    let phone = ruleFormPhone.phone;
    let regTel = /^1[3456789]\d{9}$/;
    if( !regTel.test( phone ) ){
        ElMessage({
            showClose: true,
            message: '请输入正确手机号',
            type: 'warning',
        })
        return;
    }
    verify.value.show();

}
//登录按钮
const phoneBtn = (formEl) => {
    if (!formEl) return
    formEl.validate((valid, fields) => {
        if (valid) {    
            //用户输入的手机号
            let mobile = Encrypt(ruleFormPhone.phone);
            //用户输入的验证码
            let captcha = ruleFormPhone.captcha;
            loginByMobile({ mobile, captcha }).then(res=>{
                //登录成功
                if( res.meta.code!="10006" ){
                    ElMessage({
                        showClose: true,
                        message: res.meta.msg,
                        type: 'error',
                    })
                    return;
                }
                userStore.setToken(res.data.accessToken);
                ElMessage({
                    showClose: true,
                    message: "登录成功!",
                    type: 'success',
                })
                router.push('/');
            })
        } else {
            ElMessage({
                showClose: true,
                message: '请输入正确格式',
                type: 'warning',
            })
        }
    })
}
</script>

<style scoped>
.container{
	position: relative;
    width: 100vw;
    height: 100vh;
    background: url(../assets/bg_snow.JPG) no-repeat center; 
    background-size:100% 100%;
    background-attachment:fixed;
}
section{
	position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    /* background: rgba(255, 255, 255, 0.3); */
    z-index: 10;
}
.login-box{
    position: absolute;
    left: 70%;
    top: 50%;
    transform: translate(-50%,-50%);
    width: 450px;
    height: 500px;
    border-radius: 8px;
    overflow: hidden;
    display: flex;
    /* box-shadow: 0px 0px 5px #777; */
}
.login-right{
    position: relative;
    width: 350px;
    height: 250px;
    margin-top: 100px;
    margin-left: 80px;
    padding: 0 15px;
    background: rgba(255, 255, 255, 0.2);
}
.login-user{
    width: 100%;
    height: 40px;
    border-bottom: 1px solid #666;
    margin-top: 30px;
    display: flex;
    justify-content: space-between;
    align-items: center;
}
.login-user i{
    font-size: 18px;
    color: #666;
    margin-left: 5px;
}
.login-user input{
    width: 80% !important;
    height: 35px;
    outline: none;
    color: #666666;
    border: 0;
    padding: 0 5px;
}
.login-password{
    width: 100%;
    height: 40px;
    border-bottom: 1px solid #666;
    margin-top: 30px;
    display: flex;
    justify-content: space-between;
    align-items: center;
}
.login-password i{
    font-size: 18px;
    color: #666;
    margin-left: 5px;
}
.login-password input{
    width: calc(100% - 30px);
    height: 35px;
    outline: none;
    color: #666666;
    border: 0;
    padding: 0 5px;
}
.login-submit{
    width: 100%;
    height: 40px;
    margin-top: 30px;
    display: flex;
    align-items: center;
}
.login-submit button{
    width: 100%;
    height: 35px;
    outline: none;
    border: none;
    letter-spacing: 5px;
    border-radius: 18px;
    font-weight: bold;
    margin-bottom: 5px;
}
:deep .el-form-item__content{
	flex-wrap: nowrap;
}
:deep .el-input__wrapper {
  background: transparent;
  box-shadow: none !important;
}
:deep .el-input__inner {
  border: none !important;
  /* color: red !important; */
  box-shadow: none !important;
}
:deep .el-form-item__error{
	top: 120%;
}
:deep .el-input {
  width: 90%;
  margin-left: 10px;
}
:deep .el-input__inner::placeholder {
  color: rgba(255, 255, 255, 0.8);
}
.login-user svg{
  color: rgba(255, 255, 255, 0.8)
}
.login-password svg{
  color: rgba(255, 255, 255, 0.8)
}
:deep .el-input__inner{
  color: rgba(255, 255, 255, 0.8)
}
</style>