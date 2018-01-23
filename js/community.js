var datas = getCommunity(school);
filldata(datas);

$('#countryList').attr('href', 'info.php?type=1');
$('#schoolList').attr('href', 'info.php?type=2');
$('#consultList').attr('href', 'info.php?type=3');
$('#learnList').attr('href', 'info.php?type=4');

var scro = document.getElementById('scro');
scro.scrollTop = scro.scrollHeight;

var li = $('ul.layui-nav li.layui-nav-item');
li.removeClass('layui-this');
$(li[3]).addClass("layui-this");

$('#subBtn').click(function() {
	var content = $('#content');
	var isNull = content.val().trim().replace(/\s/g, "");

	if(isNull == null || isNull == "" || isNull == ' ') {
		alert('内容不能为空');
		content.val('');
		content.focus();
	} else {
		$.ajax({
			async: false,
			type: "post",
			url: "publishMsg.php",
			data: {
				userid: userid,
				username: username,
				userpic: userpic,
				school: school,
				content: content.val()
			},
			success: function(response, status, xhr) {
				if(response == '1') {
					content.val(' ');
					//								alert('发送成功');
					var datas = getCommunity(school);
					filldata(datas);
				}if(response == '0'){
					alert('未登录不可留言!');
				}
				scro.scrollTop = scro.scrollHeight;
			}
		});
	}
});

function filldata(datas) {
	$('#scro').html(' ');
	var datas = datas;
	for(var i = 0; i < datas.length; i++) {
		if(datas[i].userid == userid) {
			var list = '<div class="item-r"><dd class="pic"><div class="communityPic" style="background-image: url(' + datas[i].userpic + ');"></div><span>' + datas[i].username + '</span></dd><dd class="jiao"></dd><div class="item-box"><p>' + datas[i].content + '</p><span>' + datas[i].date + '</span></div></div>';
			$('#scro').append(list);
		} else {
			var list = '<div class="item-l"><dd class="pic"><div class="communityPic" style="background-image: url(' + datas[i].userpic + ');"></div><span>' + datas[i].username + '</span></dd><dd class="jiao"></dd><div class="item-box"><p>' + datas[i].content + '</p><span>' + datas[i].date + '</span></div></div>';
			$('#scro').append(list);
		}
	}
}

function getCommunity(school) {
	var data;
	var school = school;
	$.ajax({
		async: false,
		type: "post",
		url: "getCommunity.php",
		data: {
			school: school
		},
		success: function(response, status, xhr) {
			data = JSON.parse(response);
		}
	});
	return data;
}