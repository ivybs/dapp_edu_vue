<template>
    <div class="login-wrap">
        
        <el-form class="login-form" label-position="left" label-width="80px" :model="format">
            <h1>用户登录</h1>
            <h2>请确保您在本地下载Scatter电子钱包，并且在电子钱包中导入了麒麟测试链的PKI。</h2>
            <h2>{{loginMessage}}</h2>
        </el-form>
    </div>
</template>

<script>
import ScatterJS from '@scatterjs/core';
import ScatterEOS from '@scatterjs/eosjs';
import Eos from 'eosjs';

ScatterJS.plugins( new ScatterEOS() );

const network = ScatterJS.Network.fromJson({
    blockchain:'eos',
    chainId:'5fff1dae8dc8e2fc4d5b23b2c7665c97f9e9d8edf2b6485a86ba311c25639191',
    host:'api-kylin.eoslaomao.com',
    port:443,
    protocol:'https'
});


export default {
//import引入的组件
components: {},
data() {
return {
    format:{
        username: 111,
        password: 111
    },
    loginMessage:null

};
},
//方法集合
methods: {
    loadScatter(){

    },
    handleLogin(){
        this.$router.push("/home")
    }
},
//生命周期-创建完成( 可以访问当前this实例)
created() {
    
},
//生命周期-挂载完成(可以访问D0M元素)
mounted() {
    ScatterJS.connect('eduDapp', {network}).then(connected => {
    if(!connected) {
        this.loginMessage = "未检测到本地安装的scatter"
        return console.error('no scatter');
    }
    const eos = ScatterJS.eos(network, Eos);
    ScatterJS.login().then(id => {
        if(!id){
            this.loginMessage = "登录失败"
            return console.error('no identity');
        }else{
            this.loginMessage = "登录成功"
        } 
        const account = ScatterJS.account('eos');
        const options = {authorization:[`${account.name}@${account.authority}`]};
        console.log(options);
        // eos.transfer(account.name, 'safetransfer', '0.0001 EOS', account.name, options).then(res => {
        //     console.log('sent: ', res);
        // }).catch(err => {
        //     console.error('error: ', err);
        // });
    });
});

},
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