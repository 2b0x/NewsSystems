var data = fillData(5);
	for(var i = 0; i < 6; i++) {
		var list = '<li class="ib-items"><span class="ib-news"><a href="articleDetail.php?artId=' + data[i].id + '" target="_blank">' + data[i].title + '</a></span></li>';
		$('#ib-content1').append(list);
	}
	for(var i = 6; i < 12; i++) {
		var list = '<li class="ib-items"><span class="ib-news"><a href="articleDetail.php?artId=' + data[i].id + '" target="_blank">' + data[i].title + '</a></span></li>';
		$('#ib-content2').append(list);
	}
	data = null;
	
	//填充数据列表的请求函数	
	function fillData(type) {
		var type = type;
		var listData;
		$.ajax({
			async: false,
			url: "publishedInfo.php",
			type: "POST",
			data: {
				type: type,
			},
			success: function(response, status, xhr) {
				listData = JSON.parse(response);
			}
		});
		return listData;
	}