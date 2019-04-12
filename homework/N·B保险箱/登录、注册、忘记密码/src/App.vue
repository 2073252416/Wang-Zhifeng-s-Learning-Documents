<template>
<div>
  <router-view></router-view>
</div>


</template>
<script>
import App from './fontsizeset.js'
export default {
  
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
    .header_ico{
        float: left;
        margin-left: 30px;
        margin-top: -100px;
    }
    .header_title{
        font-size: 31px;
        float: left;
        color: white;
        margin-top: -76px;
        margin-left: 345px;
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
        margin-top: 30px;
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
        border-radius: 3px;
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
        color: #0091ff;
    }
    .ontainer_input_second{
        font-size: 31px;
        float: left;
        margin-top: 28px;
        color: #0091fe;
    }
    .header_statusbar{
    background-color: #0f0f0f;
    width: 100%;
    margin-bottom: 95px;
}
</style>
