<template>
 <el-container >
  <el-header>
    <div class="header_title">基于区块链的在线教育平台</div>
    <div><i class="el-icon-switch-button"></i> <el-button type="text" class="exit_btn">退出</el-button></div>
    
  </el-header>
  <el-container>
    <el-aside width="220px">
      <nav-menu></nav-menu>
    </el-aside>
    <el-main>
      <router-view ></router-view>
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
beforeCreate() {
this.$router.push("/default")
}, //生命周期-创建之前
beforeMount() {}, //生命周期-挂载之前
beforeUpdate() {}, //生命周期-更新之前
updated() {}, //生命周期-更新之后
beforeDestroy() {}, //生命周期-销毁之前
destroyed() {}, //生命周期-销毁完成
activated() {} //如果页面有keep-alive缓存功能，这个函数会触发
}
</script>
<style>
#app{
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

    display:flex;
    flex-direction: row;
    justify-content: space-between;

  }
  
  
  .el-main {
    background-color: #E9EEF3;
    color: #333;
    height: 100%;
  }

  .header_title{
    line-height: 60px;
    font-size: 20px;
  }
  .el-icon-switch-button{
    font-size: 20px;
    line-height: 60px;
  }
  .exit_btn{
    font-size: 20px;
  }

  

</style>