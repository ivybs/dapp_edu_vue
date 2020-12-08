<template>
    <el-row class="tac">   
        <el-col :span="200">    
            <el-menu default-active="2" class="el-menu-vertical-demo" @open="handleOpen" @close="handleClose" :router="true" :unique-opened="true">
                <!-- <el-menu-item index="1">
                    <i class="el-icon-menu"></i>
                    <span slot="title">编辑与上传</span>
                </el-menu-item> -->
                 <el-submenu index="1">
                    <template slot="title">
                        <i class="el-icon-location"></i>
                        <span slot="title">编辑与上传</span>
                    </template>

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
        return {

        };
    },
    //方法集合
    methods: {
        handleOpen(key, keyPath) {
            console.log(key, keyPath);
        },
        handleClose(key, keyPath) {
            console.log(key, keyPath);
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
  .el-menu-vertical-demo:not(.el-menu--collapse) {
    width: 200px;
    min-height: 400px;
  }
</style>