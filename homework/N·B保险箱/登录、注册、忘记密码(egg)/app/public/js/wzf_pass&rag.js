function checkForm(){
     var phone = document.getElementById('uid').value;
     a = /^1[34578]\d{9}$/;
     if ((phone).match(a)) {
          document.getElementById('uidt').innerHTML = '√';
          document.getElementById('sj').style.color = 'rgb(0, 160, 85)';
     }
     else if((phone)==""){
		document.getElementById('uidt').innerHTML = '不能为空';
          return false
	}else {
          document.getElementById('uidt').innerHTML = '请输入正确的手机号'
          document.getElementById('sj').style.color = 'red'
          phone = ""
          return false
     }


     var phone5 = document.getElementById('yanzheng').value;
     b = /^\d{5}$/;
     if ((phone5).match(b)) {
          document.getElementById('yan').innerHTML = '√';
          document.getElementById('yz').style.color = 'rgb(0, 160, 85)';
     }
     else if((phone5)==""){
		document.getElementById('yan').innerHTML = '不能为空';
          return false
	}else {
          document.getElementById('yan').innerHTML = '请输入5位数的验证码'
          document.getElementById('yz').style.color = 'red'
          phone5 = ""
          return false
     }

     var phone4 = document.getElementById('mima').value;
     c =  /^[a-zA-Z0-9]{6,8}$/;
     if ((phone4).match(c)) {
          document.getElementById('mi').innerHTML = '√';
          document.getElementById('mm').style.color = 'rgb(0, 160, 85)';
     }
     else if((phone4)==""){
		document.getElementById('mi').innerHTML = '不能为空';
          return false
	}else {
          document.getElementById('mi').innerHTML = '请输入6-8位数字!'
          document.getElementById('mm').style.color = 'red'
          phone4 = ""
          return false
     }

     
}

function yzheng(){
      var oBtn = document.getElementById('btn');
        var flag = true;

        oBtn.addEventListener("click", function () {
            var time = 60;
            oBtn.classList.add('disable');
            oBtn.innerText = '已发送';
               oBtn.style.marginLeft = "3.9rem"
            if (flag) {
                flag = false;
                var timer = setInterval(() => {
                    time--;
                    oBtn.innerText = time + ' s后重新获取'
                    if (time === 0) {
                        clearInterval(timer);
                        oBtn.innerText = '重新获取';
                        oBtn.classList.remove('disable');
                        flag = true;
                    }
                }, 1000)
            }
        });
}