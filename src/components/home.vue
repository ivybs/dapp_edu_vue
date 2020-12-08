<template>
 <el-container >
  <el-header>Header</el-header>
  <el-container>
    <el-aside width="200px">
      <nav-menu></nav-menu>
    </el-aside>
    <el-main>
      <router-view></router-view>
    </el-main>
  </el-container>
</el-container>
</template>

<script>
import navMenu from './navmenu.vue'

export default {
//import引入的组件
components: {navMenu},
data() {
return {

};
},
//方法集合
methods: {
    gotoEditor(){

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
<style>
.el-col{
  width: 200px;
  
}
#app{
    height: 100%;
    margin: 0px;
    padding: 0px;
}
html, body {
    height: 100%;
    margin: 0px;
    padding: 0px;
}
.el-container.is-vertical{
  height: 100%;

}
  .el-header {
    background-color: #B3C0D1;
    color: #333;
    text-align: center;
    line-height: 100px;
  }
  
  /* .el-aside {
    background-color: #D3DCE6;
    color: #333;
    text-align: center;
    line-height: 200px;
  } */
  
  .el-main {
    background-color: #E9EEF3;
    color: #333;
    text-align: center;
    line-height: 160px;
  }
  

</style>