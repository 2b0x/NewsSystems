$('#update').click(function(){
		$(this).fadeToggle();
		$('#pwdBox').fadeToggle();
		$('#photo').removeAttr('disabled');
		$('#name').removeAttr('disabled');
		$('#phone').removeAttr('disabled');
		$('#school').removeAttr('disabled');
	});
	
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
	            	preview.style.backgroundImage="url("+e.target.result+")";	
				};
				reader.readAsDataURL(file);
			}
			
			
			function subCheck() {
				if($('#school').val()==0){
					alert("请选择院校");
					return false;
				}
				if(!($('#psw').val()==$('#rqpsw').val())){
					alert("两次密码输入不一致请检查");
					return false;
				}
			}
	

//function imgPreview(fileDom) {
//	//判断是否支持FileReader
//	if(window.FileReader) {
//		var reader = new FileReader();
//	} else {
//		alert("您的设备不支持图片预览功能，如需该功能请升级您的设备！");
//	}
//
//	//获取文件
//	var file = fileDom.files[0];
//	var imageType = /^image\//;
//	//是否是图片
//	if(!imageType.test(file.type)) {
//		alert("请选择图片！");
//		return;
//	}
//	//读取完成
//	reader.onload = function(e) {
//		//获取图片dom
//		var img = document.getElementById("preview");
//		//图片路径设置为读取的图片
//		img.src = e.target.result;
//	};
//	reader.readAsDataURL(file);
//}