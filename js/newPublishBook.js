var _id = null;
$(".bookImg .img-box").click(function() {
	_id = $(this).index();
});

function imgPreview(fileDom) {
	//				console.log(_id);
	var perview = 'perview' + _id;
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
		var img = document.getElementById("preview" + _id);
		//图片路径设置为读取的图片
		img.src = e.target.result;
	};
	reader.readAsDataURL(file);
}

function Reset() {
	for(var i = 0; i < 3; i++) {
		var img = document.getElementById("preview" + i);
		img.src = "img/5.png";
	}
}

var inputs = document.getElementsByTagName('input');

function fsubmit() {
	var form1 = document.getElementById("form1");
	var fd = new FormData(form1);
	var regu = "^[]+$";
	var re = new RegExp(regu);
	//非空检验
	var isNull = 0;
	for(var i = 0; i < inputs.length; i++) {
		(function(i) {
			if(inputs[i].value == "" || re.test(inputs[i].value)) {
				isNull = 1;
			}
		})(i)
	}
	if(isNull == 1) {
//		console.log('is null');
		alert("请将信息填写完整");
	} else {
		$.ajax({
			url: "newPublishBook.php",
			type: "POST",
			data: fd,
			processData: false,
			contentType: false,
			success: function(response, status, xhr) {
//				console.log(xhr);
//				var json = $.parseJSON(response);
//				var result = '';
//				result += json['book_name'] + "<br/>" + json['author'] + "<br/>" + json['price'] + "<br/>" + json['isbn'] + "<br/>" + json['press'] + "<br/>" + json['intro'];
//				result += '<br/><img src="' + json['photo1'] + '" height="100" />';
//				result += '<br/><img src="' + json['photo2'] + '" height="100" />';
//				result += '<br/><img src="' + json['photo3'] + '" height="100" />';
//				result += '<br/>' + json['photo1'];
//				result += '<br/>' + json['photo2'];
//				result += '<br/>' + json['photo3'];
//				$('#result').html(result);
				for(var i = 0; i < 5; i++) {
					inputs[i].value = "";
				}
				document.getElementsByTagName('textarea')[0].value='';
				for(var i = 0; i < 3; i++) {
					var img = document.getElementById("preview" + i);
					img.src = "img/5.png";
				}
				alert("新增图书成功！");
			}
		});
	}
	return false;
}