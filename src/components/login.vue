<template>
    <div class="login-wrap">
        
        <el-form class="login-form" label-position="left" label-width="80px" :model="format">
            <h1>用户登录</h1>
            <el-form-item label="用户名">
                <el-input v-model="format.username"></el-input>
            </el-form-item>
            <el-form-item label="密码">
                <el-input v-model="format.password"></el-input>
            </el-form-item>
            <el-button class="login-btn" type="primary" @click="handleLogin">登录</el-button>

        </el-form>
    </div>
</template>

<script>

export default {
//import引入的组件
components: {},
data() {
return {
    format:{
        username: 111,
        password: 111
    },

};
},
//方法集合
methods: {
    handleLogin(){
        this.$router.push("/home")
    }
},
//生命周期-创建完成( 可以访问当前this实例)
created() {},
//生命周期-挂载完成(可以访问D0M元素)
mounted() {},
beforeCreate() {}, //生命周期-创建之前
beforeMount() {}, //生命周期-挂载之前
beforeUpdate() {}, //生命周期-更新之前
updated() {}, //生命周期-更新之后
beforeDestroy() {}, //生命周期-销毁之前
destroyed() {}, //生命周期-销毁完成
activated() {} //如果页面有keep-alive缓存功能，这个函数会触发
}
</script>
<style >
.login-wrap{
    height: 100%;
    background-color: cadetblue;
    display: flex;
    justify-content: center;
    align-items: center;
}
.login-wrap .login-form{
    width: 400px;
    background-color: cornsilk;
    border-radius: 5px;
    padding: 30px;
}
.login-wrap .login-btn{
    width: 100%;

}

</style>