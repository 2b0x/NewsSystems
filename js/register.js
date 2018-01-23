			var picStatus = 0;
			var verNum = 0;
			$(document).ready(function() {
				//粒子背景特效
				$('body').particleground({
					dotColor: '#5cbdaa',
					lineColor: '#5cbdaa'
				});
			});

			function imgPreview(fileDom) {
				picStatus = 1;
				//判断是否支持FileReader
				if(window.FileReader) {
					var reader = new FileReader();
				} else {
					alert("您的设备不支持图片预览功能，如需该功能请升级您的设备！");
				}

				//获取文件
				var file = fileDom.files[0];
				var imageType = /^image\//;
				//是否是图片
				if(!imageType.test(file.type)) {
					alert("请选择图片！");
					return;
				}
				//读取完成
				reader.onload = function(e) {
					//获取图片dom
					var img = document.getElementById("preview");
					//图片路径设置为读取的图片
//					img.src = e.target.result;
	            	preview.style.backgroundImage="url("+e.target.result+")";	
				};
				reader.readAsDataURL(file);
			}

			$("#email").blur(function(){
				var ePattern = /^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/; 
				if(!ePattern.test($(this).val())){
					$(this).val("");
					$(this).attr('placeholder','请输入正确的邮箱');
					$(this).focus();
				}
			});

			$("#name").blur(function(){
				var uPattern = /^[a-zA-Z0-9\u4e00-\u9fa5]{3,6}$/; 
				if(!uPattern.test($(this).val())){
					$(this).val("");
					$(this).attr('placeholder','帐号长度需为3-6个，且不能为符号');
					$(this).focus();
				}
			});
			
			$("#phone").blur(function(){
				var mPattern = /^((13[0-9])|(14[5|7])|(15([0-3]|[5-9]))|(18[0,5-9]))\d{8}$/; 
				if(!mPattern.test($(this).val())){
					$(this).val("");
					$(this).attr('placeholder','请输入正确的手机格式');
					$(this).focus();
				}
			});


			function subCheck() {
				var school = document.getElementsByName('school')[0];
				var password = document.getElementsByName('password')[0];
				var reqpsw = document.getElementsByName('reqpsw')[0];
				var unique=0;
				var email = $('#email').val();
				
				if(picStatus == 0) {
					alert("请上传头像");
					return false;
				}
				if(school.value==0){
					alert("请选择院校");
					return false;
				}
				if(!(password.value==reqpsw.value) ){
					alert("两次密码输入不一致请检查");
					return false;
				}
				$.ajax({
					async: false,
					type: "post",
					url: "isUnique.php",
					data: {
						email: email
					},
					success:function(response, status, xhr){
						result = JSON.parse(response);
						unique = result[0];
					}
				});
				if(unique==1){
					alert('当前邮箱已被注册，请使用新邮箱！');
					return false;
				}
				
				alert('注册成功');
				return true;
			}