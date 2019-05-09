<template>
  <div>
          <div class="page-content">
        <div class="header">
            <img class="header_statusbar" src="../assets/ztl3.png" alt="">
            <img class="header_logo" src="../assets/ico.png" alt="">
        </div>
        <div class="content">
            <div class="content">
                <form action="">
                    <div class="content_input">
                        <div class="content_input_left">
                            <p class="content_input_left_text">用户名</p>
                        </div>
                        <div class="content_input_right">
                            <input class="content_input_right_input" type="text" placeholder="请输入用户名">
                        </div>
                    </div>
                    <div class="content_input">
                            <div class="content_input_left">
                                <p class="content_input_left_text">密码</p>
                            </div>
                            <div class="content_input_right">
                                <input class="content_input_right_input" type="text" placeholder="请输入密码">
                            </div>
                        </div>
                    <input class="content_btn" type="submit" value="登录">
                </form>
                    <router-link to="/register"><p class="content_input_publiclink_register">注册用户</p></router-link>
                    <router-link to="/password"><p class="content_input_publiclink_password">忘记密码</p></router-link>
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
.page-content{
    width: 7.5rem;
    height: 13.34rem;
}
*{
    margin: 0rem;
    padding: 0rem;
}
.whole{
    width: 7.5rem;
    height: 13.34rem;
}
.header{
    width: 7.5rem;
    height: 3.6rem;
    background-color: #f5f5f7;
}
.header_logo{
    width:1.8rem;
    height:1.8rem;
    margin-top: -0.2rem;
    margin-left: 2.36rem;
}
.content{
    width: 7.5rem;
    height: 9.04rem;
    background-color: #f5f5f7;
}
.content_input{
    width: 7.50rem;
    height: 0.90rem;
    border-top: 1rem solid #e5e5e5;
    border-bottom: 1rem solid #e5e5e5;
}
.content_input_left{
    width: 1.73rem;
    height: 0.90rem;
    background-color: #ffffff;
    float: left;
}
.content_input_left_text{
    font-size: 0.31rem;
    margin-left: 0.46rem;
    margin-top: 0.24rem;
    color: #000000;
}
.content_input_right{
    width: 5.77rem;
    height: 0.90rem;
    float: left;
}
.content_input_right_input{
    width: 5.77rem;
    height: 0.90rem;
    float: left;
    font-size: 0.31rem;
    border: none;
    outline: 0;
}
.content_input_right_input::-webkit-input-placeholder {
     color: rgb(148, 148, 148);
}
.content_btn{
    margin-left: 0.30rem;
    width: 6.90rem;
    height: 0.98rem;
    margin-top: 0.60rem;
    font-size: 0.31rem;
    background-color: #0090ff;
    border: none;
    color: white;
    border-radius: 0.05rem;
}
.content_input_publiclink{
    text-decoration: none;
}
.content_input_publiclink_register{
    font-size: 0.31rem;
    margin-top: 0.52rem;
    float: left;
    margin-left: 0.30rem;
    color: #808082;
}
.content_input_publiclink_password{
    font-size: 0.31rem;
    margin-top: 0.52rem;
    float:right;
    margin-right: 0.30rem;
    color: #808082;
}
.header_statusbar{
    background-color: #0f0f0f;
    width: 100%;
    margin-bottom: 0.95rem;
}
</style>
