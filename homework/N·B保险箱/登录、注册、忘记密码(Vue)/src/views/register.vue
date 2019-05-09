<template>
    <div class="whole">
        <div class="header-">
            <img class="header_statusbar" src="../assets/ztl3.png" alt="">
                <router-link to="/"><img class="header_ico" src="../assets/Return.png" alt=""></router-link>
            <p class="header_title">注册</p>
        </div>
        <div class="container">
            <form action="">
                <div class="container_input">
                    <p class="container_input_p">手机</p>
                    <input class="container_input_inputbox" type="text" placeholder="请输入手机号">
                </div>
                <div class="container_input_in">
                    <p class="container_input_p">验证码</p>
                    <input class="container_input_inputbox_in" type="text" placeholder="请输入验证码">
                    <a class="container_input_in_link" href="#" v-show="show" @click="getCode">获取验证码</a>
                    <span class="container_input_second" v-show="!show">{{count}}s重新获取</span>
                </div>
                <div class="container_input_bottom">
                    <p class="container_input_p">密码</p>
                    <input class="container_input_inputbox" type="text" placeholder="请输入密码">
                </div>
                <input class="container_register" type="submit" value="注册">
            </form>
        </div>
        <div class="footer">
            <p class="footer_text">注册代表同意</p>
            <a class="footer_link" href="">《隐私条款》</a>
        </div>
    </div>

</template>
<script>
export default {
data(){
  return {
   show: true,
   count: '',
   timer: null,
  }
 },
 methods:{
   getCode(){
     const TIME_COUNT = 60;
     if (!this.timer) {
       this.count = TIME_COUNT;
       this.show = false;
       this.timer = setInterval(() => {
       if (this.count > 0 && this.count <= TIME_COUNT) {
         this.count--;
        } else {
         this.show = true;
         clearInterval(this.timer);
         this.timer = null;
        }
       }, 1000)
      }
   }  
 }
}
</script>
<style>
    *{
        margin: 0px;
        padding: 0px;
    }
    .public_link{
        text-decoration: none;
    }
    .header-{
        background-color: black;
        width: 750px;
        height: 120px;
    }
    .header_statusbar{
        float: left;
    }
    .header_ico{
        float: left;
        margin-left: 30px;
        margin-top: -75px;
    }
    .header_title{
        font-size: 31px;
        float: left;
        color: white;
        margin-top: -76px;
        margin-left: 344px;
    }
    .container{
        width: 750px;
        height: 1062px;
    }
    .container_input{
        width: 690px;
        height: 98px;
        border-top: 1px solid #e6e6e6;
        border-bottom: 1px solid #e6e6e6;
        margin-top: 45px;
        margin-left: 30px;
    }
    .container_input_p{
        font-size: 31px;
        float: left;
        margin-top: 27px;
    }
    .container_input_inputbox{
        font-size: 31px;
        width: 571px;
        height: 98px;
        margin-left: 56px;
        border: none;
        float: left;
        color: black;
        outline: 0;
    }
    .container_input_in{
        width: 690px;
        height: 98px;
        border-top: 1px solid #e6e6e6;
        border-bottom: 1px solid #e6e6e6;
        margin-left: 30px;
    }
    .container_input_inputbox_in{
        font-size: 31px;
        width: 414;
        height: 98px;
        margin-left: 25px;
        border: none;
        float: left;
        color: black;
        outline: 0;
    }
    .container_input_inputbox_in::-webkit-input-placeholder {
     color: rgb(148, 148, 148);
    }
    .container_input_inputbox::-webkit-input-placeholder {
     color: rgb(148, 148, 148);
    }
    .container_input_in_link{
        float: left;
        text-decoration: none;
        font-size: 31px;
        color: #0091fe;
        margin-top: 30px;
    }
    .container_input_bottom{
        width: 690px;
        height: 98px;
        border-top: 1px solid #e6e6e6;
        border-bottom: 1px solid #e6e6e6;
        margin-left: 30px;
    }
    .container_register{
        width: 690px;
        height: 88px;
        background-color: #0090ff;
        border: none;
        font-family: "Microsoft YaHei";
        font-size: 31px;
        color: white;
        margin-left: 30px;
        border-radius: 5px;
        margin-top: 35px;
    }
    .footer{
        width: 750px;
        height: 65px;
    }
    .footer_text{
        font-size: 25px;
        float: left;
        font-family: "Microsoft YaHei";
        margin-bottom: 30px;
        margin-left: 222px;
    }
    .footer_link{
        font-size: 25px;
        text-decoration: none;
        float: left;
        font-family: "Microsoft YaHei";
        color: #0091ff
    }
    .container_input_second{
        font-size: 31px;
        float: left;
        margin-top: 28px;
        color: rgb(133, 15, 15);
    }
</style>
