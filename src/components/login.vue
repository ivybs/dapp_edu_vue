<template>
<el-form :label-position="left" label-width="80px" :model="format">
  <el-form-item label="用户名">
    <el-input v-model="format.username"></el-input>
  </el-form-item>
  <el-form-item label="密码">
    <el-input v-model="format.password"></el-input>
  </el-form-item>
  <el-button type="primary">登录</el-button>

</el-form>
</template>

<script>

export default {
//import引入的组件
components: {},
data() {
return {
    format:{
        username: null,
        password: null
    }

};
},
//方法集合
methods: {

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
</style>