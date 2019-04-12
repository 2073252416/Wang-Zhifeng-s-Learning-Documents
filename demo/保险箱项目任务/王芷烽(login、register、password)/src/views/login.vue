<template>
  <div>
          <div class="-page-content">
        <div class="-header">
            <img class="-header_statusbar" src="../assets/ztl3.png" alt="">
            <img class="-header_logo" src="../assets/ico.png" alt="">
        </div>
        <div class="-content">
            <div class="-content">
                <form action="">
                    <div class="-content_input">
                        <div class="-content_input_left">
                            <p class="-content_input_left_text">用户名</p>
                        </div>
                        <div class="-content_input_right">
                            <input class="-content_input_right_input" type="text" placeholder="请输入用户名">
                        </div>
                    </div>
                    <div class="-content_input">
                            <div class="-content_input_left">
                                <p class="-content_input_left_text">密码</p>
                            </div>
                            <div class="-content_input_right">
                                <input class="-content_input_right_input" type="text" placeholder="请输入密码">
                            </div>
                        </div>
                    <input class="-content_btn" type="submit" value="登录">
                </form>
                    <router-link to="/register"><p class="-content_input_publiclink_register">注册用户</p></router-link>
                    <router-link to="/password"><p class="-content_input_publiclink_password">忘记密码</p></router-link>
            </div>
        </div>
        </div>
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue'

export default {

}
</script>
<style>
*{
    margin: 0px;
    padding: 0px;
}
.-whole{
    width: 750px;
    height: 1294px;
}
.-header{
    width: 750px;
    height: 390px;
    background-color: #f5f5f7;
}
.-header_logo{
    width: 180px;
    height: 180px;
    margin-top: -42px;
    margin-left: 280px;
}
.-content{
    width: 750px;
    height: 904px;
    background-color: #f5f5f7;
}
.-content_input{
    width: 750px;
    height: 90px;
    border-top: 1px solid #e5e5e5;
    border-bottom: 1px solid #e5e5e5;
}
.-content_input_left{
    width: 173px;
    height: 90px;
    background-color: #ffffff;
    float: left;
}
.-content_input_left_text{
    font-size: 31px;
    margin-left: 46px;
    margin-top: 24px;
    color: #000000;
}
.-content_input_right{
    width: 577px;
    height: 90px;
    float: left;
}
.-content_input_right_input{
    width: 577px;
    height: 90px;
    float: left;
    font-size: 31px;
    border: none;
    outline: 0;
}
.-content_input_right_input::-webkit-input-placeholder {
     color: rgb(148, 148, 148);
}
.-content_btn{
    margin-left: 30px;
    width: 690px;
    height: 98px;
    margin-top: 60px;
    font-size: 31px;
    background-color: #0090ff;
    border: none;
    color: white;
    border-radius: 5px;
}
.-content_input_publiclink{
    text-decoration: none;
}
.-content_input_publiclink_register{
    font-size: 31px;
    margin-top: 52px;
    float: left;
    margin-left: 30px;
    color: #808082;
}
.-content_input_publiclink_password{
    font-size: 31px;
    margin-top: 52px;
    float:right;
    margin-right: 30px;
    color: #808082;
}
.-header_statusbar{
    background-color: #0f0f0f;
    width: 100%;
    margin-bottom: 95px;
}
</style>
