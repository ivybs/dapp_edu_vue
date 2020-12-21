<template>
  <el-row class="tac">
    <el-col :span="200">
      <el-menu
        default-active="2"
        class="el-menu-vertical-demo"
        @open="handleOpen"
        @close="handleClose"
        :router="true"
        :unique-opened="true"
      >
        <el-submenu index="1">
          <template slot="title">
            <i class="el-icon-location"></i>
            <span slot="title">教育资源管理</span>
          </template>          
          <el-menu-item index="editor">
            <i class="el-icon-circle-check"></i>
            <span>在线编辑</span>
          </el-menu-item>
          <el-menu-item index="eduList">
            <i class="el-icon-circle-check"></i>
            <span>已发布资源</span>
          </el-menu-item>
          <el-menu-item index="eduList">
            <i class="el-icon-circle-check"></i>
            <span>已购资源</span>F
          </el-menu-item>
          <el-menu-item index="editor">
            <i class="el-icon-circle-check"></i>
            <span>在线编辑</span>
          </el-menu-item>
          <el-menu-item index="editor">
            <i class="el-icon-circle-check"></i>
            <span>已订阅的主题</span>
          </el-menu-item>
        </el-submenu>
        <el-submenu index="2">
          <template slot="title">
            <i class="el-icon-location"></i>
            <span slot="title">学业信息认证</span>
          </template>
          <el-menu-item index="applyCerti">
            <i class="el-icon-circle-check"></i>
            <span>学业认证申请</span>
          </el-menu-item>
          <el-menu-item index="exportCerti">
            <i class="el-icon-circle-check"></i>
            <span>学业信息查看和导出</span>
          </el-menu-item>
        </el-submenu>
        <el-submenu index="3">
          <template slot="title">
            <i class="el-icon-location"></i>
            <span slot="title">个人信息与账户</span>
          </template>
          <el-menu-item index="userInfo">
            <i class="el-icon-circle-check"></i>
            <span>个人信息</span>
          </el-menu-item>
          <el-menu-item index="walletInfo">
            <i class="el-icon-circle-check"></i>
            <span>账户信息</span>
          </el-menu-item>
        </el-submenu>
      </el-menu>
    </el-col>
  </el-row>
</template>

<script>
export default {
  //import引入的组件
  components: {},
  data() {
    return {};
  },
  //方法集合
  methods: {
    handleOpen(key, keyPath) {
      console.log(key, keyPath);
    },
    handleClose(key, keyPath) {
      console.log(key, keyPath);
    },
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
  activated() {}, //如果页面有keep-alive缓存功能，这个函数会触发
};
</script>
<style>
.el-menu-vertical-demo:not(.el-menu--collapse) {
  width: 219px;
  min-height: 400px;
}
</style>