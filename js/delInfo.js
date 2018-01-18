//删除资讯请求
$('#bodyList').on('click', '.infoDel', function() {
	var artId = $(this).attr('data-id');
	$.ajax({
		async: false,
		url: "delInfo.php",
		type: "POST",
		data: {
			artId: artId
		},
		success: function(response, status, xhr) {
			var status = response;
			if(status == 0) {
				alert("删除失败！");
			} else {
				alert("删除成功！");
				fillData(type, p);
			}
		}
	});
});